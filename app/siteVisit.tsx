import { useNavigation } from 'expo-router';
import SiteVisitScreen from '@/src/screens/SiteVisit';

export default function SiteVisit() {
    const navigation = useNavigation();
    return <SiteVisitScreen navigation={navigation} />;
}
