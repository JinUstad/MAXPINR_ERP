import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    StatusBar,
    FlatList,
    TextInput,
    Image,
} from 'react-native';
import { Ionicons, MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';

type Props = {
    navigation: any;
};

// Filter Types
type FilterType = 'All Task' | 'Call' | 'Mail' | 'Meeting';

const FILTERS: { id: FilterType; label: string; icon?: any }[] = [
    { id: 'All Task', label: 'All Task', icon: 'list' },
    { id: 'Call', label: 'Call', icon: 'phone' },
    { id: 'Mail', label: 'Mail', icon: 'mail' },
    { id: 'Meeting', label: 'Meeting', icon: 'calendar' },
];

const TASK_DATA = [
    {
        id: '1',
        type: 'Call', // Used for icon
        title: 'Calver',
        status: 'Normal', // Badge
        state: 'Open',   // Badge
        description: 'Negotiation the call for the builder',
        date: '11/30/2025 at 15:45 A',
        dueDate: 'Due : 11/30/2025 AT 15:45 AM',
        assignee: 'Saurabh',
        agent: 'Anish (Agent)',
        created: 'Nov 28, 12:30 AM',
    },
    {
        id: '2',
        type: 'Call',
        title: 'Calver',
        status: 'Normal',
        state: 'Open',
        description: 'Lorem Ipsum is here',
        dueDate: 'Due : 11/30/2025 AT 15:45 AM',
        assignee: 'Saurabh',
        agent: 'Anish (Agent)',
        created: 'Nov 28, 12:30 AM',
    },
    {
        id: '3',
        type: 'Meeting',
        title: 'Negotiation',
        status: 'Normal',
        state: 'Open',
        description: 'Negotiation the call for the builder',
        date: '11/30/2025 at 15:45 A',
        dueDate: 'Due : 11/30/2025 AT 15:45 AM',
        assignee: 'Saurabh',
        agent: 'Anish (Agent)',
        created: 'Nov 28, 12:30 AM',
    },
];

export default function OpenTaskScreen({ navigation }: Props) {
    const [selectedFilter, setSelectedFilter] = useState<FilterType>('All Task');

    // Filter Logic
    const getFilteredData = () => {
        if (selectedFilter === 'Call') {
            return []; // Request: Show "No data found" for Call tab
        }
        if (selectedFilter === 'All Task') {
            return TASK_DATA;
        }
        // Minimal data for others to show structure
        return [];
    };

    const data = getFilteredData();

    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.card}>
            {/* Left Border Strip */}
            <View style={[styles.cardStrip, { backgroundColor: item.type === 'Call' ? '#4FD1C5' : '#4FD1C5' }]} /> {/* Use Teal for strip based on image logic, or dynamic */}

            <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                    <View style={styles.titleRow}>
                        <View style={styles.iconBox}>
                            {item.type === 'Call' ? (
                                <Ionicons name="call" size={16} color="#0066CC" />
                            ) : (
                                <AntDesign name="calendar" size={16} color="#2E7D32" />
                            )}
                        </View>
                        <Text style={styles.cardTitle}>{item.title}</Text>

                        <View style={styles.badgeNormal}>
                            <Text style={styles.badgeNormalText}>{item.status}</Text>
                        </View>
                        <View style={styles.badgeOpen}>
                            <Text style={styles.badgeOpenText}>{item.state}</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.description}>{item.description}</Text>

                {item.date && (
                    <View style={styles.infoRow}>
                        <Feather name="calendar" size={14} color="#2E7D32" style={{ marginRight: 6 }} />
                        <Text style={[styles.infoText, { color: '#2E7D32' }]}>{item.date}</Text>
                    </View>
                )}

                <View style={styles.infoRow}>
                    <Feather name="clock" size={14} color="#FF3B30" style={{ marginRight: 6 }} />
                    <Text style={[styles.infoText, { color: '#FF3B30' }]}>{item.dueDate}</Text>
                </View>

                <View style={styles.pillsRow}>
                    <View style={styles.userPill}>
                        <Ionicons name="person-outline" size={12} color="#666" />
                        <Text style={styles.userText}>{item.assignee}</Text>
                    </View>
                    <View style={styles.userPill}>
                        <Ionicons name="person-outline" size={12} color="#666" />
                        <Text style={styles.userText}>{item.agent}</Text>
                    </View>
                    <View style={styles.timePill}>
                        <Feather name="clock" size={12} color="#666" />
                        <Text style={styles.userText}>{item.created}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerNavTitle}>Call History</Text>
                <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>3</Text>
                </View>
            </View>

            <View style={styles.mainContainer}>
                {/* Title Section */}
                <View style={styles.titleSection}>
                    <Text style={styles.pageTitle}>Open Task</Text>
                    <Text style={styles.pageSubtitle}>View and mange open task activities</Text>
                </View>

                {/* Search */}
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
                    <TextInput
                        placeholder="Search tasks"
                        style={styles.searchInput}
                        placeholderTextColor="#999"
                    />
                </View>

                {/* Tabs */}
                <View style={styles.tabsContainer}>
                    {FILTERS.map((filter) => (
                        <TouchableOpacity
                            key={filter.id}
                            style={[
                                styles.tab,
                                selectedFilter === filter.id && styles.activeTab
                            ]}
                            onPress={() => setSelectedFilter(filter.id)}
                        >
                            {/* Icons for tabs */}
                            {filter.id === 'All Task' && <Feather name="list" size={14} color={selectedFilter === filter.id ? '#fff' : '#666'} style={styles.tabIcon} />}
                            {filter.id === 'Call' && <Ionicons name="call-outline" size={14} color={selectedFilter === filter.id ? '#fff' : '#666'} style={styles.tabIcon} />}
                            {filter.id === 'Mail' && <Feather name="mail" size={14} color={selectedFilter === filter.id ? '#fff' : '#666'} style={styles.tabIcon} />}
                            {filter.id === 'Meeting' && <AntDesign name="calendar" size={14} color={selectedFilter === filter.id ? '#fff' : '#666'} style={styles.tabIcon} />}

                            <Text style={[
                                styles.tabText,
                                selectedFilter === filter.id && styles.activeTabText
                            ]}>
                                {filter.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Content */}
                {data.length > 0 ? (
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.listContent}
                    />
                ) : (
                    <View style={styles.emptyState}>
                        {/* Placeholder for 'No Data' visual if needed, using text for now */}
                        <Text style={styles.emptyStateText}>No Data Found</Text>
                    </View>
                )}

            </View>

            {/* Decorative Circle */}
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
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#fff',
    },
    backButton: {
        padding: 4,
    },
    headerNavTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#091130',
    },
    badgeContainer: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#E0F2F1', // Light teal
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        fontSize: 12,
        color: '#26A69A',
        fontWeight: '700',
    },
    mainContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    titleSection: {
        marginTop: 10,
        marginBottom: 20,
    },
    pageTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#091130',
        marginBottom: 4,
    },
    pageSubtitle: {
        fontSize: 14,
        color: '#666',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 48,
        marginBottom: 20,
        // Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    searchIcon: {
        marginRight: 12,
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        color: '#333',
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#EFEFEF',
        backgroundColor: '#fff',
    },
    activeTab: {
        backgroundColor: '#26C6DA', // Teal color
        borderColor: '#26C6DA',
    },
    tabIcon: {
        marginRight: 6,
    },
    tabText: {
        fontSize: 13,
        color: '#666',
        fontWeight: '500',
    },
    activeTabText: {
        color: '#fff',
        fontWeight: '600',
    },
    listContent: {
        paddingBottom: 20,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#F9FAFB', // Very light grey/blue
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },
    cardStrip: {
        width: 4,
        backgroundColor: '#4FD1C5',
    },
    cardContent: {
        flex: 1,
        padding: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    iconBox: {
        marginRight: 8,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#091130',
        marginRight: 8,
    },
    badgeNormal: {
        backgroundColor: '#FFEBEE', // Light Red/Pink
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        marginRight: 6,
    },
    badgeNormalText: {
        color: '#FF5252',
        fontSize: 10,
        fontWeight: '600',
    },
    badgeOpen: {
        backgroundColor: '#FFF8E1', // Light Yellow
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    badgeOpenText: {
        color: '#FFC107',
        fontSize: 10,
        fontWeight: '600',
    },
    description: {
        fontSize: 14,
        color: '#444',
        marginBottom: 12,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    infoText: {
        fontSize: 12,
        fontWeight: '500',
    },
    pillsRow: {
        flexDirection: 'row',
        marginTop: 8,
        flexWrap: 'wrap',
    },
    userPill: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12,
        marginBottom: 4,
    },
    timePill: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    userText: {
        fontSize: 12,
        color: '#666',
        marginLeft: 4,
    },
    emptyState: {
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyStateText: {
        fontSize: 16,
        color: '#999',
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
        zIndex: -1,
    }
});
