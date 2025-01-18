import { createContext, ReactElement, useContext } from "react";

const UserContext = createContext({
    username:'',
    avatarUrl: ''
})

function useUserContext(){
    return useContext(UserContext)
}

function UserProvider({ value, children }: { value:UserType, children:ReactElement }){
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export {
    useUserContext,
    UserProvider
}