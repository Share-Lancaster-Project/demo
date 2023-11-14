import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


const AddAnItemToListScreen = () => {    // page to add item to the list of items user is willing to lend/let users borrow 
  const navigation = useNavigation();
// fields for the form/item 
  const [itemName, setItemName] = useState('');       
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);


  const handleAddItem = () => {
    // Perform logic to add the item to the list
    // ...

    // For example, navigate back to the Items Available screen after adding the item
    navigation.navigate('ItemsAvaliableScreen');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add An Item To Your Listings For Others To Borrow</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="Item Description"
        value={itemDescription}
        onChangeText={setItemDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Item Price"
        value={itemPrice}
        onChangeText={setItemPrice}
        keyboardType="numeric"
      />
      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    marginTop: -200
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  selectedImage: {
    width: 200,
    height: 200,
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default AddAnItemToListScreen;
