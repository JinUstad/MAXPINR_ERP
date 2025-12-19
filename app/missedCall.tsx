import { useNavigation } from 'expo-router';
import MissedCallScreen from '@/src/screens/MissedCall';

export default function MissedCall() {
    const navigation = useNavigation();
    return <MissedCallScreen navigation={navigation} />;
}
