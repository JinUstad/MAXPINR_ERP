import { useNavigation } from 'expo-router';
import NotificationScreen from '@/src/screens/Notification';

export default function Notification() {
    const navigation = useNavigation();
    return <NotificationScreen navigation={navigation} />;
}
