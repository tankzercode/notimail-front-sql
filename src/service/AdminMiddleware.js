import { Outlet, useNavigate } from "react-router-dom";
import Acceuil from "../page/acceuil";
import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import axios from "axios";

export default function AdminMiddleware() {
    const user = useContext(UserContext)
    const [is_admin, setIs_admin] = useState(false)
    const navigate = useNavigate()
    console.log(user)
    console.log("auth")
    const [isauth, setIsAuth] = useState(false)
    useEffect(() => {

        axios.get(process.env.REACT_APP_BACK + "/users/isAuth", { withCredentials: true }).then((r) => {

            console.log(r)

            if (r.data.is_admin === true) {
                setIs_admin(true)

            }
        }).catch((er) => {


            user.setError("vous etes déconnecté")

        })

    }, [is_admin])


    if (is_admin) {


        return <Outlet></Outlet>
    }

    else {

        return <Acceuil></Acceuil>
    }


}