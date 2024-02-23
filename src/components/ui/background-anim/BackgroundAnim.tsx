import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import styles from './BackgorundAnim.module.css'

export const BackgroundAnim = ({ children }: any) => {
	const isAuthenticated = useSelector(
		(state: RootState) => state.auth.isAuthenticated
	)

	return (
		<div
			className={styles.animWrapper}
			style={
				!isAuthenticated
					? { backgroundColor: '#1abac0' }
					: { backgroundColor: '#1abac0' }
			}
		>
			{children}

			<span className={styles.square + ' ' + styles.squareTl}></span>
			<span className={styles.square + ' ' + styles.squareTr}></span>
			<span className={styles.square + ' ' + styles.squareBl}></span>
			<span className={styles.square + ' ' + styles.squareBr}></span>
		</div>
	)
}
