import { lista } from "../assets/MenuItens";
import { Link } from "react-router-dom";

export default function Menulist() {
       
    return (
        <>
        
        <ul className="flex flex-row">
            {lista.map((menuItem) => {return (<li key={menuItem.Id} className="bg-cyan-500 border-yellow-300 border-2 px-10 py-4"><Link to={menuItem.url}>{menuItem.Nome}</Link></li>)})}
        </ul>
        </>
    )
}