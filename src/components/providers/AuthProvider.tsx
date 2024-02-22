import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { AuthScreen } from "../screens/auth-screen/AuthScreen"
import { Loader } from "../ui/loader/Loader"

export const AuthProvider = ({ children }: any) => {
	// const router = useRouter()
	const [loading, setLoading] = useState(true)
	const isAuthenticated = useSelector(
		(state: RootState) => state.auth.isAuthenticated
	)

	useEffect(() => {
		// if (!isAuthenticated) {
			// router.push('/')
		// }
		setLoading(false)
	}, [])

	return (
		<>
			{loading ? (
				// Если данные загружаются, отображаем лоадер
				<Loader />
			) : isAuthenticated ? (
				// Если пользователь аутентифицирован и данные загружены, отображаем дочерние компоненты
				children
			) : (
				// Если пользователь не аутентифицирован, отображаем страницу аутентификации
				<AuthScreen />
			)}
		</>
	)
}
