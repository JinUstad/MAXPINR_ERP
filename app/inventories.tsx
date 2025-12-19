import { useNavigation } from 'expo-router';
import InventoriesScreen from '@/src/screens/Inventories';

export default function Inventories() {
    const navigation = useNavigation();
    return <InventoriesScreen navigation={navigation} />;
}
