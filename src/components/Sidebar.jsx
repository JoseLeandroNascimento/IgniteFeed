
import style from "./Sidebar.module.css"
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar() {

    return (
        <aside className={style.sidebar}>
            <img
                className={style.cover}
                src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRldmVsb3B8ZW58MHx8MHx8fDA%3D"
            />

            <div className={style.profile}>

                <img className={style.avatar} src="https://github.com/JoseLeandroNascimento.png"/>

                <strong>Diego Fernandes</strong>
                <span>Web Develop</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}