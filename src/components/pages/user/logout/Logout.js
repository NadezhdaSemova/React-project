

export default function Logout({
    setLogin,
}){
   

    localStorage.clear();
    setLogin();
   
    return
}