"use client"
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default function profiles() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin')
        }
    })
    const router = useRouter();

    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">Who is watching?</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => router.push('/home')}>
                        <div className="group flex-row w-44 mx-auto">
                            <div
                                className="
                                        w-44 
                                        h-44
                                        rounded-md
                                        flex
                                        items-center
                                        justify-center
                                        border-2
                                        border-transparent
                                        group-hover:cursor-pointer
                                        group-hover:border-white
                                        overflow-hidden
                                        hover:-translate-y-1
                                        transition
                                        "
                            >
                                <img src="/assets/default-blue.png" alt="Watch Profile" />
                            </div>
                            <div className="mt-4 text-neutral-400 text-2xl text-center group-hover:text-white">
                                {session?.user?.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


