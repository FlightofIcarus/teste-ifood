import { useEffect, useState } from "react";
import loadEndPoint from "../../assets/FetchFunction";
import {Link} from "react-router-dom"

// let apireturn = await loadEndPoint('/api/albums');



export default function AlbumList(){

    const apireturn = loadEndPoint('/api/albums');

    let responseJson = apireturn;

   const [albuns, setalbuns] = useState([]);

   useEffect(()=>{setalbuns(responseJson)}, [apireturn])

    return(
        <main>
            <ul className="px-8 flex flex-row items-center justify-center flex-wrap">
                {apireturn.map((album) => { return (
                    <Link to={`/album/${album.albumId}`} key={album.albumId}><li className="bg-red-700 hover:bg-red-300 font-mono hover:text-black hover:font-bold p-2 mx-4 text-white" key={album.albumId}>
                        {`Album nº ${album.albumId}`}
                    </li></Link>)})}
            </ul>
        </main>
    )
}

  