import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import styles from './KiberStore.module.css'
import { StoreItem } from './store-item/StoreItem'

export const KiberStore = () => {
	const cash = useSelector((state: RootState) => state.auth.cash)

	return (
		<div className={styles.storeWrapper}>
			<div className={styles.storeHeader}>
				<b className={styles.coins}>{cash}$</b>
			</div>
			<div className={styles.items}>
				{[...Array(10)].map((_, index) => (
					<StoreItem key={index} />
				))}
			</div>
		</div>
	)
}
