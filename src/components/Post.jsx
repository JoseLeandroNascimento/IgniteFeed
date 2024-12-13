import { format, formatDistanceToNow } from "date-fns"
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import style from "./Post.module.css"
import { useState } from "react"


export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        "Post muito bacana, hein?!"
    ]);

    const [newCommentText, setNewCommentText] = useState('')

    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBr
    })
    const publishedAtDateRelativeToNo = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: "há"
    })

    function handleNewCommentChange() {
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    function handleCreateNewComment() {

        event.preventDefault()


        setComments([...comments, newCommentText])

        setNewCommentText('')

    }

    function deleteComment(comment) {
        
        setComments(comments.filter(commentItem => commentItem !== comment))

    }

    function handleNewCommentInvalid(){

        event.target.setCustomValidity("Esse campo é obrigatório")
        
    }

    const isNewCommentEmpty = newCommentText.trim().length === 0

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
                    content.map((line) => {
                        if (line.type === "paragraph") {
                            return <p key={line.content}>{line.content}</p>;
                        } else if (line.type == 'link') {
                            return <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                ></textarea>


                <footer>
                    <button type="submit" disabled={isNewCommentEmpty} >Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>

                {comments.map((comment) => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />)
                })}

            </div>

        </article>
    )
}