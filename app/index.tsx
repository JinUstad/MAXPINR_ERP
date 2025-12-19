import { useRouter } from 'expo-router';
import SplashScreen from '@/src/screens/splash';

export default function Splash() {
    const router = useRouter();
    return (
        <SplashScreen
            onGetStarted={() => {
                router.replace('/login');
            }}
        />
    );
}
