import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Platform,
    SafeAreaView
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, SimpleLineIcons, AntDesign } from '@expo/vector-icons';

type Props = {
    visible: boolean;
    onClose: () => void;
    navigation: any;
};

const MENU_ITEMS = [
    { id: 'leads', label: 'Leads', icon: 'list', type: 'Feather' }, // approximate icons
    { id: 'deals', label: 'Deals', icon: 'handshake-o', type: 'FontAwesome' },
    { id: 'addProject', label: 'Add Project', icon: 'cube-outline', type: 'MaterialCommunityIcons' },
    { id: 'platformIntegration', label: 'Platform Integration', icon: 'power-plug', type: 'MaterialCommunityIcons', active: true },
    { id: 'ruleManagement', label: 'Rule Management', icon: 'source-branch', type: 'MaterialCommunityIcons' }, // approx
    { id: 'teamManagement', label: 'Team Management', icon: 'people-outline', type: 'Ionicons' },
];

export default function Sidebar({ visible, onClose, navigation }: Props) {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                {/* Close on click outside */}
                <TouchableOpacity
                    style={styles.backgroundTouchable}
                    activeOpacity={1}
                    onPress={onClose}
                />

                {/* Sidebar Content */}
                <View style={styles.sidebarContainer}>
                    <SafeAreaView style={styles.safeArea}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={onClose} style={styles.backButton}>
                                <Ionicons name="chevron-back" size={24} color="#666" />
                            </TouchableOpacity>
                            <Text style={styles.title}>Menu</Text>
                            <View style={{ width: 24 }} />
                        </View>

                        <View style={styles.menuItems}>
                            {MENU_ITEMS.map((item) => (
                                <TouchableOpacity
                                    key={item.id}
                                    style={[styles.menuItem, item.active && styles.activeMenuItem]}
                                    onPress={() => {
                                        if (item.id === 'leads') {
                                            navigation.navigate('leads');
                                        }
                                        // Handle other navigations here
                                        onClose();
                                    }}
                                >
                                    <View style={[styles.iconContainer, item.active && styles.activeIconContainer]}>
                                        {/* Simplified Icon Logic for demo */}
                                        {item.id === 'leads' && <Ionicons name="list" size={20} color={item.active ? "#20B2AA" : "#444"} />}
                                        {item.id === 'deals' && <FontAwesome5 name="handshake" size={16} color={item.active ? "#20B2AA" : "#444"} />}
                                        {item.id === 'addProject' && <MaterialCommunityIcons name="cube-outline" size={20} color={item.active ? "#20B2AA" : "#444"} />}
                                        {item.id === 'platformIntegration' && <MaterialCommunityIcons name="power-plug" size={20} color={item.active ? "#20B2AA" : "#444"} />}
                                        {item.id === 'ruleManagement' && <MaterialCommunityIcons name="source-branch" size={20} color={item.active ? "#20B2AA" : "#444"} />}
                                        {item.id === 'teamManagement' && <Ionicons name="people-outline" size={20} color={item.active ? "#20B2AA" : "#444"} />}
                                    </View>
                                    <Text style={styles.menuLabel}>{item.label}</Text>

                                    {/* Dotted border for active item (mimicking design) */}
                                    {item.active && <View style={styles.activeBorder} />}
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Decorative Circle */}
                        <View style={styles.decorativeCircle} />
                    </SafeAreaView>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        flexDirection: 'row',
    },
    backgroundTouchable: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', // Black with opacity
    },
    sidebarContainer: {
        width: '80%', // Takes up 80% of width
        backgroundColor: '#fff',
        height: '100%',
        position: 'absolute', // To sit on top of backgroundTouchable if needed, but flex row handles it. 
        // Wait, flex-row means backgroundTouchable takes remaining space. 
        // Actually, absolute positioning is safer for the "drawer" effect.
        left: 0,
        top: 0,
        bottom: 0,
        // Shadow
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    safeArea: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    backButton: {
        padding: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#091130',
        // color: '#1B3A57', // Dark blue
    },
    menuItems: {
        padding: 16,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 8,
        marginBottom: 12,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#eee',
        // Shadow for cards
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
        position: 'relative',
    },
    activeMenuItem: {
        borderColor: '#007AFF', // Blue border for active
    },
    activeBorder: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        borderWidth: 1,
        borderColor: '#007AFF', // Blue
        borderStyle: 'dashed', // Dashed border
        borderRadius: 8,
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#E0F7FA', // Light cyan default
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    activeIconContainer: {
        backgroundColor: '#E0F2F1', // Active background
    },
    menuLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
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
