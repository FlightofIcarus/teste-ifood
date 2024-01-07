
export function Imagecard(item) {
    return <li className="px-4 py-4" key={item.id}>
        <img src={item.url} alt={item.title} />
        <p className="text-center text-base font-bold capitalize text-wrap place-self-stretch">{item.title}</p>
    </li>;
}

