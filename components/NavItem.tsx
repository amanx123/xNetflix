interface NavItemProps {
    name: string
}

const NavItem: React.FC<NavItemProps> = ({ name }) => {
    return (
        <div className="text-white cursor-pointer hover:text-gray-300 transition">
            {name}
        </div>
    )
}

export default NavItem
