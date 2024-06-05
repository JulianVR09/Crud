import { navigateto } from "../../../Router";
import { decryptData } from "../../../helpers/encrypt";

export function LoginPage(){
    const root = document.getElementById('root');
    root.innerHTML = `
        <form>
            <input type="email" autocomplete="username"/>
            <input type="password" autocomplete="current-password"/>
            <button type="submit">Iniciar sesión</button>
        </form>`

        const $LoginForm = document.getElementsByTagName("form")[0];

        $LoginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const $LoggendEmailForm = document.getElementsByTagName("input")[0];
            const $LoggendPasswordForm = document.getElementsByTagName("input")[1];

        if(!$LoggendPasswordForm.value || !$LoggendEmailForm.value){
            alert("Debes de llenar todos los campos");
            return
        }

        const response = await fetch('http://localhost:3000/users')

        if(!response.ok){
            alert("Error al iniciar sesión");
            return
        }

        const users = await response.json();
        const $Emailuser = users.find(user => user.email === $LoggendEmailForm.value);

        if(!$Emailuser){
            alert("El usuario no existe");
            return
        }

        if($LoggendPasswordForm.value === decryptData($Emailuser.password)){
            alert("Has iniciado correctamente tu seccion");
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem('token', token);
            navigateto('/task');
        }
    })
}