import { useParams } from "react-router-dom";
import { responselist } from "../../assets/jsonteste";
import { Imagecard } from "../../components/ImageCard";




export default function Images() {

    const { id } = useParams();


    return (
        <main className="flex flex-col item-center justify-center">
            <h2 className="py-12 text-5xl text-center">Imagens do álbum {id}</h2>

            <ul className="px-8 grid desktop:grid-cols-3 laptop:grid-cols-2 mobile:grid-cols-1 place-items-center  item-center justify-center">

                {responselist.filter(list => list.albumId == id)[0].images.map((item) => {
                    return (
                        Imagecard(item)
                    );
                }
                )}

            </ul>
        </main>
    );
}
