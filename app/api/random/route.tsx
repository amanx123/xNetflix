import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import prismadb from '@/lib/prismadb';
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const session = await getServerSession(authOptions);
    if (session) {
        try {
            const movieCount = await prismadb.movie.count()
            const randomInd = Math.floor(Math.random() * movieCount);
            const randomMovies = await prismadb.movie.findMany({
                take: 1,
                skip: randomInd
            })

            return NextResponse.json(randomMovies[0]);
        } catch (error) {
            return NextResponse.json(error)
        }
    }

}