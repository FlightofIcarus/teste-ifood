import Menulist from "./MenuList";
import Logo from "./Logo";
function Header() {
    return (
        <header className="md:container md:mx-auto h-1/6 flex flex-row items-center justify-between max-w-4xl mx-auto sticky">
            <Logo />
            <Menulist />
        </header>
    )
}

export default Header;