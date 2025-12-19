import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '@/src/screens/Splash';
import LoginScreen from '@/src/screens/Login';
import RegisterScreen from '@/src/screens/Register';
import ForgotPasswordEmailScreen from '@/src/screens/ForgotPasswordEmail';
import ForgotPasswordOtpScreen from '@/src/screens/ForgotPasswordOtp';
import ForgotPasswordResetScreen from '@/src/screens/ForgotPasswordReset';
import DashboardScreen from '@/src/screens/Dashboard';
import ProfileSettingScreen from '@/src/screens/ProfileSetting';
import NotificationScreen from '@/src/screens/Notification';
import MissedCallScreen from '@/src/screens/MissedCall';
import SiteVisitScreen from '@/src/screens/SiteVisit';
import InventoriesScreen from '@/src/screens/Inventories';
import InventriesDetailsScreen from '@/src/screens/InventoriesDetails';
import OpenTaskScreen from '@/src/screens/OpenTask';
import LeadsScreen from '@/src/screens/Leads';

if (Platform.OS === 'web' && typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    input:focus, textarea:focus, select:focus {
      outline: none;
    }
  `;
  document.head.appendChild(style);
}

type RootStackParamList = {
  dashboard: undefined;
  profile: undefined;
  notification: undefined;
  missedCall: undefined;
  siteVisit: undefined;
  inventories: undefined;
  inventriesDetails: { title: string } | undefined;
  openTask: undefined;
  leads: undefined;
  splash: undefined;
  login: undefined;
  register: undefined;
  forgotEmail: undefined;
  forgotOtp: undefined;
  forgotReset: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function SplashRoute({ navigation }: any) {
  return (
    <SplashScreen
      onGetStarted={() => {
        navigation.navigate('login');
      }}
    />
  );
}

function LoginRoute({ navigation }: any) {
  return (
    <LoginScreen
      onRegister={() => {
        navigation.navigate('register');
      }}
      onForgotPassword={() => {
        navigation.navigate('forgotEmail');
      }}
      onLogin={() => {
        navigation.navigate('dashboard');
      }}
    />
  );
}

function RegisterRoute({ navigation }: any) {
  return (
    <RegisterScreen
      onBack={() => {
        navigation.navigate('login');
      }}
      onLogin={() => {
        navigation.navigate('login');
      }}
    />
  );
}

function ForgotEmailRoute({ navigation }: any) {
  return (
    <ForgotPasswordEmailScreen
      onNext={() => navigation.navigate('forgotOtp')}
      onBackWeb={() => navigation.goBack()}
    />
  );
}

function ForgotOtpRoute({ navigation }: any) {
  return (
    <ForgotPasswordOtpScreen
      onNext={() => navigation.navigate('forgotReset')}
      onBack={() => navigation.goBack()}
    />
  );
}
function DashboardRoute({ navigation }: any) {
  return (
    <DashboardScreen navigation={navigation} />
  );
}

function ForgotResetRoute({ navigation }: any) {
  return (
    <ForgotPasswordResetScreen
      onSubmit={() => navigation.navigate('login')}
      onBack={() => navigation.goBack()}
    />
  );
}

export default function App() {
  const linking = {
    // For web, this lets users open /splash, /login, /register directly.
    prefixes: ['/'],
    config: {
      screens: {
        splash: 'splash',
        login: 'login',
        register: 'register',
        dashboard: 'dashboard',
        forgotEmail: 'forgot-password',
        forgotOtp: 'forgot-password-otp',
        forgotReset: 'forgot-password-reset',
        siteVisit: 'site-visit',
        inventories: 'inventories',
        inventriesDetails: 'inventries-details',
        openTask: 'open-task',
        leads: 'leads',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="splash" component={SplashRoute} />
        <Stack.Screen name="login" component={LoginRoute} />
        <Stack.Screen name="register" component={RegisterRoute} />
        <Stack.Screen name="forgotEmail" component={ForgotEmailRoute} />
        <Stack.Screen name="forgotOtp" component={ForgotOtpRoute} />
        <Stack.Screen name="forgotReset" component={ForgotResetRoute} />
        <Stack.Screen name="dashboard" component={DashboardRoute} />
        <Stack.Screen name="profile" component={ProfileRoute} />
        <Stack.Screen name="notification" component={NotificationRoute} />
        <Stack.Screen name="missedCall" component={MissedCallRoute} />
        <Stack.Screen name="siteVisit" component={SiteVisitRoute} />
        <Stack.Screen name="inventories" component={InventoriesRoute} />
        <Stack.Screen name="inventriesDetails" component={InventriesDetailsRoute} />
        <Stack.Screen name="openTask" component={OpenTaskRoute} />
        <Stack.Screen name="leads" component={LeadsRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function ProfileRoute({ navigation }: any) {
  return <ProfileSettingScreen navigation={navigation} />;
}

function NotificationRoute({ navigation }: any) {
  return <NotificationScreen navigation={navigation} />;
}

function MissedCallRoute({ navigation }: any) {
  return <MissedCallScreen navigation={navigation} />;
}

function SiteVisitRoute({ navigation }: any) {
  return <SiteVisitScreen navigation={navigation} />;
}

function InventoriesRoute({ navigation }: any) {
  return <InventoriesScreen navigation={navigation} />;
}

function InventriesDetailsRoute({ navigation, route }: any) {
  return <InventriesDetailsScreen navigation={navigation} route={route} />;
}

function OpenTaskRoute({ navigation }: any) {
  return <OpenTaskScreen navigation={navigation} />;
}

function LeadsRoute({ navigation }: any) {
  return <LeadsScreen navigation={navigation} />;
}




