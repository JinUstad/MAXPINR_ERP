import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    StatusBar,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, Foundation } from '@expo/vector-icons';

const TEAL_COLOR = '#20B2AA'; // Using the teal color from login for consistency/branding if needed, but design has specific colors
const TEXT_DARK = '#091130';
const CARD_BG_BLUE = '#E6F2FF';
const CARD_ICON_BLUE = '#0066CC'; // Approximate
const CARD_BG_BEIGE = '#FFF4E5';
const CARD_ICON_ORANGE = '#F59E0B';
const CARD_BG_CYAN = '#E0F7FA';
const CARD_ICON_CYAN = '#00ACC1';
const CARD_BG_GREEN = '#E8F5E9';
const CARD_ICON_GREEN = '#2E7D32';

type Props = {
    navigation: any;
};

export default function DashboardScreen({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Ionicons name="menu-outline" size={28} color="#333" />
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <TouchableOpacity
                            style={styles.iconButton}
                            onPress={() => navigation.navigate('notification')}
                        >
                            <Ionicons name="notifications-outline" size={26} color="#333" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                            <Image
                                source={{ uri: 'https://i.pravatar.cc/100?img=12' }}
                                style={styles.avatar}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Greeting */}
                <View style={styles.greetingContainer}>
                    <View style={styles.greetingRow}>
                        <Text style={styles.greetingText}>Hello Rahul</Text>
                        <Text style={styles.handEmoji}>👋</Text>
                    </View>
                    <Text style={styles.subGreetingText}>Here&apos;s your business today.</Text>
                </View>

                {/* Stats Grid */}
                <View style={styles.statsGrid}>
                    {/* Inventories */}
                    <View style={[styles.statCard, { backgroundColor: CARD_BG_BLUE, borderColor: '#cadbebb3' }]}>
                        <View style={styles.statContent}>
                            <Text style={styles.statLabel}>Inventories</Text>
                            <Text style={styles.statValue}>4</Text>
                        </View>
                        <View style={[styles.statIconContainer, { backgroundColor: CARD_ICON_BLUE }]}>
                            <MaterialIcons name="inventory" size={20} color="#fff" />
                        </View>
                    </View>

                    {/* Open Task */}
                    <View style={[styles.statCard, { backgroundColor: CARD_BG_BEIGE, borderColor: '#ebdcc5' }]}>
                        <View style={styles.statContent}>
                            <Text style={styles.statLabel}>Open Task</Text>
                            <Text style={styles.statValue}>03</Text>
                        </View>
                        <View style={[styles.statIconContainer, { backgroundColor: CARD_ICON_ORANGE }]}>
                            <FontAwesome5 name="edit" size={16} color="#fff" />
                        </View>
                    </View>

                    {/* Site Visits */}
                    <View style={[styles.statCard, { backgroundColor: CARD_BG_CYAN, borderColor: '#ccebec' }]}>
                        <View style={styles.statContent}>
                            <Text style={styles.statLabel}>Site Visits</Text>
                            <Text style={styles.statValue}>05</Text>
                        </View>
                        <View style={[styles.statIconContainer, { backgroundColor: CARD_ICON_CYAN }]}>
                            <Foundation name="map" size={20} color="#fff" />
                        </View>
                    </View>

                    {/* Won Deal's */}
                    <View style={[styles.statCard, { backgroundColor: CARD_BG_GREEN, borderColor: '#cbe7cd' }]}>
                        <View style={styles.statContent}>
                            <Text style={styles.statLabel}>Won Deal&apos;s</Text>
                            <Text style={styles.statValue}>10</Text>
                        </View>
                        <View style={[styles.statIconContainer, { backgroundColor: CARD_ICON_GREEN }]}>
                            <Ionicons name="trophy-outline" size={18} color="#fff" />
                        </View>
                    </View>
                </View>

                {/* Recent Active */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Recent Active</Text>
                </View>

                {/* Recent Calls */}
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate('missedCall')}
                    style={styles.cardContainer}
                >
                    <View style={styles.callItem}>
                        <View style={styles.callIconContainer}>
                            <Ionicons name="call" size={20} color="#fff" />
                        </View>
                        <View style={styles.callInfo}>
                            <Text style={styles.phoneNumber}>9193022532</Text>
                            <Text style={styles.callSubtext}>Latest 5 missed calls</Text>
                        </View>
                        <Text style={styles.agentName}>Agent : Kriti Sharma</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.callItem}>
                        <View style={styles.callIconContainer}>
                            <Ionicons name="call" size={20} color="#fff" />
                        </View>
                        <View style={styles.callInfo}>
                            <Text style={styles.phoneNumber}>9193022532</Text>
                            <Text style={styles.callSubtext}>Latest 5 missed calls</Text>
                        </View>
                        <Text style={styles.agentName}>Agent : Kriti Sharma</Text>
                    </View>
                </TouchableOpacity>

                {/* Project Card */}
                <View style={styles.cardContainer}>
                    <View style={styles.projectHeader}>
                        <View style={styles.projectHeaderText}>
                            <Text style={styles.projectName}>SKY LINE AERO</Text>
                            <Text style={styles.projectSubName}>Skyline aero</Text>
                        </View>
                        <View style={styles.projectIconContainer}>
                            <MaterialIcons name="house" size={20} color="#fff" />
                        </View>
                    </View>
                    <View style={styles.projectDetails}>
                        <View style={styles.projectDetailRow}>
                            <Ionicons name="location-outline" size={16} color="#666" style={{ marginRight: 6 }} />
                            <Text style={styles.projectDetailText}>Near, Jewar Airport Uttar Pradesh, 202137</Text>
                        </View>
                        <View style={styles.projectDetailRow}>
                            <MaterialIcons name="grid-on" size={16} color="#666" style={{ marginRight: 6 }} />
                            <Text style={styles.projectDetailText}>20 plots (Grid: 20x20)</Text>
                        </View>
                    </View>
                </View>

                {/* Call Details Card */}
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate('siteVisit')}
                    style={styles.cardContainer}
                >
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Name</Text>
                        <Text style={styles.detailValue}>Anish Pandey Kumar</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Visit Date</Text>
                        <Text style={styles.detailValue}>November 26, 2025</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Visit Time</Text>
                        <Text style={styles.detailValue}>13:45 AM</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Number of Visitors</Text>
                        <Text style={styles.detailValue}>5 visitors</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Preferred Site</Text>
                        <Text style={styles.detailValue}>Anugrah Homes</Text>
                    </View>

                </TouchableOpacity>

                {/* Spacing for bottom */}
                <View style={{ height: 20 }} />

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginRight: 16,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
    },
    greetingContainer: {
        marginBottom: 24,
    },
    greetingRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    greetingText: {
        fontSize: 24,
        fontWeight: '700',
        color: TEXT_DARK,
        marginRight: 8,
    },
    handEmoji: {
        fontSize: 24,
    },
    subGreetingText: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    statCard: {
        width: '48%', // Approx 2 per row
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        // Shadow for subtle depth
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 3,
            },
            android: {
                elevation: 2,
            },
            web: {
                boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
            }
        })
    },
    statContent: {
        flex: 1,
    },
    statLabel: {
        fontSize: 13,
        fontWeight: '600',
        color: '#444',
        marginBottom: 8,
    },
    statValue: {
        fontSize: 20,
        fontWeight: '700',
        color: TEXT_DARK,
    },
    statIconContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    sectionHeader: {
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: TEXT_DARK,
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#EFEFEF',
        // Shadow
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
        overflow: 'hidden', // for decorative circle
    },
    callItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    callIconContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#F44336', // Red color
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    callInfo: {
        flex: 1,
    },
    phoneNumber: {
        fontSize: 15,
        fontWeight: '700',
        color: TEXT_DARK,
    },
    callSubtext: {
        fontSize: 12,
        color: '#666',
    },
    agentName: {
        fontSize: 12,
        color: TEXT_DARK,
        fontWeight: '500',
    },
    divider: {
        height: 1,
        backgroundColor: '#F0F0F0',
        marginVertical: 8,
        marginLeft: 48, // Indent to align with text
    },
    projectHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    projectHeaderText: {
        flex: 1,
    },
    projectName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#555',
        marginBottom: 2,
    },
    projectSubName: {
        fontSize: 14,
        color: TEXT_DARK,
        fontWeight: '500',
    },
    projectIconContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: TEAL_COLOR, // Using Teal from branding since it looks like teal/green
        justifyContent: 'center',
        alignItems: 'center',
    },
    projectDetails: {
        marginTop: 4,
    },
    projectDetailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    projectDetailText: {
        fontSize: 13,
        color: '#555',
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    detailLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: TEXT_DARK,
    },
    detailValue: {
        fontSize: 14,
        color: '#555',
        fontWeight: '500',
    },
   
});
