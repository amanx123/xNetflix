"use client"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { signOut, useSession, getSession } from "next-auth/react"
import { redirect } from "next/navigation"
import useCurrentUser from "@/hooks/useCurrentUser"
import Image from "next/image"
import Navbar from "@/components/Navbar"
export default function Home() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin')
        }
    })
    // const { data: user } = useCurrentUser();
    return (
        <>
            <Navbar />
        </>
    )
}