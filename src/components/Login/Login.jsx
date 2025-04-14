import Button from "../Button/Button";
import "./Login.css";

import { useState } from "react";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const MySwal = withReactContent(Swal)

        MySwal.fire({
            position: "center",
            title: `User: ${username}`,
            html: `<div>Password: ${password}</div><br><div>${document.querySelector("input[type='checkbox']").checked === true ? "Lembrar login" : "Não lembrar login"}</div>`,
            showCloseButton: true,
            showConfirmButton: true,
            icon: "success"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Success", "You have logged in successfully!", "success");
            }
        });
        setUsername("");
        setPassword("");
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const MySwal = withReactContent(Swal)

        const { value: formValues } =  await MySwal.fire({
            title: "Registrar",
            text: "Preencha os campos abaixo",
            html: `
                <div class="swal2-input-group">
              <label for="swal-input1">Email</label>
              <input type="email" id="swal-input1" class="swal2-input" placeholder="Enter your email address" required="true">
              </div>
                <div class="swal2-input-group">
              <label for="swal-input2">Password</label>
              <input type="password" id="swal-input2" class="swal2-input" placeholder="Enter your password" required="true">
                </div>
            `,
            focusConfirm: false,
            preConfirm: () => {
                const formValues = [
                    document.getElementById("swal-input1").value,
                    document.getElementById("swal-input2").value
                ];
            }
        });
        if (formValues) {
            Swal.fire(JSON.stringify(document.getElementById("swal-input1").value), JSON.stringify(document.getElementById("swal-input2").value), "success")
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire("Success", "You have registered successfully!", "success");
                }
            });
        }

    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div className="input-field">
                    <Button type="text" placeholder="Enter your username" value={username} onChange={handleInputChange} required={true} />
                </div>
                <div className="input-field">
                    <Button type={"password"} placeholder={"Enter your password"} value={password} onChange={handlePasswordChange} required={true} />
                </div>

                <div className="recall-forget">
                    <label>
                        <Button type="checkbox" required={false} /> Lembrar-me
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button>Entrar</button>

                <div className="signup-link">
                    <p>
                        Não têm uma conta? <a href="#" onClick={handleRegister}>Registrar!</a>
                    </p>
                </div>

            </form>
        </div>
    )
}

export default Login