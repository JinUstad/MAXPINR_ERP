import { useNavigation } from 'expo-router';
import LeadsScreen from '@/src/screens/Leads';

export default function Leads() {
    const navigation = useNavigation();
    return <LeadsScreen navigation={navigation} />;
}
