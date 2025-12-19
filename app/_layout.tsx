import { Stack } from 'expo-router';
import { Platform } from 'react-native';

if (Platform.OS === 'web' && typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
    input:focus, textarea:focus, select:focus {
      outline: none;
    }
  `;
    document.head.appendChild(style);
}

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        />
    );
}
