import { format, formatDistanceToNow } from "date-fns"
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import style from "./Post.module.css"
import { useState } from "react"


export function Post({author,publishedAt,content}) {

    const [comments,setComment] = useState([
        1,
        2,
        3
    ]);

    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{
        locale:ptBr
    })
    const publishedAtDateRelativeToNo = formatDistanceToNow(publishedAt,{
        locale:ptBr,
        addSuffix: "há"
    })

    function handleCreateNewComment(){

        event.preventDefault()
        console.log('oi');
        setComment([...comments,comments[comments.length-1]+1])
        
    }

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar
                        
                        src={author.avatar}
                    />
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>{publishedAtDateRelativeToNo}</time>
            </header>

            <div className={style.content}>
                {
                    content.map(line=>{
                        if(line.type === "paragraph"){
                            return <p>{line.content}</p>;
                        }else if(line.type == 'link'){
                            return <p><a href="#">{line.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário"></textarea>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>

                {comments.map(comment =>{
                    return <Comment/>
                })}

            </div>

        </article>
    )
}