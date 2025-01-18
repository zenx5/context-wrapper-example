
import Page from "./Page";
import { UserProvider } from "./UserContext";


export default function AppWith(){
    const valueContext = {
        username: 'zenx5',
        avatarUrl: 'https://picsum.photos/200'
    }

    return <UserProvider value={valueContext}>
        <Page />
    </UserProvider>
}