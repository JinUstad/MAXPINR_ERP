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
import { Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

const TEXT_DARK = '#091130';
const TEAL_COLOR = '#20B2AA';

interface NotificationItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    time: string;
}

const NotificationItem = ({ icon, title, description, time }: NotificationItemProps) => {
    return (
        <View style={styles.notificationItem}>
            <View style={styles.iconContainer}>
                {icon}
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.headerRow}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

type Props = {
    navigation: any;
};

export default function NotificationScreen({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
                        <Ionicons name="chevron-back" size={24} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Notification</Text>
                    <View style={{ width: 32 }} /> {/* Placeholder for balance */}
                </View>

                {/* Today Section */}
                <Text style={styles.sectionHeader}>Today</Text>
                <NotificationItem
                    icon={<MaterialCommunityIcons name="calendar-check-outline" size={22} color={TEAL_COLOR} />}
                    title="Tour Booked Successfully"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard."
                    time="1hr"
                />
                <NotificationItem
                    icon={<MaterialCommunityIcons name="decagram-outline" size={22} color={TEAL_COLOR} />} // Using decagram for percent-like badge
                    title="Exclusive Offers Inside"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard."
                    time="1hr"
                />
                <NotificationItem
                    icon={<Octicons name="star" size={22} color={TEAL_COLOR} />}
                    title="Property Review Request"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard."
                    time="1hr"
                />

                {/* Yesterday Section */}
                <Text style={[styles.sectionHeader, { marginTop: 20 }]}>Yesterday</Text>
                <NotificationItem
                    icon={<MaterialCommunityIcons name="calendar-check-outline" size={22} color={TEAL_COLOR} />}
                    title="Tour Booked Successfully"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard."
                    time="1hr"
                />
                <NotificationItem
                    icon={<MaterialCommunityIcons name="decagram-outline" size={22} color={TEAL_COLOR} />}
                    title="Exclusive Offers Inside"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard."
                    time="1hr"
                />
                {/* Decorative circle for style matching design */}
                <View style={styles.decorativeCircle} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff', // Or slightly off-white '#F8F9FA' based on image
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
        marginBottom: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: TEXT_DARK,
    },
    headerButton: {
        padding: 4,
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: '700',
        color: TEXT_DARK,
        marginBottom: 16,
    },
    notificationItem: {
        flexDirection: 'row',
        backgroundColor: '#F5F9FA', // Very light blueishly gray background for cards
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    iconContainer: {
        marginRight: 12,
        justifyContent: 'flex-start',
        paddingTop: 2,
    },
    contentContainer: {
        flex: 1,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    title: {
        fontSize: 15,
        fontWeight: '700',
        color: TEXT_DARK,
        flex: 1,
        marginRight: 8,
    },
    time: {
        fontSize: 12,
        color: '#999',
    },
    description: {
        fontSize: 13,
        color: '#666',
        lineHeight: 18,
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
