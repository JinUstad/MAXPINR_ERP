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
  onNext?: () => void;
  onBack?: () => void;
};

export default function ForgotPasswordOtpScreen({ onNext, onBack }: Props) {
  const [code, setCode] = useState(['', '', '', '']);

  const handleChange = (index: number, value: string) => {
    const chars = [...code];
    chars[index] = value.slice(-1);
    setCode(chars);
  };

  const isComplete = code.every((c) => c.length === 1);

  const handleNext = () => {
    if (isComplete) {
      onNext?.();
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
          <Text style={styles.subtitle}>Enter OTP</Text>

          <View style={styles.otpRow}>
            {code.map((value, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={value}
                onChangeText={(text) => handleChange(index, text)}
              />
            ))}
          </View>

          <TouchableOpacity
            style={[styles.nextButton, !isComplete && styles.nextButtonDisabled]}
            onPress={handleNext}
            disabled={!isComplete}
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
    marginBottom: 30,
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
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: DARK_TEAL,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#F9F9F9',
  },
  nextButton: {
    backgroundColor: TEAL_COLOR,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextButtonDisabled: {
    backgroundColor: '#878787',
    opacity: 0.6,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});


