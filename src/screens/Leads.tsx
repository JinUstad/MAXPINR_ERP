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
import { Ionicons } from '@expo/vector-icons';

type Props = {
    navigation: any;
};

const LEADS_DATA = [
    {
        id: '1',
        name: 'Anish Pandey Kumar',
        phone: '85128858988',
        email: 'anishkumar000@gmail.com',
        location: 'Bihar, Patna',
        date: '12 Dec 2025 At 11:00 AM',
        priority: 'High',
    },
    {
        id: '2',
        name: 'Anish Pandey Kumar',
        phone: '85128858988',
        email: 'anishkumar000@gmail.com',
        location: 'Bihar, Patna',
        date: '12 Dec 2025 At 11:00 AM',
        priority: 'High',
    },
    {
        id: '3',
        name: 'Anish Pandey Kumar',
        phone: '85128858988',
        email: 'anishkumar000@gmail.com',
        location: 'Bihar, Patna',
        date: '12 Dec 2025 At 11:00 AM',
        priority: 'High',
    },
    {
        id: '4',
        name: 'Anish Pandey Kumar',
        phone: '85128858988',
        email: 'anishkumar000@gmail.com',
        location: 'Bihar, Patna',
        date: '12 Dec 2025 At 11:00 AM',
        priority: 'High',
    },
];

export default function LeadsScreen({ navigation }: Props) {
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
                <Text style={styles.headerTitle}>Lead&apos;s List</Text>
                <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>12</Text>
                </View>
            </View>

            {/* List Content */}
            <View style={styles.content}>
                <FlatList
                    data={LEADS_DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            {/* First Row: Name and Phone */}
                            <View style={styles.row}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.phone}>{item.phone}</Text>
                            </View>

                            {/* Second Row: Email and Location */}
                            <View style={styles.row}>
                                <Text style={styles.email}>{item.email}</Text>
                                <Text style={styles.location}>{item.location}</Text>
                            </View>

                            {/* Third Row: Date and Priority */}
                            <View style={styles.row}>
                                <Text style={styles.date}>{item.date}</Text>
                                <Text style={styles.priority}>{item.priority}</Text>
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
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    backButton: {
        padding: 4,
        marginRight: 12,
    },
    headerTitle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '700',
        color: '#0056D2', // Blue matching image
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginRight: 40,
    },
    badgeContainer: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 16,
    },
    badgeText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#333',
    },
    content: {
        flex: 1,
    },
    listContent: {
        padding: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    phone: {
        fontSize: 14,
        color: '#6c86bc', // Blueish/Grey
        fontWeight: '500',
    },
    email: {
        fontSize: 13,
        color: '#888',
    },
    location: {
        fontSize: 13,
        color: '#6c86bc',
        fontWeight: '500',
    },
    date: {
        fontSize: 13,
        color: '#888',
    },
    priority: {
        fontSize: 13,
        color: '#FF5252', // Red
        fontWeight: '500',
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
