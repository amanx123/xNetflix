type MobileMenu = {
    visible?: boolean;
}

const Menu = ({ visible }: MobileMenu) => {
    if (!visible) {
        return null;
    }
    return (
        <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-4">
                <div className="px-3 text-center text-white hover:underline transition">
                    Home
                </div>
                <div className="px-3 text-center text-white hover:underline transition">
                    Series
                </div>
                <div className="px-3 text-center text-white hover:underline transition">
                    Movies
                </div>
                <div className="px-3 text-center text-white hover:underline transition">
                    New & Popular
                </div>
                <div className="px-3 text-center text-white hover:underline transition">
                    Browse by language
                </div>
                <div className="px-3 text-center text-white hover:underline transition">
                    My List
                </div>
            </div>
        </div>
    )
}

export default Menu
