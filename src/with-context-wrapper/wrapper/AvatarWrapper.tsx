import Avatar from "../components/Avatar"
import { useUserContext } from "../UserContext"

export default function AvatarWrapper() {

    const { username, avatarUrl } = useUserContext()

    return <Avatar username={username} url={avatarUrl} />
}