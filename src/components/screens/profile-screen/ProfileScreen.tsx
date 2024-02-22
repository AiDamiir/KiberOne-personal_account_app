import styles from './ProfileScreen.module.css'

export const ProfileScreen = () => {
	return (
		<div className={styles.profilePage}>
			<div className={styles.profileBackground}></div>

			<div className={styles.userBlock}>
				<div className={styles.userImage}></div>
				<div>
					<div className={styles.username}>Иванов Иван</div>
					<div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
				</div>
			</div>

			<div>
				<div className={styles.modules}>
					<h2>Пройденные модули</h2>
					<ul>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing!</li>
						<li>
							Lorem sit amet consectetur adipisicing elit. Sint, perferendis!
						</li>
						<li>
							Lorem ipsum dolor sit amet adipisicing elit. Sint, perferendis!
						</li>
					</ul>
				</div>
				<div className={styles.modules}>
					<h2>Предстоящие модули</h2>
					<ul>
						<li>Lorem ipsum elit. Sint, perferendis!</li>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
						<li>Lorem ipsum dolor sit amet consectetur. Sint, perferendis!</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
