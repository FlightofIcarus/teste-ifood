import Footerlist from "./MenuList";
import Logo from "./Logo";

function Footer() {
    return (
        <footer className="p-4 md:container md:mx-auto h-1/6 flex flex-col items-center justify-center bg-redbg  mx-auto fixed bottom-0 right-0 left-0">
            
            <div className="w-[896px] mobile:w-[799] flex flex-row-reverse content-between  justify-between">
                <Footerlist />    
                <Logo />
            </div>
            <p className="my-2">© Copyright 2024 - Icaro Santos</p>
        </footer>
    )
}

export default Footer;