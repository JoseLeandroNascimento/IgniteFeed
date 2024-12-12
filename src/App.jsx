import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import "./global.css"
import style from "./App.module.css"

export function App() {

  return (

    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego fernandes"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam delectus corrupti ratione, reiciendis ab commodi, ut deserunt quidem pariatur harum soluta veritatis doloremque temporibus quae laudantium aliquid, voluptas cupiditate dolorum."
          />

          <Post
            author="Maria da Costa"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam delectus corrupti ratione, reiciendis ab commodi, ut deserunt quidem pariatur harum soluta veritatis doloremque temporibus quae laudantium aliquid, voluptas cupiditate dolorum."
          />
        </main>
      </div>

    </div>

  )

}


