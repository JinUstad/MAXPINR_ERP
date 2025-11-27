import React from 'react';
import { View, Text, StyleSheet, ViewStyle, ScrollView } from 'react-native';
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
    <View style={[styles.container, { backgroundColor: theme.colors.surface, borderBottomColor: theme.colors.border }, style]}>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressHeader}>
          <Text style={[styles.progressText, { color: theme.colors.text }]}>
            Step {currentStep} of {steps.length}
          </Text>
          <Text style={[styles.progressPercentage, { color: theme.colors.textSecondary }]}>
            {Math.round(progressPercentage)}%
          </Text>
        </View>
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
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.stepsScrollContent}
      >
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
  },
  progressBarContainer: {
    marginBottom: spacing.md,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  progressText: {
    ...typography.bodySmall,
    fontWeight: '600',
  },
  progressPercentage: {
    ...typography.bodySmall,
    fontWeight: '500',
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  stepsScrollContent: {
    paddingHorizontal: spacing.xs,
  },
  stepsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: spacing.sm,
  },
  stepContainer: {
    alignItems: 'center',
    marginHorizontal: spacing.xs,
    minWidth: 80,
    maxWidth: 100,
  },
  stepContent: {
    alignItems: 'center',
    width: '100%',
  },
  stepCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  stepNumber: {
    ...typography.bodySmall,
    fontWeight: '600',
    fontSize: 14,
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepLabel: {
    ...typography.caption,
    textAlign: 'center',
    fontSize: 11,
    lineHeight: 14,
  },
});

