import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const NotificationItem = ({ title, message, timestamp }) => (
  <View style={styles.notificationItem}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.message}>{message}</Text>
    <Text style={styles.timestamp}>{timestamp}</Text>
  </View>
);

const NotificationsScreen = () => {
  // Sample data for notifications
  const notificationsData = [
    {
      id: '1',
      title: 'New Message',
      message: 'You have a new message from a friend.',
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      title: 'Event Reminder',
      message: 'Don\'t forget about the upcoming event tomorrow.',
      timestamp: '1 day ago',
    },
    // Add more notifications as needed
  ];

  const renderItem = ({ item }) => (
    <NotificationItem
      title={item.title}
      message={item.message}
      timestamp={item.timestamp}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff', // Background color
  },
  notificationItem: {
    backgroundColor: '#f4f4f4', // Background color for each notification item
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 14,
    color: '#888',
  },
});

export default NotificationsScreen;
