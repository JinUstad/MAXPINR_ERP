import { useNavigation } from 'expo-router';
import OpenTaskScreen from '@/src/screens/OpenTask';

export default function OpenTask() {
    const navigation = useNavigation();
    return <OpenTaskScreen navigation={navigation} />;
}
