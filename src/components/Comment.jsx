import { ThumbsUp, Trash } from "@phosphor-icons/react";
import style from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {

    return (
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/JoseLeandroNascimento.png" />

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time dateTime="2024-12-12 10:05:00">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}></Trash>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                   <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                   </button>
                </footer>
            </div>
        </div>
    )
}