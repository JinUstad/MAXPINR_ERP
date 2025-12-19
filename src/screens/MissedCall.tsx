import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TEXT_DARK = '#091130';
const RED_ACCENT = '#F44336'; // As seen in design
const TEAL_COLOR = '#20B2AA';

interface CallItemProps {
    phoneNumber: string;
    description: string;
    agentName: string;
}

const CallItem = ({ phoneNumber, description, agentName }: CallItemProps) => {
    return (
        <View style={styles.callItem}>
            <View style={styles.iconContainer}>
                <Ionicons name="call" size={20} color="#fff" />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.phoneNumber}>{phoneNumber}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <Text style={styles.agentName}>{agentName}</Text>
        </View>
    );
};

type Props = {
    navigation: any;
};

export default function MissedCallScreen({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
                        <Ionicons name="chevron-back" size={24} color="#666" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Call History</Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>3</Text>
                    </View>
                </View>

                {/* Title Section */}
                <View style={styles.titleSection}>
                    <Text style={styles.pageTitle}>Missed Calls</Text>
                    <Text style={styles.subtitle}>Latest 5 missed calls</Text>
                </View>

                {/* List */}
                <View style={styles.listContainer}>
                    <CallItem
                        phoneNumber="9193022532"
                        description="Latest 5 missed calls"
                        agentName="Agent : Kriti Sharma"
                    />
                    <CallItem
                        phoneNumber="9193022532"
                        description="Latest 5 missed calls"
                        agentName="Agent : Kriti Sharma"
                    />
                    <CallItem
                        phoneNumber="9193022532"
                        description="Latest 5 missed calls"
                        agentName="Agent : Kriti Sharma"
                    />
                    <CallItem
                        phoneNumber="9193022532"
                        description="Latest 5 missed calls"
                        agentName="Agent : Kriti Sharma"
                    />
                    <CallItem
                        phoneNumber="9193022532"
                        description="Latest 5 missed calls"
                        agentName="Agent : Kriti Sharma"
                    />
                    <CallItem
                        phoneNumber="9193022532"
                        description="Latest 5 missed calls"
                        agentName="Agent : Kriti Sharma"
                    />
                </View>

                {/* Decorative circle */}
                <View style={styles.decorativeCircle} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1F4C6B',
    },
    headerButton: {
        padding: 4,
    },
    badge: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#FF3B30',
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        fontSize: 12,
        color: '#FF3B30',
        fontWeight: '600',
    },
    titleSection: {
        marginBottom: 20,
    },
    pageTitle: {
        fontSize: 22,
        fontWeight: '800', // Extra bold as per design
        color: '#091130',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
    },
    listContainer: {
        gap: 12,
    },
    callItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#FFEBEB', // Light red border
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 4,
            },
            android: {
                elevation: 2,
            },
            web: {
                boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
            }
        }),
    },
    iconContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: RED_ACCENT,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    contentContainer: {
        flex: 1,
    },
    phoneNumber: {
        fontSize: 15,
        fontWeight: '700',
        color: TEXT_DARK,
        marginBottom: 2,
    },
    description: {
        fontSize: 12,
        color: '#666',
    },
    agentName: {
        fontSize: 11,
        color: TEXT_DARK,
        fontWeight: '500',
    },
    decorativeCircle: {
        position: 'absolute',
        bottom: -20,
        left: -20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: TEAL_COLOR,
        opacity: 0.6,
    }
});
