import { navigateto } from "../../../Router";
import { encryptData } from "../../../helpers/encrypt";

export function RegisterPage(){
    const root = document.getElementById('root');
    root.innerHTML = `
    <form>
        <input type="text" placeholder="Nombre"/>
        <input type="email" autocomplete="username"/>
        <input type="password" autocomplete="current-password"/>
        <button type="submit">crear usuario</button>
    </form>`

    const $Form = document.getElementsByTagName("form")[0];
    

    $Form.addEventListener("submit", async e => {
        e.preventDefault();
        const $createUserForm = document.getElementsByTagName("input")[0];
        const $createEmailForm = document.getElementsByTagName("input")[1];
        const $createPasswordForm = document.getElementsByTagName("input")[2];

        if(!$createUserForm.value || !$createPasswordForm.value || !$createEmailForm.value){
            alert("Debes de llenar todos los campos");
            return
        }

        const data = {
            name: $createUserForm.value,
            email: $createEmailForm.value,
            password: encryptData($createPasswordForm.value),
        }

        const peticion = await fetch('http://localhost:3000/users',{
            method: 'POST',
            header:{ 'content-type': 'application/json'},
            body: JSON.stringify(data)
        });

        if(!peticion){
            alert("No se pudo crear el usuario");
            return;
        }

        alert('Has creado el usuario');

        navigateto('/login');
    })
};