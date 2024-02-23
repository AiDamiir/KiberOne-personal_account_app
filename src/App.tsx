import { useSelector } from 'react-redux'
import { ProfileScreen } from './components/screens/profile-screen/ProfileScreen'
import { AppAside } from './components/ui/app-aside/AppAside'
import { RootState } from './redux/store'

export function App() {
	const screen = useSelector((state: RootState) => state.nav.screen)
	return (
		<div className='container homeWrapper'>
			<AppAside />
			{screen === 'profile' && <ProfileScreen />}
			{screen === 'store' && <div>store</div>}
			{screen === 'more' && <div>more</div>}
		</div>
	)
}
