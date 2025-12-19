import { useRouter } from 'expo-router';
import RegisterScreen from '@/src/screens/register';

export default function Register() {
    const router = useRouter();
    return (
        <RegisterScreen
            onBack={() => {
                router.push('/login');
            }}
            onLogin={() => {
                router.push('/login');
            }}
        />
    );
}
