import { Header } from './components/Header'

import './global.css'
import styles from './app.module.css'
import { Post } from './components/Post'
import { SideBar } from './components/Sidebar'

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post />
          <Post />
        </main>
      </div>

    </>
  )
}

export default App
