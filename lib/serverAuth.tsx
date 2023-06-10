// import { NextRequest, NextResponse } from "next/server";
// import prismadb from './prismadb';
// import { NextApiRequest, NextApiResponse } from "next";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth";

// const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
//     const session = await getServerSession(req, res, authOptions);

//     if (!session?.user?.email) {
//         throw new Error('Not Signed In')
//     }

//     const currentUser = await prismadb.user.findUnique({
//         where: {
//             email: session.user.email
//         }
//     })
//     if (!currentUser) {
//         throw new Error('Not Signed In')
//     }
//     return { currentUser };

// }
// export default serverAuth;
