import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    StatusBar,
    FlatList,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

type Props = {
    navigation: any;
    route: any;
};

const PROJECT_DATA = [
    {
        id: '1',
        name: 'SKY LINE AERO',
        subName: 'Skyline aero',
        location: 'Near, Jewar Airport Uttar Pradesh, 202137',
        plots: '20 plots (Grid: 20x20)',
    },
    {
        id: '2',
        name: 'Anugrah Homes',
        subName: 'Premium Plots near Jewar Airport',
        location: 'Noida Airport',
        plots: '200 plots (Grid: 200x200)',
    },
    {
        id: '3',
        name: 'SKY LINE AERO',
        subName: 'Skyline aero',
        location: 'Near, Jewar Airport Uttar Pradesh, 202137',
        plots: '20 plots (Grid: 20x20)',
    },
    {
        id: '4',
        name: 'SKY LINE AERO',
        subName: 'Skyline aero',
        location: 'Near, Jewar Airport Uttar Pradesh, 202137',
        plots: '20 plots (Grid: 20x20)',
    },
    {
        id: '5',
        name: 'SKY LINE AERO',
        subName: 'Skyline aero',
        location: 'Near, Jewar Airport Uttar Pradesh, 202137',
        plots: '20 plots (Grid: 20x20)',
    },
];

export default function InventriesDetailsScreen({ navigation, route }: Props) {
    const { title } = route.params || { title: 'Ghaziabad' }; // Default or param

    // Teal color used in branding
    const TEAL_COLOR = '#20B2AA';

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <Ionicons name="chevron-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{title}</Text>
                <View style={styles.placeholderRight} />
            </View>

            {/* List Content */}
            <View style={styles.content}>
                <FlatList
                    data={PROJECT_DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <View style={styles.cardTitleContainer}>
                                    <Text style={styles.cardName}>{item.name}</Text>
                                    <Text style={styles.cardSubName}>{item.subName}</Text>
                                </View>
                                <View style={[styles.iconContainer, { backgroundColor: TEAL_COLOR }]}>
                                    <MaterialIcons name="house" size={20} color="#fff" />
                                </View>
                            </View>

                            <View style={styles.cardDetails}>
                                <View style={styles.detailRow}>
                                    <Ionicons name="location-outline" size={16} color="#666" style={styles.detailIcon} />
                                    <Text style={styles.detailText}>{item.location}</Text>
                                </View>
                                <View style={styles.detailRow}>
                                    <MaterialIcons name="grid-on" size={16} color="#666" style={styles.detailIcon} />
                                    <Text style={styles.detailText}>{item.plots}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            {/* Decorative Circle */}
            <View style={styles.decorativeCircle} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    backButton: {
        padding: 4,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#091130',
        textAlign: 'center',
    },
    placeholderRight: {
        width: 32, // Balance for back button
    },
    content: {
        flex: 1,
    },
    listContent: {
        padding: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#EFEFEF',
        // Shadow
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            },
            web: {
                boxShadow: '0px 1px 3px rgba(0,0,0,0.05)',
            }
        }),
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        alignItems: 'flex-start',
    },
    cardTitleContainer: {
        flex: 1,
        marginRight: 12,
    },
    cardName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#444',
        marginBottom: 4,
    },
    cardSubName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#091130',
    },
    iconContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardDetails: {
        marginTop: 4,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    detailIcon: {
        marginRight: 8,
        width: 16, // Fixed width for alignment
    },
    detailText: {
        fontSize: 13,
        color: '#555',
        flex: 1,
    },
    decorativeCircle: {
        position: 'absolute',
        bottom: -20,
        left: -20,
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#4FD1C5',
        opacity: 0.8,
    }
});
