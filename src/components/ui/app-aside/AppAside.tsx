import styles from './AppAside.module.css'

export const AppAside = () => {
    return (
        <aside className={styles.aside}>
            <div className={styles.coins}>100$</div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <a href=''>пункт меню 1</a>
                    </li>
                    <li>
                        <a href=''>пункт меню 2</a>
                    </li>
                    <li>
                        <a href=''>пункт меню 3</a>
                    </li>
                    <li>
                        <a href=''>пункт меню 4</a>
                    </li>
                    <li>
                        <a href=''>пункт меню 5</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
