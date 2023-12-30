import Menulist from "./MenuList";

function Header() {
    return (
        <header className="bg-lime-300 md:container md:mx-auto h-1/6 flex flex-col items-center justify-center">
            Aqui está o header.
            <Menulist />
        </header>
    )
}

export default Header;