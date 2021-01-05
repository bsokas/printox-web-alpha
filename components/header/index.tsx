import { useRouter } from 'next/router'

import styles from './styles.module.css'
import { HeaderLinks } from '../shared/links'
import { Routes } from '../shared/routing'

function Header(){
    const router = useRouter()

    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                {/* Temporary logo for styling purposes */}
                <img
                    onClick={() => router.push('/')}
                    className={styles.logoImg}
                    src="https://cdn0.iconfinder.com/data/icons/agriculture-line-2/48/90-512.png" 
                />
            </div>
            {/* <div className={styles.optionsContainer}>
                {HeaderLinks.map(link => (
                    <a href={link.url} className={styles.optionLink}>{link.title}</a>
                ))}
            </div> */}
            <div className={styles.usersContainer}>
                <button className={styles.button} onClick={() => router.push(Routes.signUp)}>Sign Up</button>
                <button className={styles.button} onClick={() => router.push(Routes.login)}>Log In</button>
            </div>
        </div>
    )
}

export default Header