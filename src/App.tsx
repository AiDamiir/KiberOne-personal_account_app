import { useDispatch, useSelector } from 'react-redux'
import { ProfileScreen } from './components/screens/profile-screen/ProfileScreen'
import { AppAside } from './components/ui/app-aside/AppAside'
import { toggleNavIcon } from './redux/slices/navSlice'
import { RootState } from './redux/store'

export function App() {
	const dispath = useDispatch()
	const screen = useSelector((state: RootState) => state.nav.screen)
	const navOpened = useSelector((state: RootState) => state.nav.navOpened)

	return (
		<div className='container homeWrapper'>
			<div
				className='navIcon'
				onClick={() => dispath(toggleNavIcon(navOpened))}
			></div>
			<AppAside />
			{screen === 'profile' && <ProfileScreen />}
			{screen === 'store' && <div>store</div>}
			{screen === 'more' && <div>more</div>}
		</div>
	)
}
