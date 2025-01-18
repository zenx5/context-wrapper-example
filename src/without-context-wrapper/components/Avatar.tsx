import { useUserContext } from "../UserContext"

export default function Avatar() {
    const { username, avatarUrl } = useUserContext()

    return <span className=" flex flex-col items-center">
        <img src={avatarUrl} className="rounded-full block w-10 h-10"/>
        <small className="text-lg first-letter:uppercase">{username}</small>
    </span>
}