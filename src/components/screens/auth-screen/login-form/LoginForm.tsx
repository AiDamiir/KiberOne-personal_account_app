import { loginSuccess } from '../../../../redux/slices/authSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './LoginForm.module.css'

export const LoginForm = () => {
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
			const response = { status: 200 }

			if (response.status === 200) {
				dispatch(loginSuccess())
			} else {
				setError(
					'Ошибка аутентификации. Пожалуйста, проверьте свои учетные данные.'
				)
			}
		} catch (error) {
			console.error('Ошибка:', error)
			setError(
				'Произошла ошибка при попытке входа. Пожалуйста, попробуйте еще раз позже.'
			)
		}
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			{error && <span>{error}</span>}
			<input
				type='text'
				placeholder='Логин'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				required
			/>
			<input
				type='password'
				placeholder='Пароль'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<div className={styles.buttonBody}>
				<button type='submit'>Войти</button>
			</div>
		</form>
	)
}
