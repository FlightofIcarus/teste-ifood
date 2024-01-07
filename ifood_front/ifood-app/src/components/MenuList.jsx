import { lista } from "../assets/MenuItens";
import { Link } from "react-router-dom";

export default function Menulist() {
       
    return (
        <>
        
        <ul className="flex flex-row space-x-3">
            {lista.map((menuItem) => {return (<Link to={menuItem.url} key={menuItem.Id}><li key={menuItem.Id} className="bg-red-700 hover:bg-red-300 px-10 py-4 text-2xl text-white">{menuItem.Nome}</li></Link>)})}
        </ul>
        </>
    )
}