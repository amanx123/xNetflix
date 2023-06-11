import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prismadb from '@/lib/prismadb';
import { NextResponse } from "next/server";
import { without } from "lodash";

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        const { movieId } = await req.json();

        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId,
            }
        });

        if (!existingMovie) {
            throw new Error('Invalid ID');
        }

        const user = await prismadb.user.update({
            where: {
                email: session?.user?.email || '',
            },
            data: {
                favoriteIds: {
                    push: movieId
                }
            }
        });

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json(error, { status: 400 })
    }
}
export async function DELETE(req: Request, res: Response) {
    try {
        const session = await getServerSession(authOptions);
        const { searchParams } = new URL(req.url)
        const movieId = searchParams.get('movieId')

        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId || ''
            }
        });

        if (!existingMovie) {
            throw new Error('Invalid ID');
        }
        const user = await prismadb.user.findUnique({
            where: {
                email: session?.user?.email || ''
            }
        })
        const updatedFavoriteIds = without(user?.favoriteIds, movieId)

        const updatedUser = await prismadb.user.update({
            where: {
                email: session?.user?.email || '',
            },
            data: {
                favoriteIds: updatedFavoriteIds,
            }
        });

        return NextResponse.json(updatedUser);
    } catch (error) {
        return NextResponse.json(error, { status: 400 })
    }
}