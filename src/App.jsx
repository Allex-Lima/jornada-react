import { Header } from './components/Header'

import './global.css'
import styles from './App.module.css'
import { Post } from './components/Post'
import { SideBar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/73409541?v=4',
      name: 'Alex Lima',
      role: 'Desenvolvedor Frontend'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 🖐'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no turn evento da Rocketseat. O nome do projeto é DotorCare.'},
      {type: 'link', content: 'jane.deseng/doctorcore'},
    ],
    publishedAt: new Date('2024-08-02 16:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/73409541?v=4',
      name: 'Júlia Lima',
      role: 'Desenvolvedora Frontend'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 🖐'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no turn evento da Rocketseat. O nome do projeto é DotorCare.'},
      {type: 'link', content: 'jane.deseng/doctorcore'},
    ],
    publishedAt: new Date('2024-08-02 13:00:00'),
  }
]

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
         {posts.map((post) => {
          return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
         })}
        </main>
      </div>

    </>
  )
}

export default App
