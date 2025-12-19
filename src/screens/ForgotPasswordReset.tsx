import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const TEAL_COLOR = '#20B2AA';
const DARK_TEAL = '#091130';

type Props = {
  onSubmit?: () => void;
  onBack?: () => void;
};

export default function ForgotPasswordResetScreen({ onSubmit, onBack }: Props) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmFocused, setConfirmFocused] = useState(false);

  const canSubmit = password.length >= 6 && password === confirmPassword;

  const handleSubmit = () => {
    if (canSubmit) {
      onSubmit?.();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.decorativeCircleTop} />

        {Platform.OS === 'web' && (
          <TouchableOpacity style={styles.webBackButton} onPress={onBack}>
            <Text style={styles.webBackText}>{'<'} Back</Text>
          </TouchableOpacity>
        )}

        <View style={styles.headerSection}>
          <Image
            source={require('@/assets/images/Maxpine_logo.png')}
            style={styles.logo}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Forgot Password</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>New Password</Text>
            <View
              style={[
                styles.inputWrapper,
                passwordFocused && styles.inputWrapperFocused,
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder="********"
                placeholderTextColor="#6A6A6A"
                value={password}
                onChangeText={setPassword}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                secureTextEntry
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password</Text>
            <View
              style={[
                styles.inputWrapper,
                confirmFocused && styles.inputWrapperFocused,
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder="********"
                placeholderTextColor="#6A6A6A"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                onFocus={() => setConfirmFocused(true)}
                onBlur={() => setConfirmFocused(false)}
                secureTextEntry
              />
            </View>
          </View>

          <TouchableOpacity
            style={[styles.nextButton, !canSubmit && styles.nextButtonDisabled]}
            onPress={handleSubmit}
            disabled={!canSubmit}
            activeOpacity={0.8}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  decorativeCircleTop: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: TEAL_COLOR,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  webBackButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  webBackText: {
    fontSize: 14,
    color: DARK_TEAL,
    fontWeight: '600',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: DARK_TEAL,
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: DARK_TEAL,
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A3A3A3',
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F9F9F9',
  },
  inputWrapperFocused: {
    borderColor: TEAL_COLOR,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333',
  },
  nextButton: {
    backgroundColor: TEAL_COLOR,
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  nextButtonDisabled: {
    backgroundColor: '#878787',
    opacity: 0.6,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});


