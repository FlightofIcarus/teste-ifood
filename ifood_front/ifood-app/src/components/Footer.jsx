import Footerlist from "./MenuList";

function Footer() {
    return (
        <footer className="bg-indigo-800 p-4 md:container md:mx-auto h-1/6 flex flex-col items-center justify-center">
            <Footerlist />
            Aqui está o footer.
        </footer>
    )
}

export default Footer;