import AvatarWrapper from "../wrapper/AvatarWrapper";


export default function BarNav({ title }:{ title:string }) {

    return <nav className="h-20 flex flex-row justify-between items-center px-4 py-2 border-b mb-10">
        <h1 className="text-4xl font-bold">{ title }</h1>
        <AvatarWrapper />
    </nav>
}