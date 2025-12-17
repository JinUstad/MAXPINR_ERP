import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const TEAL_COLOR = '#20B2AA';
const DARK_TEAL = '#008B8B';
const LIGHT_TEAL = '#7FFFD4';

type Props = {
  onBack?: () => void;
  onLogin?: () => void;
};

export default function RegisterScreen({ onBack, onLogin }: Props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [dateOfBirthFocused, setDateOfBirthFocused] = useState(false);
  const [genderFocused, setGenderFocused] = useState(false);

  const totalSteps = 6;
  const stepLabels = ['Personal Info', 'Contact Info', 'Address', 'Documents', 'Verification', 'Complete'];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack?.();
    }
  };

  const handleLogin = () => {
    onLogin?.();
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

        <View style={styles.headerSection}>
          <Image source={require('@/assets/images/Maxpine_logo.png')} style={styles.logo} />
        </View>

        <Text style={styles.title}>Create your account</Text>

        <View style={styles.stepperContainer}>
          <View style={styles.stepperHeader}>
            <Text style={styles.stepLabel}>Step {currentStep}</Text>
            <Text style={styles.stepName}>{stepLabels[currentStep - 1]}</Text>
          </View>

          <View style={styles.stepperSteps}>
            {Array.from({ length: totalSteps }, (_, index) => {
              const stepNumber = index + 1;
              const isActive = stepNumber === currentStep;
              const isCompleted = stepNumber < currentStep;

              return (
                <View key={stepNumber} style={styles.stepWrapper}>
                  <View
                    style={[
                      styles.stepCircle,
                      isActive && styles.stepCircleActive,
                      isCompleted && styles.stepCircleCompleted
                    ]}
                  >
                    {isCompleted && <Text style={styles.stepCheckmark}>✓</Text>}
                    {!isCompleted && <Text style={[styles.stepNumber, isActive && styles.stepNumberActive]}>{stepNumber}</Text>}
                  </View>
                  {stepNumber < totalSteps && (
                    <View
                      style={[
                        styles.stepLine,
                        isCompleted && styles.stepLineCompleted
                      ]}
                    />
                  )}
                </View>
              );
            })}
          </View>
        </View>

        {currentStep === 1 && (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <View style={[styles.inputWrapper, usernameFocused && styles.inputWrapperFocused]}>
                <Text style={styles.inputIcon}>🔍</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  placeholderTextColor="#999"
                  value={username}
                  onChangeText={setUsername}
                  onFocus={() => setUsernameFocused(true)}
                  onBlur={() => setUsernameFocused(false)}
                  autoCapitalize="words"
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <View style={[styles.inputWrapper, dateOfBirthFocused && styles.inputWrapperFocused]}>
                <Text style={styles.inputIcon}>📅</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Date of birth"
                  placeholderTextColor="#999"
                  value={dateOfBirth}
                  onChangeText={setDateOfBirth}
                  onFocus={() => setDateOfBirthFocused(true)}
                  onBlur={() => setDateOfBirthFocused(false)}
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <View style={[styles.inputWrapper, genderFocused && styles.inputWrapperFocused]}>
                <Text style={styles.inputIcon}>🔍</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Gender"
                  placeholderTextColor="#999"
                  value={gender}
                  onChangeText={setGender}
                  onFocus={() => setGenderFocused(true)}
                  onBlur={() => setGenderFocused(false)}
                />
                <Text style={styles.dropdownIcon}>▼</Text>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Text style={styles.inputIcon}>↑</Text>
                <TextInput
                  style={styles.input}
                  placeholder="File upload"
                  placeholderTextColor="#999"
                  value={profilePicture}
                  onChangeText={setProfilePicture}
                  editable={false}
                />
              </View>
            </View>
          </View>
        )}

        {currentStep > 1 && (
          <View style={styles.formContainer}>
            <Text style={styles.comingSoon}>Step {currentStep} content coming soon...</Text>
          </View>
        )}

        <View style={styles.navigationContainer}>
          {currentStep > 1 && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBack}
              activeOpacity={0.8}
            >
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNext}
            activeOpacity={0.8}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>You have an account? </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.decorativeCircleBottom} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: TEAL_COLOR,
    opacity: 0.3,
  },
  decorativeCircleBottom: {
    position: 'absolute',
    bottom: -30,
    left: -30,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: LIGHT_TEAL,
    opacity: 0.4,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: DARK_TEAL,
    textAlign: 'center',
    marginBottom: 24,
  },
  stepperContainer: {
    marginBottom: 32,
  },
  stepperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  stepLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: TEAL_COLOR,
  },
  stepName: {
    fontSize: 14,
    fontWeight: '600',
    color: DARK_TEAL,
  },
  stepperSteps: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  stepWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#DDD',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCircleActive: {
    borderColor: TEAL_COLOR,
    backgroundColor: TEAL_COLOR,
  },
  stepCircleCompleted: {
    borderColor: TEAL_COLOR,
    backgroundColor: TEAL_COLOR,
  },
  stepNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#999',
  },
  stepNumberActive: {
    color: '#FFFFFF',
  },
  stepCheckmark: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  stepLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#DDD',
    marginHorizontal: 4,
  },
  stepLineCompleted: {
    backgroundColor: TEAL_COLOR,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F9F9F9',
  },
  inputWrapperFocused: {
    borderColor: '#20AE9B',
  },
  inputIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333',
  },
  dropdownIcon: {
    fontSize: 12,
    color: '#999',
    marginLeft: 8,
  },
  comingSoon: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    paddingVertical: 40,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  backButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: TEAL_COLOR,
    minWidth: 120,
    alignItems: 'center',
  },
  backButtonText: {
    color: TEAL_COLOR,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  nextButton: {
    backgroundColor: TEAL_COLOR,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignSelf: 'center',
    minWidth: 200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  loginText: {
    fontSize: 14,
    color: '#666',
  },
  loginLink: {
    fontSize: 14,
    color: TEAL_COLOR,
    fontWeight: '700',
  },
});

