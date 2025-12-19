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
const TEAL_COLOR = '#20B2AA'; // Matching Dashboard
const BLUE_BORDER = '#2196F3'; // Bright blue for the selected card
const GREY_BORDER = '#EFEFEF';

type Props = {
    navigation: any;
};

// Mock data based on the image
const VISIT_DATA = [
    {
        id: '1',
        name: 'Anish Pandey Kumar',
        visitDate: 'November 26, 2025',
        visitTime: '13:45 AM',
        visitors: '5 visitors',
        preferredSite: 'Anugrah Homes',
        selected: true,
    },
    {
        id: '2',
        name: 'Aman Sharma',
        visitDate: 'November 26, 2025',
        visitTime: '13:45 AM',
        visitors: '5 visitors',
        preferredSite: 'Anugrah Homes',
        selected: false,
    },
    {
        id: '3',
        name: 'Ritik Notiyal Singh',
        visitDate: 'November 26, 2025',
        visitTime: '13:45 AM',
        visitors: '5 visitors',
        preferredSite: 'Anugrah Homes',
        selected: false,
    },
];

export default function SiteVisitScreen({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Site Visit</Text>
                <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>3</Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {VISIT_DATA.map((item) => (
                    <View
                        key={item.id}
                        style={[
                            styles.cardContainer,
                            item.selected ? styles.cardSelected : styles.cardDefault,
                        ]}
                    >
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Name</Text>
                            <Text style={styles.detailValue}>{item.name}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Visit Date</Text>
                            <Text style={styles.detailValue}>{item.visitDate}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Visit Time</Text>
                            <Text style={styles.detailValue}>{item.visitTime}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Number of Visitors</Text>
                            <Text style={styles.detailValue}>{item.visitors}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Preferred Site</Text>
                            <Text style={styles.detailValue}>{item.preferredSite}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Decorative Circle Bottom Left */}
            <View style={styles.decorativeCircle} />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    backButton: {
        padding: 4,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: TEXT_DARK,
    },
    badgeContainer: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#87CEEB', // Sky blue-ish
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        fontSize: 12,
        color: '#0091EA',
        fontWeight: '600',
    },
    scrollContent: {
        padding: 20,
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
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
            },
        }),
    },
    cardSelected: {
        borderColor: BLUE_BORDER,
        borderWidth: 2,
    },
    cardDefault: {
        borderColor: GREY_BORDER,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    detailLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: TEXT_DARK,
        flex: 1,
    },
    detailValue: {
        fontSize: 14,
        color: '#555',
        fontWeight: '500',
        textAlign: 'right',
        flex: 1.5,
    },
    decorativeCircle: {
        position: 'absolute',
        bottom: -20,
        left: -20,
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: TEAL_COLOR,
        opacity: 0.8,
    },
});
