import styles from './StoreItem.module.css'

export const StoreItem = () => {
	return (
		<div className={styles.item}>
			<div className={styles.img}></div>
			<div className={styles.itemBody}>
				<p>Название товара</p>
				<div className={styles.itemBottom}>
					<b>цена: 100$</b>
					<button>Купить</button>
				</div>
			</div>
		</div>
	)
}
