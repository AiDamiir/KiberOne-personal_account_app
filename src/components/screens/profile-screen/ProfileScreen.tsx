import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { data } from '../auth-screen/data'
import styles from './ProfileScreen.module.css'

export const ProfileScreen = () => {
	const token = useSelector((state: RootState) => state.auth.token)
	const [item, setItem] = useState({
		token: '',
		username: '',
		password: '',
		name: '',
		lastName: '',
		desription: '',
		finishedModules: [''],
		upcomingModules: [''],
	})

	useEffect(() => {
		data.map((dataItem) => {
			if (dataItem.token === token) {
				setItem(dataItem)
			}
			return
		})
	}, [])

	return (
		<div className={styles.profilePage}>
			<div className={styles.userBlock}>
				<div className={styles.userImage}>
					<img src='./img/emptyProfile.jpg' alt='' />
				</div>
				<div className={styles.userInfo}>
					<div className={styles.username}>
						{item.lastName} {item.name}
					</div>
					<div>{item.desription}</div>
				</div>
			</div>

			<div>
				<div className={styles.modules}>
					<h2>Пройденные модули</h2>
					<ul>
						{item.finishedModules.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div className={styles.modules}>
					<h2>Предстоящие модули</h2>
					<ul>
						{item.upcomingModules.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
