import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation"
interface AccountMenuProps {
    visible?: boolean
}


const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin')
        }
    })
    if (!visible) {
        return null;
    }
    return (
        <div className="bg-black absolute top-14 w-56 right-0 py-5 flex-col border-2 border-gray-800 flex rounded-lg">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                    <img className="rounded-md w-8" src="/assets/default-blue.png" alt="user profile" />
                    <p className="text-white text-sm group-hover/item:underline">
                        {session?.user?.name}
                    </p>
                </div>
                <hr className="bg-gray-600 border-0 h-px my-1" />
                <div onClick={() => signOut()} className="px-3 text-center text-white text-sm hover:underline ">
                    Sign out.
                </div>
            </div>
        </div>
    )
}
export default AccountMenu