import { useRouter } from 'expo-router';
import ForgotPasswordResetScreen from '@/src/screens/ForgotPasswordReset';

export default function ForgotReset() {
    const router = useRouter();
    return (
        <ForgotPasswordResetScreen
            onSubmit={() => router.navigate('/login')}
            onBack={() => router.back()}
        />
    );
}
