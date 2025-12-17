import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TEAL_COLOR = '#20AE9B';
const DARK_TEAL = '#008B8B';

type Props = {
    onGetStarted?: () => void;
};

export default function SplashScreen({ onGetStarted }: Props) {
    const handleGetStarted = () => {
        onGetStarted?.();
    };

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.decorativeCircleTop} />

                <View style={styles.headerSection}>
                    <Image source={require('@/assets/images/Maxpine_logo.png')} style={styles.logo} />
                </View>

                <View style={styles.cardsContainer}>
                    <View style={styles.card}>
                        <View style={styles.cardImage}>
                            <Image source={require('@/assets/images/splash-img-1.png')} />
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardImage}>
                            <Image source={require('@/assets/images/splash-img-2.png')} />
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardImage}>
                            <Image source={require('@/assets/images/splash-img-3.png')} />
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardImage}>
                            <Image source={require('@/assets/images/splash-img-4.png')} />
                        </View>
                    </View>
                </View>

                <Text style={styles.readyText}>Ready to <Text style={styles.exploreText}>explore?</Text></Text>

                <TouchableOpacity
                    style={styles.getStartedButton}
                    onPress={handleGetStarted}
                    activeOpacity={0.8}
                >
                    <Text style={styles.getStartedText}>Get Start</Text>
                </TouchableOpacity>

                <View style={styles.decorativeCircleBottom} />
            </ScrollView>
        </View>
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
    decorativeCircleBottom: {
        position: 'absolute',
        bottom: -80,
        left: -30,
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: TEAL_COLOR,
    },
    headerSection: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 350,
        height: 180,
        resizeMode: 'contain',
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 30,
        gap: 12,
    },
    card: {
        width: '47%',
        aspectRatio: 1,
        marginBottom: 12,
    },
    cardImage: {
        flex: 1,
        borderRadius: 12,
        overflow: 'hidden',
    },
    readyText: {
        fontSize: 20,
        color: DARK_TEAL,
        marginBottom: 20,
    },
    exploreText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#2B5F79',
    },
    getStartedButton: {
        backgroundColor: TEAL_COLOR,
        paddingVertical: 12,
        paddingHorizontal: 129,
        borderRadius: 25,
        alignSelf: 'center',
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
    getStartedText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});

