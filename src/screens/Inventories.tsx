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

const INVENTORY_DATA = [
    { id: '1', title: 'Ghaziabad' },
    { id: '2', title: 'Greator Noida Sec - 134' },
    { id: '3', title: 'Noida Sec - 62 H Block' },
];

export default function InventoriesScreen({ navigation }: Props) {
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
                <Text style={styles.headerTitle}>Inventories</Text>
                <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>4</Text>
                </View>
            </View>

            {/* Content */}
            <View style={styles.content}>
                <FlatList
                    data={INVENTORY_DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate('inventriesDetails', { title: item.title })}
                            style={styles.card}
                        >
                            <Text style={styles.cardTitle}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            {/* Decorative Circle (Bottom Left) */}
            <View style={styles.decorativeCircle} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F5F5F5', // Light grey background
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
        color: '#091130',
        textAlign: 'center',
        marginRight: 40, // Balance the back button spacing to center title
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
    cardTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#091130',
    },
    decorativeCircle: {
        position: 'absolute',
        bottom: -20,
        left: -20,
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#4FD1C5', // Teal/Turquoise color
        opacity: 0.8,
    }
});
