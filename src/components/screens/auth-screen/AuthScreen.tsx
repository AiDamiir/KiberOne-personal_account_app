import { BackgroundAnim } from '../../ui/background-anim/BackgroundAnim'
import styles from './AuthScreen.module.css'
import { SignForm } from './sign-form/SignForm'

export const AuthScreen = () => {
	return (
		<BackgroundAnim>
			<div className={styles.loginField}>
				<div className={styles.loginBackground}>
					<div className={styles.logo}>
						<img src='./logo.jpg' alt='' />
					</div>
					<div className={styles.loginForm}>
						<SignForm />
					</div>
				</div>
			</div>
		</BackgroundAnim>
	)
}
