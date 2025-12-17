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
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

const TEAL_COLOR = '#20B2AA';
const TEXT_DARK = '#091130';

interface SettingsItemProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    isDestructive?: boolean;
}

const SettingsItem = ({ icon, title, subtitle, isDestructive }: SettingsItemProps) => {
    return (
        <TouchableOpacity style={styles.settingsItem}>
            <View style={[styles.itemIconContainer, isDestructive && styles.destructiveIconContainer]}>
                {icon}
            </View>
            <View style={styles.itemContent}>
                <Text style={[styles.itemTitle, isDestructive && styles.destructiveText]}>{title}</Text>
                <Text style={styles.itemSubtitle}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

type Props = {
    navigation: any;
};

export default function ProfileSettingScreen({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
                        <Ionicons name="chevron-back" size={24} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Profile Setting</Text>
                    <TouchableOpacity style={styles.headerButton}>
                        <Ionicons name="menu-outline" size={24} color="#333" />
                    </TouchableOpacity>
                </View>

                {/* Profile Card */}
                <View style={styles.profileCard}>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/100?img=12' }} // Placeholder
                        style={styles.avatar}
                    />
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>Scarlett Davis</Text>
                        <Text style={styles.profileEmail}>scarlettdavis@gmail.com</Text>
                    </View>
                </View>

                {/* General Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>General</Text>
                    <View style={styles.sectionCard}>
                        <SettingsItem
                            icon={<Ionicons name="person-outline" size={20} color={TEAL_COLOR} />}
                            title="Edit Profile"
                            subtitle="Change profile picture, number, E-mail"
                        />
                        <View style={styles.divider} />
                        <SettingsItem
                            icon={<Feather name="lock" size={20} color={TEAL_COLOR} />}
                            title="Change Password"
                            subtitle="Update and strengthen account security"
                        />
                        <View style={styles.divider} />
                        <SettingsItem
                            icon={<MaterialIcons name="security" size={20} color={TEAL_COLOR} />}
                            title="Privacy & Policy"
                            subtitle="Lorem ipsam data is here"
                        />
                    </View>
                </View>

                {/* Preferences Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Preferences</Text>
                    <View style={styles.sectionCard}>
                        <SettingsItem
                            icon={<Ionicons name="notifications-outline" size={20} color={TEAL_COLOR} />}
                            title="Notification"
                            subtitle="Customize your notification preferences"
                        />
                        <View style={styles.divider} />
                        <SettingsItem
                            icon={<Ionicons name="settings-outline" size={20} color={TEAL_COLOR} />}
                            title="Setting"
                            subtitle="Lorem ipsam data is here"
                        />
                        <View style={styles.divider} />
                        <SettingsItem
                            icon={<MaterialIcons name="logout" size={20} color="#FF3B30" />}
                            title="Log Out"
                            subtitle="Logout your account"
                            isDestructive
                        />
                    </View>
                </View>
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
    profileCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#EFEFEF',
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
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        fontSize: 16,
        fontWeight: '700',
        color: TEXT_DARK,
        marginBottom: 4,
    },
    profileEmail: {
        fontSize: 14,
        color: '#666',
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: '700',
        color: TEXT_DARK,
        marginBottom: 12,
    },
    sectionCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 8, // Inner padding for items
        borderWidth: 1,
        borderColor: '#EFEFEF',
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
    settingsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
    },
    itemIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E0F2F1', // Light Teal BG
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    destructiveIconContainer: {
        backgroundColor: '#FFEBEE', // Light Red BG
    },
    itemContent: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: TEXT_DARK,
        marginBottom: 2,
    },
    destructiveText: {
        color: '#FF3B30',
    },
    itemSubtitle: {
        fontSize: 12,
        color: '#888',
    },
    divider: {
        height: 1,
        backgroundColor: '#F5F5F5',
        marginLeft: 60, // Indent past icon
        marginRight: 8,
    },
});
