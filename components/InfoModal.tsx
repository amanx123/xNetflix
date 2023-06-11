import { AiOutlineClose } from 'react-icons/ai'
import PlayButton from './PlayButton'
import FavoriteButton from './FavoriteButton'
import useInfoModal from '@/hooks/useInfoModal'
import useMovie from '@/hooks/useMovie'
import { useCallback, useEffect, useState } from 'react'


interface InfoModalProps {
    visible?: boolean,
    onClose: any
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
    const [isVisible, setIsVisible] = useState(!!visible)
    const { movieId } = useInfoModal()
    const { data } = useMovie(movieId)

    useEffect(() => {
        setIsVisible(!!visible)
    }, [visible])
    const handleClose = useCallback(() => {
        setIsVisible(false)
        setTimeout(() => { onClose() }, 300)
    }, [onClose])

    if (!visible) {
        return null
    }
    return (
        <div className='z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto inset-0 fixed'>
            <div className='relative w-5/6 mx-auto max-w-2xl rounded-md overflow-hidden'>
                <div className={`${isVisible ? 'scale-100' : 'scale-0'} transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md `}>
                    <div className="relative h-96">
                        <video loop muted autoPlay poster={data?.thumbnailUrl} src={data?.videoUrl} className='w-full brightness-[60%] object-cover h-full'></video>
                        <div className='cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black flex bg-opacity-70 items-center justify-center' onClick={handleClose}>
                            <AiOutlineClose size={20} className='text-white' />
                        </div>
                        <div className='absolute bottom-[10%] left-10'>
                            <p className='text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8'>
                                {data?.title}
                            </p>
                            <div className='flex flex-row gap-4 items-center'>
                                <PlayButton movieId={data?.id} />
                                <FavoriteButton movieId={data?.id} />
                            </div>
                        </div>
                    </div>

                    <div className='px-12 py-8'>
                        <div className='flex gap-4 md:gap-10'>
                            <p className='text-green-400 font-semibold text-lg'>
                                New
                            </p>
                            <p className='text-white font-bold text-lg '>
                                {data?.duration}
                            </p>
                            <p className='text-white font-bold text-lg '>
                                {data?.genre}
                            </p>
                        </div>
                        <p className='text-white text-lg mt-4 '>
                            {data?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoModal