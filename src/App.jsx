import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import "./global.css"
import style from "./App.module.css"

const posts = [
  {
    id: 1,
    author: {
      avatar: "https://github.com/JoseLeandroNascimento.png",
      name: "José Leandro",
      role: "Developer Frontend"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00")
  },
  {
    id: 2,
    author: {
      avatar: "https://github.com/JoseLeandroNascimento.png",
      name: "Pedro da Silva",
      role: "Developer Backend"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-12-13 10:00:00")
  }
]

export function App() {

  return (

    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>

    </div>

  )

}


