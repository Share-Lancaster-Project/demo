import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ItemsListScreen = () => {
  // Sample data for items
  const itemsData = [
    {
      id: '1',
      name: 'Item 1',
      description: 'Description for Item 1',
      imageUrl: 'https://example.com/item1.jpg',
      price: '$10.99',
    },
    {
      id: '2',
      name: 'Item 2',
      description: 'Description for Item 2',
      imageUrl: 'https://example.com/item2.jpg',
      price: '$8.99',
    },
    {
      id: '3',
      name: 'Item 3',
      description: 'Description for Item 1',
      imageUrl: 'https://example.com/item1.jpg',
      price: '$10.99',
    },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={itemsData}
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
    marginTop: -480
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  itemDetails: {
    marginLeft: 16,
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default ItemsListScreen;
