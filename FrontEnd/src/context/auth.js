import { useContext, useState, createContext, Children, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "arin"
    });

    
    useEffect(() => {
        const data = localStorage.getItem('auth')
        if (data) {
            const parseData = JSON.parse(data)
            setAuth((auth) => ({
                ...auth,
                user: parseData.user,
                token: parseData.token
            }));
        }
    }, []);
    
    axios.defaults.headers.common['Authorization'] = auth?.token;
    
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };