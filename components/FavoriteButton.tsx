import axios from "axios"
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'
import useFavorites from "@/hooks/useFavorites"
import { useCallback, useMemo } from "react"
import useCurrentUser from "@/hooks/useCurrentUser"


interface FavoriteButtonProps {
    movieId: string | any
}
const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
    const { mutate: mutateFavorites } = useFavorites();

    const { data: user, mutate } = useCurrentUser();



    const isFavorite = useMemo(() => {
        const list = user?.favoriteIds || ''
        return list.includes(movieId)
    }, [user, movieId])

    const toggleFavorites = useCallback(async () => {
        let response;
        if (isFavorite) {
            response = await axios.delete(`/api/favorite?movieId=${movieId}`)
        }
        else {
            response = await axios.post('/api/favorite', { movieId })
        }
        const updatedFavoriteIds = response?.data?.favoriteIds;

        mutate({
            ...user,
            favoriteIds: updatedFavoriteIds
        })

        mutateFavorites();

    }, [movieId, isFavorite, mutate, user, mutateFavorites])

    const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus
    return (
        <div onClick={toggleFavorites} className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
            <Icon className="text-white " size={25} />
        </div>
    )
}
export default FavoriteButton