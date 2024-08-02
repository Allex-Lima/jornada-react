import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {
    console.log(props);
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src="https://avatars.githubusercontent.com/u/73409541?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Alexandro Lima</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='23 de Julho às 06:25h' datetime="2024-07-23 06:25:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera &#x1F590;</p>
                <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no turn evento da Rocketseat. O nome do projeto é DotorCare.</p>
                <p>&#x1F449; <a href="">Alex.frontend/doctorcare</a></p>
                <p>&#x1F449;{' '}
                    <a href="">#novoprojeto </a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe seu comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}