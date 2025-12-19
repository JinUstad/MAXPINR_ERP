import { useNavigation } from 'expo-router';
import DashboardScreen from '@/src/screens/Dashboard';

export default function Dashboard() {
    const navigation = useNavigation();
    return (
        <DashboardScreen navigation={navigation} />
    );
}
