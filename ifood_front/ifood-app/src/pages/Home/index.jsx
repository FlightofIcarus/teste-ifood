import Empashis from "../../components/emphasis";

function Main({list}) {
    return (
        <main className="bg-red-400 md:container md:mx-auto h-4/6 flex flex-col items-center justify-center">
            <p>Aqui fica o main</p>
            <Empashis list={list} />
        </main>
    )
}

export default Main;