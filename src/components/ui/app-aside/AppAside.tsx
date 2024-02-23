import { useDispatch } from 'react-redux'
import { setScreen } from '../../../redux/slices/navSlice'
import styles from './AppAside.module.css'

export const AppAside = () => {
	const dispatch = useDispatch()

	return (
		<aside className={styles.aside}>
			<div className={styles.coins}>100$</div>
			<nav className={styles.nav}>
				<ul>
					<li className={styles.navItem}>
						<button
							className='active'
							onClick={() => dispatch(setScreen('profile'))}
						>
							Профиль
						</button>
					</li>
					<li className={styles.navItem}>
						<button onClick={() => dispatch(setScreen('store'))}>
							KIBERstore
						</button>
					</li>
					<li className={styles.navItem}>
						<button onClick={() => dispatch(setScreen('more'))}>Другое</button>
					</li>
				</ul>
			</nav>
		</aside>
	)
}
