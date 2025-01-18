export default function Avatar({ username, url }:{ username:string, url:string }) {
    

    return <span className=" flex flex-col items-center">
        <img src={url} className="rounded-full block w-10 h-10"/>
        <small className="text-lg first-letter:uppercase">{username}</small>
    </span>
}