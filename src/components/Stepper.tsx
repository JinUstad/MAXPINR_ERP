import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { spacing, borderRadius, typography } from '../configs/theme';

interface StepperProps {
  steps: string[];
  currentStep: number;
  style?: ViewStyle;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep, style }) => {
  const { theme } = useTheme();
  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            {
              backgroundColor: theme.colors.border,
            },
          ]}
        >
          <View
            style={[
              styles.progressFill,
              {
                width: `${progressPercentage}%`,
                backgroundColor: theme.colors.primary,
              },
            ]}
          />
        </View>
        <Text style={[styles.progressText, { color: theme.colors.textSecondary }]}>
          Step {currentStep} of {steps.length}
        </Text>
      </View>
      <View style={styles.stepsRow}>
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          const isUpcoming = stepNumber > currentStep;

          const getStepCircleStyle = () => {
            if (isCompleted) {
              return {
                backgroundColor: theme.colors.success,
                borderColor: theme.colors.success,
              };
            }
            if (isActive) {
              return {
                backgroundColor: theme.colors.primary,
                borderColor: theme.colors.primary,
              };
            }
            return {
              backgroundColor: 'transparent',
              borderColor: theme.colors.border,
            };
          };

          const getStepTextStyle = () => {
            if (isActive) {
              return { color: theme.colors.primary, fontWeight: '600' as const };
            }
            if (isCompleted) {
              return { color: theme.colors.text };
            }
            return { color: theme.colors.textSecondary };
          };

          return (
            <View key={index} style={styles.stepContainer}>
              <View style={styles.stepContent}>
                <View
                  style={[
                    styles.stepCircle,
                    getStepCircleStyle(),
                    { borderWidth: isUpcoming ? 2 : 0 },
                  ]}
                >
                  {isCompleted ? (
                    <Text style={styles.checkmark}>✓</Text>
                  ) : (
                    <Text
                      style={[
                        styles.stepNumber,
                        {
                          color: isActive || isCompleted ? '#FFFFFF' : theme.colors.textSecondary,
                        },
                      ]}
                    >
                      {stepNumber}
                    </Text>
                  )}
                </View>
                <Text style={[styles.stepLabel, getStepTextStyle()]} numberOfLines={2}>
                  {step}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
  },
  progressBarContainer: {
    marginBottom: spacing.lg,
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
    marginBottom: spacing.sm,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  progressText: {
    ...typography.caption,
    textAlign: 'center',
  },
  stepsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  stepContainer: {
    flex: 1,
    alignItems: 'center',
  },
  stepContent: {
    alignItems: 'center',
    minWidth: 70,
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  stepNumber: {
    ...typography.bodySmall,
    fontWeight: '600',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stepLabel: {
    ...typography.caption,
    textAlign: 'center',
    fontSize: 10,
  },
});

