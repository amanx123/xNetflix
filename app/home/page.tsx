"use client"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Navbar from "@/components/Navbar"
import BillBoard from "@/components/BillBoard"
import MovieList from "@/components/MovieList"
import useMovieList from "@/hooks/useMovieList"
import useFavorites from "@/hooks/useFavorites"
import InfoModal from "@/components/InfoModal"
import useInfoModal from "@/hooks/useInfoModal"
import useCurrentUser from "@/hooks/useCurrentUser"
export default function Home() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin')
        }
    })
    const { data: user } = useCurrentUser();

    const { data: movies = [] } = useMovieList();
    const { data: favorites = [] } = useFavorites();
    const { isOpen, closeModal } = useInfoModal();
    return (
        <>
            <InfoModal visible={isOpen} onClose={closeModal} />
            <Navbar />
            <BillBoard />
            <div className="pb-40">
                <MovieList title="Trending Now" data={movies} />
                <MovieList title="My List" data={favorites} />
            </div>
        </>
    )
}