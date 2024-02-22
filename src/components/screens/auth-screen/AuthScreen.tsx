import styles from './AuthScreen.module.css'
import { LoginForm } from './login-form/LoginForm'

export const AuthScreen = () => {
	return (
		<>
			<div className={styles.formWrapper}>
				<div className={styles.logo}>
					<img src='./logo.jpg' alt='Логотип' style={{ width: '120px' }} />
				</div>
				<LoginForm />
			</div>
		</>
	)
}
