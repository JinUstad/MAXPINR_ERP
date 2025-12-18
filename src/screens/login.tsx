import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const TEAL_COLOR = '#20B2AA';
const DARK_TEAL = '#091130';

type Props = {
    onRegister?: () => void;
    onForgotPassword?: () => void;
    onLogin?: () => void;
};

export default function LoginScreen({ onRegister, onForgotPassword, onLogin }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const handleLogin = () => {
        console.log('Login pressed', { email, password });
        console.log('Login successful');
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

                <View style={styles.formContainer}>
                    <Text style={styles.subtitleText}>Login</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <View style={[styles.inputWrapper, emailFocused && styles.inputWrapperFocused]}>
                            <Image
                                source={require('@/assets/images/email-icon.svg')}
                                style={styles.inputIcon}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="#6A6A6A"
                                value={email}
                                onChangeText={setEmail}
                                onFocus={() => setEmailFocused(true)}
                                onBlur={() => setEmailFocused(false)}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoComplete="email"
                            />
                        </View>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <View style={[styles.inputWrapper, passwordFocused && styles.inputWrapperFocused]}>
                            <Image
                                source={require('@/assets/images/password-icon.svg')}
                                style={styles.inputIcon}
                            />
                            <Image
                                source={require('@/assets/images/hideShow-pass-icon.svg')}
                                style={styles.eyeIcon}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="*******"
                                placeholderTextColor="#6A6A6A"
                                value={password}
                                onChangeText={setPassword}
                                onFocus={() => setPasswordFocused(true)}
                                onBlur={() => setPasswordFocused(true)}
                                secureTextEntry
                                autoCapitalize="none"
                                autoComplete="password"
                            />
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.forgotPassword}
                        onPress={onForgotPassword}
                    >
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.loginButton, (!email || !password) && styles.loginButtonDisabled]}
                        onPress={handleLogin}
                        disabled={!email || !password}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.loginButtonText}>Log In</Text>
                    </TouchableOpacity>

                    <View style={styles.signupContainer}>
                        <Text style={styles.signupText}>Don&apos;t have an account? </Text>
                        <TouchableOpacity onPress={onRegister}>
                            <Text style={styles.signupLink}>Register</Text>
                        </TouchableOpacity>
                    </View>
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
    logo: {
        width: 350,
        height: 180,
        resizeMode: 'contain',
    },
    headerSection: {
        alignItems: 'center',
        marginBottom: 40,
    },
    formContainer: {
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
    },
    subtitleText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#091130',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
        position: 'relative',
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
        borderColor: '#20AE9B',
    },
    inputIcon: {
        width: 16,
        height: 12,
    },
    eyeIcon: {
        position: 'absolute',
        right: 16,
        width: 19,
        height: 14,
    },
    input: {
        flex: 1,
        paddingVertical: 14,
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 24,
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#1F4C6B',
        fontWeight: '600',
    },
    loginButton: {
        backgroundColor: TEAL_COLOR,
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loginButtonDisabled: {
        backgroundColor: '#878787',
        opacity: 0.6,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupText: {
        fontSize: 14,
        color: '#666',
    },
    signupLink: {
        fontSize: 14,
        color: TEAL_COLOR,
        fontWeight: '700',
    },
});

