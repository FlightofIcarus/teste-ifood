import { useEffect, useState } from "react";

    


export default function AlbumList(){

    const [albumlist, setAlbumlist] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos').then((resp) => resp.json()).then((data) => {setAlbumlist(data)}).catch((err) => {console.error(err)})}, [])

    
    return(
    <ul className="px-8 flex flex-row flex-wrap">
        {albumlist.map((album) => { if(album.albumId == 1) {return (<li className="px-4 py-4" key={album.id}><img src={album.thumbnailUrl} /></li>)}})}
    </ul>
    )
}