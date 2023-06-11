import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prismadb from '@/lib/prismadb';
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        const user = await prismadb.user.findUnique({
            where: {
                email: session?.user?.email || ''
            }
        })
        const favoriteMovies = await prismadb.movie.findMany({
            where: {
                id: {
                    in: user?.favoriteIds
                }
            }
        })
        return NextResponse.json(favoriteMovies, { status: 200 })
    }
    catch (error) {
        return NextResponse.json(error)
    }
}