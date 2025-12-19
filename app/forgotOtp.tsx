import { useRouter } from 'expo-router';
import ForgotPasswordOtpScreen from '@/src/screens/ForgotPasswordOtp';

export default function ForgotOtp() {
    const router = useRouter();
    return (
        <ForgotPasswordOtpScreen
            onNext={() => router.push('/forgotReset')}
            onBack={() => router.back()}
        />
    );
}
