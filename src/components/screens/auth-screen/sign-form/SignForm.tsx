import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../../../redux/slices/authSlice'
import styles from './SignForm.module.css'

export const SignForm = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState<string>('')
	const dispatch = useDispatch()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			// const response = await axios.post('/api/login', {
			// 	email: username,
			// 	api_key: password,
			// })

			dispatch(loginSuccess())
		} catch (error) {
			console.error('Ошибка:', error)
			setError(
				'Произошла ошибка при попытке входа. Пожалуйста, попробуйте еще раз позже.'
			)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			{error && <span>{error}</span>}
			<div className={styles.field + ' ' + styles.usernameField}>
				<input
					type='text'
					id='username'
					name='username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder='Логин'
					required
				/>
			</div>
			<div className={styles.field + ' ' + styles.passwordField}>
				<input
					type='password'
					id='password'
					name='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Пароль'
					required
				/>
			</div>
			<div className={styles.field + ' ' + styles.buttonField}>
				<button
					className={styles.button + ' ' + styles.buttonLogin}
					type='submit'
				>
					Войти
				</button>
			</div>
		</form>
	)
}
