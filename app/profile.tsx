import { useNavigation } from 'expo-router';
import ProfileSettingScreen from '@/src/screens/ProfileSetting';

export default function Profile() {
    const navigation = useNavigation();
    return <ProfileSettingScreen navigation={navigation} />;
}
