import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
	loginSuccess,
	setCash,
	setToken,
} from '../../../../redux/slices/authSlice'
import { data } from '../data'
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

			const user = data.find(
				(item) => item.username === username && item.password === password
			)

			if (user) {
				dispatch(setCash(user.cash))
				dispatch(setToken(user.token))
				dispatch(loginSuccess())
			} else {
				setUsername('')
				setPassword('')
				console.error('Ошибка: ...', error)
				alert('Неправильный логин или пароль.')
			}
		} catch (error) {
			console.error('Ошибка:', error)
			setError(
				'Произошла ошибка при попытке входа. Пожалуйста, попробуйте еще раз позже.'
			)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
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
