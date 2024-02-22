import { ProfileScreen } from "./components/screens/profile-screen/ProfileScreen";
import { AppAside } from "./components/ui/app-aside/AppAside";

export function App() {
  return (
    <div className='container homeWrapper'>
      <AppAside />
      <ProfileScreen />
    </div>
  )
}
