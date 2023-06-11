"use client"
import { redirect, useRouter } from "next/navigation";
import useMovie from "@/hooks/useMovie";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
export default function watch() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin')
        }
    })
    const router = useRouter();
    const { movieId } = useParams();
    const { data } = useMovie(movieId as string);

    return (
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-50">
                <AiOutlineArrowLeft onClick={() => router.push('/home')} size={40} className="text-white cursor-pointer" />
                <p className="text-white text-1xl md:text-3xl">
                    <span className="font-light">
                        Watching:{" "}
                    </span>
                    {data?.title}
                </p>
            </nav>
            <video
                className="h-full w-full"
                controls
                autoPlay
                src={data?.videoUrl}
            ></video>
        </div>
    )

}