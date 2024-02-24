import { useDispatch, useSelector } from 'react-redux'
import { setScreen, toggleNavIcon } from '../../../redux/slices/navSlice'
import { RootState } from '../../../redux/store'
import styles from './AppAside.module.css'

const navLinks = [
	{ id: 'profile', text: 'Профиль' },
	{ id: 'store', text: 'KIBERstore' },
	{ id: 'more', text: 'Другое' },
]

export const AppAside = () => {
	const dispatch = useDispatch()
	const screen = useSelector((state: RootState) => state.nav.screen)
	const navOpened = useSelector((state: RootState) => state.nav.navOpened)

	const onNavItem = (id: string) => {
		dispatch(setScreen(id))
		dispatch(toggleNavIcon(navOpened))
	}

	return (
		<aside
			className={navOpened ? `${styles.aside} ${styles.active}` : styles.aside}
		>
		
			<nav className={styles.nav}>
				<ul>
					{navLinks.map((item) => (
						<li
							key={item.id}
							className={
								screen === item.id
									? `${styles.navItem} ${styles.active}`
									: styles.navItem
							}
						>
							<button onClick={() => onNavItem(item.id)}>{item.text}</button>
						</li>
					))}

					<li
						className={
							screen === 'exit'
								? `${styles.navItem} ${styles.active}`
								: styles.navItem
						}
					>
						<a href='' onClick={() => dispatch(setScreen('exit'))}>
							Выход
						</a>
					</li>
				</ul>
			</nav>
		</aside>
	)
}
