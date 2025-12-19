import { useNavigation, useLocalSearchParams } from 'expo-router';
import InventriesDetailsScreen from '@/src/screens/InventoriesDetails';

export default function InventriesDetails() {
    const navigation = useNavigation();
    const params = useLocalSearchParams();
    return <InventriesDetailsScreen navigation={navigation} route={{ params }} />;
}
