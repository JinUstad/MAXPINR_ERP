import { useRouter } from 'expo-router';
import LoginScreen from '@/src/screens/login';

export default function Login() {
    const router = useRouter();
    return (
        <LoginScreen
            onRegister={() => {
                router.push('/register');
            }}
            onForgotPassword={() => {
                router.push('/forgotEmail');
            }}
            onLogin={() => {
                router.replace('/dashboard');
            }}
        />
    );
}
