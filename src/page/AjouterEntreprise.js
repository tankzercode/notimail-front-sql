import { useContext, useEffect, useState } from "react"
import UserContext from "../service/UserContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function AjouterEntreprise() {

    const user = useContext(UserContext)

    const navigate = useNavigate()
    const [firm_name, setfirm_name] = useState(null)
    const [first_name, setfirst_name] = useState(null)
    const [last_name, setlast_name] = useState(null)
    const [email, setemail] = useState(null)
    const [phone_number, setphone_number] = useState(null)
    const [code, setCode] = useState(null)
    const [is_admin, setIs_admin] = useState(false)

    function sendData() {
        axios.post(process.env.REACT_APP_BACK + "/users", { firm_name, first_name, last_name, email, phone_number, code, is_admin }, { withCredentials: true }).then((r) => {
            user.setSuccess("utilisateurs ajouté")
            navigate("/admin")

        }).catch((er) => {
            console.log(er)

            user.setError("Une erreur est survenue")
        })
    }


    useEffect(() => {


        console.log(user)
    }, [])





    return (
        <>
            <div style={{ marginRight: "auto", maxWidth: "500px" }} className="" onClick={() => {
                navigate("/admin")
            }}> <button className="btn btn-danger">retour</button>  </div>
            <br></br>

            <div style={{ maxWidth: "500px", margin: "auto", textAlign: "left" }}>


                <div className="mb-3">
                    <label className="form-label">firm_name</label>
                    <input type="email" onChange={(e) => setfirm_name(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">first_name</label>
                    <input type="email" onChange={(e) => { setfirst_name(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">last_name</label>
                    <input type="email" onChange={(e) => { setlast_name(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" onChange={(e) => { setemail(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select class="form-select" onChange={(e) => { setIs_admin(e.target.value) }} aria-label="Default select example">
                        <option selected>Choisir un role</option>
                        <option value="false">Utilisateur</option>
                        <option value="true">Admin</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">phone_number</label>
                    <input type="email" onChange={(e) => { setphone_number(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" onChange={(e) => { setCode(e.target.value) }} className="form-control" id="exampleInputPassword1" />
                </div>

                <div style={{ textAlign: "right" }} >
                    <button onClick={() => { sendData() }} className="btn btn-success">Ajouter</button>  </div>
                <br></br>

            </div>

        </>
    )
}