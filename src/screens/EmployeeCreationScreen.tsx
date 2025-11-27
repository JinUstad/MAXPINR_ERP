import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Stepper } from '../components/Stepper';
import { spacing, typography } from '../configs/theme';

interface EmployeeCreationScreenProps {
  navigation: any;
}

interface FormData {
  // Step 1: Personal Details
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  pincode: string;

  // Step 2: Bank Details
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  accountHolderName: string;
  branchName: string;

  // Step 3: RERA Details
  reraNumber: string;
  reraExpiryDate: string;
  reraCertificate: string;

  // Step 4: Professional Certifications
  certifications: Array<{
    name: string;
    issuingAuthority: string;
    issueDate: string;
    expiryDate: string;
    certificateNumber: string;
  }>;

  // Step 5: Work Experience
  experience: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;

  // Step 6: Additional Information
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelation: string;
  bloodGroup: string;
  aadharNumber: string;
  panNumber: string;

  // Step 7: Terms & Review
  termsAccepted: boolean;
}

const STEPS = [
  'Personal Details',
  'Bank Details',
  'RERA Details',
  'Certifications',
  'Experience',
  'Additional Info',
  'Review',
];

export const EmployeeCreationScreen: React.FC<EmployeeCreationScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountHolderName: '',
    branchName: '',
    reraNumber: '',
    reraExpiryDate: '',
    reraCertificate: '',
    certifications: [],
    experience: [],
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelation: '',
    bloodGroup: '',
    aadharNumber: '',
    panNumber: '',
    termsAccepted: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) {
          newErrors.phone = 'Phone is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
          newErrors.phone = 'Phone must be 10 digits';
        }
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.pincode.trim()) {
          newErrors.pincode = 'Pincode is required';
        } else if (!/^\d{6}$/.test(formData.pincode)) {
          newErrors.pincode = 'Pincode must be 6 digits';
        }
        break;

      case 2:
        if (!formData.bankName.trim()) newErrors.bankName = 'Bank name is required';
        if (!formData.accountNumber.trim()) {
          newErrors.accountNumber = 'Account number is required';
        }
        if (!formData.ifscCode.trim()) {
          newErrors.ifscCode = 'IFSC code is required';
        } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(formData.ifscCode.toUpperCase())) {
          newErrors.ifscCode = 'IFSC code is invalid';
        }
        if (!formData.accountHolderName.trim()) {
          newErrors.accountHolderName = 'Account holder name is required';
        }
        break;

      case 3:
        if (!formData.reraNumber.trim()) newErrors.reraNumber = 'RERA number is required';
        if (!formData.reraExpiryDate.trim()) {
          newErrors.reraExpiryDate = 'RERA expiry date is required';
        }
        break;

      case 4:
      case 5:
        // Optional steps - no validation required
        break;

      case 6:
        if (!formData.emergencyContactName.trim()) {
          newErrors.emergencyContactName = 'Emergency contact name is required';
        }
        if (!formData.emergencyContactPhone.trim()) {
          newErrors.emergencyContactPhone = 'Emergency contact phone is required';
        }
        if (!formData.aadharNumber.trim()) {
          newErrors.aadharNumber = 'Aadhar number is required';
        } else if (!/^\d{12}$/.test(formData.aadharNumber)) {
          newErrors.aadharNumber = 'Aadhar must be 12 digits';
        }
        if (!formData.panNumber.trim()) {
          newErrors.panNumber = 'PAN number is required';
        } else if (!/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(formData.panNumber.toUpperCase())) {
          newErrors.panNumber = 'PAN number is invalid';
        }
        break;

      case 7:
        if (!formData.termsAccepted) {
          newErrors.termsAccepted = 'You must accept the terms and conditions';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < STEPS.length) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(7)) {
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Navigate to success screen or dashboard
      navigation.navigate('Login');
    }, 2000);
  };

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <View style={styles.stepContent}>
            <Text style={[styles.stepTitle, { color: theme.colors.text }]}>
              Personal Information
            </Text>
            <Input
              label="First Name"
              value={formData.firstName}
              onChangeText={(text) => updateFormData('firstName', text)}
              error={errors.firstName}
            />
            <Input
              label="Last Name"
              value={formData.lastName}
              onChangeText={(text) => updateFormData('lastName', text)}
              error={errors.lastName}
            />
            <Input
              label="Email"
              value={formData.email}
              onChangeText={(text) => updateFormData('email', text)}
              keyboardType="email-address"
              autoCapitalize="none"
              error={errors.email}
            />
            <Input
              label="Phone Number"
              value={formData.phone}
              onChangeText={(text) => updateFormData('phone', text)}
              keyboardType="phone-pad"
              error={errors.phone}
            />
            <Input
              label="Date of Birth"
              value={formData.dateOfBirth}
              onChangeText={(text) => updateFormData('dateOfBirth', text)}
              placeholder="DD/MM/YYYY"
            />
            <Input
              label="Address"
              value={formData.address}
              onChangeText={(text) => updateFormData('address', text)}
              multiline
              numberOfLines={3}
              error={errors.address}
            />
            <Input
              label="City"
              value={formData.city}
              onChangeText={(text) => updateFormData('city', text)}
              error={errors.city}
            />
            <Input
              label="State"
              value={formData.state}
              onChangeText={(text) => updateFormData('state', text)}
              error={errors.state}
            />
            <Input
              label="Pincode"
              value={formData.pincode}
              onChangeText={(text) => updateFormData('pincode', text)}
              keyboardType="number-pad"
              error={errors.pincode}
            />
          </View>
        );

      case 2:
        return (
          <View style={styles.stepContent}>
            <Text style={[styles.stepTitle, { color: theme.colors.text }]}>Bank Details</Text>
            <Input
              label="Bank Name"
              value={formData.bankName}
              onChangeText={(text) => updateFormData('bankName', text)}
              error={errors.bankName}
            />
            <Input
              label="Account Number"
              value={formData.accountNumber}
              onChangeText={(text) => updateFormData('accountNumber', text)}
              keyboardType="number-pad"
              error={errors.accountNumber}
            />
            <Input
              label="IFSC Code"
              value={formData.ifscCode}
              onChangeText={(text) => updateFormData('ifscCode', text.toUpperCase())}
              autoCapitalize="characters"
              error={errors.ifscCode}
            />
            <Input
              label="Account Holder Name"
              value={formData.accountHolderName}
              onChangeText={(text) => updateFormData('accountHolderName', text)}
              error={errors.accountHolderName}
            />
            <Input
              label="Branch Name"
              value={formData.branchName}
              onChangeText={(text) => updateFormData('branchName', text)}
            />
          </View>
        );

      case 3:
        return (
          <View style={styles.stepContent}>
            <Text style={[styles.stepTitle, { color: theme.colors.text }]}>RERA Details</Text>
            <Input
              label="RERA Registration Number"
              value={formData.reraNumber}
              onChangeText={(text) => updateFormData('reraNumber', text)}
              error={errors.reraNumber}
            />
            <Input
              label="RERA Expiry Date"
              value={formData.reraExpiryDate}
              onChangeText={(text) => updateFormData('reraExpiryDate', text)}
              placeholder="DD/MM/YYYY"
              error={errors.reraExpiryDate}
            />
            <Input
              label="RERA Certificate (Document Number)"
              value={formData.reraCertificate}
              onChangeText={(text) => updateFormData('reraCertificate', text)}
              placeholder="Enter certificate number or reference"
            />
          </View>
        );

      case 4:
        return (
          <View style={styles.stepContent}>
            <Text style={[styles.stepTitle, { color: theme.colors.text }]}>
              Professional Certifications
            </Text>
            <Text style={[styles.stepDescription, { color: theme.colors.textSecondary }]}>
              Add any professional certifications related to real estate or property dealing.
            </Text>
            <Button
              title="Add Certification"
              onPress={() => {
                const newCert = {
                  name: '',
                  issuingAuthority: '',
                  issueDate: '',
                  expiryDate: '',
                  certificateNumber: '',
                };
                updateFormData('certifications', [...formData.certifications, newCert]);
              }}
              variant="outline"
              fullWidth
              style={styles.addButton}
            />
            {formData.certifications.map((cert, index) => (
              <View key={index} style={[styles.certCard, { borderColor: theme.colors.border }]}>
                <Text style={[styles.certTitle, { color: theme.colors.text }]}>
                  Certification {index + 1}
                </Text>
                <Input
                  label="Certification Name"
                  value={cert.name}
                  onChangeText={(text) => {
                    const updated = [...formData.certifications];
                    updated[index].name = text;
                    updateFormData('certifications', updated);
                  }}
                />
                <Input
                  label="Issuing Authority"
                  value={cert.issuingAuthority}
                  onChangeText={(text) => {
                    const updated = [...formData.certifications];
                    updated[index].issuingAuthority = text;
                    updateFormData('certifications', updated);
                  }}
                />
                <Input
                  label="Certificate Number"
                  value={cert.certificateNumber}
                  onChangeText={(text) => {
                    const updated = [...formData.certifications];
                    updated[index].certificateNumber = text;
                    updateFormData('certifications', updated);
                  }}
                />
                <Input
                  label="Issue Date"
                  value={cert.issueDate}
                  onChangeText={(text) => {
                    const updated = [...formData.certifications];
                    updated[index].issueDate = text;
                    updateFormData('certifications', updated);
                  }}
                  placeholder="DD/MM/YYYY"
                />
                <Input
                  label="Expiry Date"
                  value={cert.expiryDate}
                  onChangeText={(text) => {
                    const updated = [...formData.certifications];
                    updated[index].expiryDate = text;
                    updateFormData('certifications', updated);
                  }}
                  placeholder="DD/MM/YYYY"
                />
                <Button
                  title="Remove"
                  onPress={() => {
                    const updated = formData.certifications.filter((_, i) => i !== index);
                    updateFormData('certifications', updated);
                  }}
                  variant="outline"
                  size="small"
                />
              </View>
            ))}
          </View>
        );

      case 5:
        return (
          <View style={styles.stepContent}>
            <Text style={[styles.stepTitle, { color: theme.colors.text }]}>Work Experience</Text>
            <Text style={[styles.stepDescription, { color: theme.colors.textSecondary }]}>
              Add your work experience in real estate or related fields.
            </Text>
            <Button
              title="Add Experience"
              onPress={() => {
                const newExp = {
                  company: '',
                  position: '',
                  startDate: '',
                  endDate: '',
                  description: '',
                };
                updateFormData('experience', [...formData.experience, newExp]);
              }}
              variant="outline"
              fullWidth
              style={styles.addButton}
            />
            {formData.experience.map((exp, index) => (
              <View key={index} style={[styles.certCard, { borderColor: theme.colors.border }]}>
                <Text style={[styles.certTitle, { color: theme.colors.text }]}>
                  Experience {index + 1}
                </Text>
                <Input
                  label="Company Name"
                  value={exp.company}
                  onChangeText={(text) => {
                    const updated = [...formData.experience];
                    updated[index].company = text;
                    updateFormData('experience', updated);
                  }}
                />
                <Input
                  label="Position"
                  value={exp.position}
                  onChangeText={(text) => {
                    const updated = [...formData.experience];
                    updated[index].position = text;
                    updateFormData('experience', updated);
                  }}
                />
                <Input
                  label="Start Date"
                  value={exp.startDate}
                  onChangeText={(text) => {
                    const updated = [...formData.experience];
                    updated[index].startDate = text;
                    updateFormData('experience', updated);
                  }}
                  placeholder="DD/MM/YYYY"
                />
                <Input
                  label="End Date"
                  value={exp.endDate}
                  onChangeText={(text) => {
                    const updated = [...formData.experience];
                    updated[index].endDate = text;
                    updateFormData('experience', updated);
                  }}
                  placeholder="DD/MM/YYYY or Present"
                />
                <Input
                  label="Description"
                  value={exp.description}
                  onChangeText={(text) => {
                    const updated = [...formData.experience];
                    updated[index].description = text;
                    updateFormData('experience', updated);
                  }}
                  multiline
                  numberOfLines={3}
                />
                <Button
                  title="Remove"
                  onPress={() => {
                    const updated = formData.experience.filter((_, i) => i !== index);
                    updateFormData('experience', updated);
                  }}
                  variant="outline"
                  size="small"
                />
              </View>
            ))}
          </View>
        );

      case 6:
        return (
          <View style={styles.stepContent}>
            <Text style={[styles.stepTitle, { color: theme.colors.text }]}>
              Additional Information
            </Text>
            <Input
              label="Emergency Contact Name"
              value={formData.emergencyContactName}
              onChangeText={(text) => updateFormData('emergencyContactName', text)}
              error={errors.emergencyContactName}
            />
            <Input
              label="Emergency Contact Phone"
              value={formData.emergencyContactPhone}
              onChangeText={(text) => updateFormData('emergencyContactPhone', text)}
              keyboardType="phone-pad"
              error={errors.emergencyContactPhone}
            />
            <Input
              label="Relation"
              value={formData.emergencyContactRelation}
              onChangeText={(text) => updateFormData('emergencyContactRelation', text)}
              placeholder="e.g., Father, Mother, Spouse"
            />
            <Input
              label="Blood Group"
              value={formData.bloodGroup}
              onChangeText={(text) => updateFormData('bloodGroup', text)}
              placeholder="e.g., A+, B+, O+"
            />
            <Input
              label="Aadhar Number"
              value={formData.aadharNumber}
              onChangeText={(text) => updateFormData('aadharNumber', text)}
              keyboardType="number-pad"
              error={errors.aadharNumber}
            />
            <Input
              label="PAN Number"
              value={formData.panNumber}
              onChangeText={(text) => updateFormData('panNumber', text.toUpperCase())}
              autoCapitalize="characters"
              error={errors.panNumber}
            />
          </View>
        );

      case 7:
        return (
          <View style={styles.stepContent}>
            <Text style={[styles.stepTitle, { color: theme.colors.text }]}>Review & Submit</Text>
            <Text style={[styles.stepDescription, { color: theme.colors.textSecondary }]}>
              Please review all your information before submitting.
            </Text>
            <View style={[styles.reviewCard, { backgroundColor: theme.colors.surface }]}>
              <Text style={[styles.reviewSectionTitle, { color: theme.colors.text }]}>
                Personal Details
              </Text>
              <Text style={[styles.reviewText, { color: theme.colors.textSecondary }]}>
                Name: {formData.firstName} {formData.lastName}
              </Text>
              <Text style={[styles.reviewText, { color: theme.colors.textSecondary }]}>
                Email: {formData.email}
              </Text>
              <Text style={[styles.reviewText, { color: theme.colors.textSecondary }]}>
                Phone: {formData.phone}
              </Text>
            </View>
            <View style={[styles.reviewCard, { backgroundColor: theme.colors.surface }]}>
              <Text style={[styles.reviewSectionTitle, { color: theme.colors.text }]}>
                Bank Details
              </Text>
              <Text style={[styles.reviewText, { color: theme.colors.textSecondary }]}>
                Bank: {formData.bankName}
              </Text>
              <Text style={[styles.reviewText, { color: theme.colors.textSecondary }]}>
                Account: {formData.accountNumber}
              </Text>
            </View>
            <View style={[styles.reviewCard, { backgroundColor: theme.colors.surface }]}>
              <Text style={[styles.reviewSectionTitle, { color: theme.colors.text }]}>
                RERA Details
              </Text>
              <Text style={[styles.reviewText, { color: theme.colors.textSecondary }]}>
                RERA Number: {formData.reraNumber}
              </Text>
            </View>
            <TouchableOpacity
              style={[
                styles.checkboxContainer,
                { borderColor: errors.termsAccepted ? theme.colors.error : theme.colors.border },
              ]}
              onPress={() => updateFormData('termsAccepted', !formData.termsAccepted)}
            >
              <View
                style={[
                  styles.checkbox,
                  {
                    backgroundColor: formData.termsAccepted
                      ? theme.colors.primary
                      : 'transparent',
                    borderColor: formData.termsAccepted
                      ? theme.colors.primary
                      : theme.colors.border,
                  },
                ]}
              >
                {formData.termsAccepted && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </View>
              <Text style={[styles.checkboxLabel, { color: theme.colors.text }]}>
                I accept the terms and conditions
              </Text>
            </TouchableOpacity>
            {errors.termsAccepted && (
              <Text style={[styles.errorText, { color: theme.colors.error }]}>
                {errors.termsAccepted}
              </Text>
            )}
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={true}
      >
        {/* Header */}
        <View style={[styles.header, { backgroundColor: theme.colors.surface, borderBottomColor: theme.colors.border }]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={[styles.backButtonText, { color: theme.colors.primary }]}>← Back</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>
            Create Employee Account
          </Text>
          <View style={styles.placeholder} />
        </View>

        {/* Stepper */}
        <Stepper steps={STEPS} currentStep={currentStep} />

        {/* Form Content */}
        <View style={styles.formContent}>
          {renderStepContent()}
        </View>

        {/* Footer Buttons */}
        <View style={[styles.footer, { backgroundColor: theme.colors.surface, borderTopColor: theme.colors.border }]}>
          <View style={[styles.footerButtons, { justifyContent: currentStep > 1 ? 'space-between' : 'center' }]}>
            {currentStep > 1 && (
              <Button
                title="Previous"
                onPress={handlePrevious}
                variant="outline"
                style={[styles.footerButton, styles.footerButtonFlex]}
              />
            )}
            {currentStep > 1 && <View style={styles.spacer} />}
            {currentStep < STEPS.length ? (
              <Button
                title="Next"
                onPress={handleNext}
                style={currentStep === 1 ? [styles.footerButton, styles.singleButton] : [styles.footerButton, styles.footerButtonFlex]}
              />
            ) : (
              <Button
                title="Submit"
                onPress={handleSubmit}
                loading={loading}
                style={currentStep === 1 ? [styles.footerButton, styles.singleButton] : [styles.footerButton, styles.footerButtonFlex]}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: spacing.xl,
    paddingBottom: spacing.md,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  backButton: {
    padding: spacing.sm,
  },
  backButtonText: {
    ...typography.body,
    fontWeight: '500',
  },
  headerTitle: {
    ...typography.h3,
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    width: 60,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: spacing.xl,
  },
  formContent: {
    padding: spacing.lg,
  },
  stepContent: {
    width: '100%',
  },
  stepTitle: {
    ...typography.h2,
    marginBottom: spacing.md,
  },
  stepDescription: {
    ...typography.body,
    marginBottom: spacing.lg,
    lineHeight: 24,
  },
  addButton: {
    marginBottom: spacing.md,
  },
  certCard: {
    padding: spacing.md,
    marginBottom: spacing.md,
    borderRadius: 8,
    borderWidth: 1,
  },
  certTitle: {
    ...typography.h3,
    marginBottom: spacing.md,
  },
  reviewCard: {
    padding: spacing.md,
    marginBottom: spacing.md,
    borderRadius: 8,
  },
  reviewSectionTitle: {
    ...typography.h3,
    marginBottom: spacing.sm,
  },
  reviewText: {
    ...typography.body,
    marginBottom: spacing.xs,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: spacing.md,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    ...typography.body,
    flex: 1,
  },
  errorText: {
    ...typography.caption,
    marginTop: spacing.xs,
  },
  footer: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderTopWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  footerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerButton: {
    minHeight: 48,
  },
  footerButtonFlex: {
    flex: 1,
  },
  singleButton: {
    paddingHorizontal: spacing.xl * 1.5,
  },
  spacer: {
    width: spacing.md,
  },
});

