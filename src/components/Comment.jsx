import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import style from "./Comment.module.css";
import { useState } from "react";

export function Comment({ content,onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComent(){

        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state)=> {
            return state + 1
        })
    }

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

                        <button onClick={handleDeleteComent} title="Deletar comentário">
                            <Trash size={24}></Trash>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}