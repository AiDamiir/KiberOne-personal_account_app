import { useSelector } from 'react-redux'
import { KiberStore } from './components/screens/KiberStore/KiberStore'
import { ProfileScreen } from './components/screens/profile-screen/ProfileScreen'
import { AppAside } from './components/ui/app-aside/AppAside'
import { NavIcon } from './components/ui/nav-icon/NavIcon'
import { RootState } from './redux/store'

export function App() {
	const screen = useSelector((state: RootState) => state.nav.screen)

	return (
		<div className='container homeWrapper'>
			<NavIcon />
			<AppAside />
			{screen === 'profile' && <ProfileScreen />}
			{screen === 'store' && <KiberStore />}
			{screen === 'more' && <div>more</div>}
		</div>
	)
}
