import { useRouter } from 'expo-router';
import ForgotPasswordEmailScreen from '@/src/screens/ForgotPasswordEmail';

export default function ForgotEmail() {
    const router = useRouter();
    return (
        <ForgotPasswordEmailScreen
            onNext={() => router.push('/forgotOtp')}
            onBackWeb={() => router.back()}
        />
    );
}
