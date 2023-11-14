// ItemDetailsScreen.js
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ItemDetailsScreen = ({ route, navigation }) => {
  // Extract item details from the route parameters
  const { itemId, itemName, itemDescription, itemPrice, itemImage, itemState   } = route.params || {};

  const [firstTimeBorrower, setFirstTimeBorrower] = useState(true);

  const handleBorrowItem = () => {
    // If it's the user's first time, navigate to the payment screen
    if (firstTimeBorrower) {
      navigation.navigate('FirstTimePaymentScreen', {
        // Pass any necessary information to the payment screen
        itemId,
        itemName,
        itemPrice,
      });
    } else {
      // If not the first time, proceed with borrowing logic
      alert(`Borrowing ${itemName}`);
      // You can add more logic here
    }
  };
  const [borrowDate, setBorrowDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showBorrowDatePicker, setShowBorrowDatePicker] = useState(false);
  const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);


  const handleBorrowDateChange = (event, date) => {
    setShowBorrowDatePicker(false);
    if (date && date >= new Date()) {
      setBorrowDate(date);
    }
  };

  // Function to handle date selection for return date
  const handleReturnDateChange = (event, date) => {
    setShowReturnDatePicker(false);
    if (date && date >= borrowDate && date >= new Date()) {
      setReturnDate(date);
    } else {
      alert('Invalid Return Date. Please select a date after the Borrow Date and not in the past.');
    }
  };




// item name, item description, item price, item image, duration, state 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item Details</Text>
      <Text style={styles.detail}>{itemName}</Text>
      <Text style={styles.detail}>{itemDescription}</Text>
      <Text style={styles.detail}>{itemPrice}</Text>
      <Image source={{ uri: itemImage }} style={styles.image} />
      

      <TouchableOpacity onPress={() => setShowBorrowDatePicker(true)}>
        <Text style={styles.datePickerText}>Select Borrow Date</Text>
      </TouchableOpacity>

      {showBorrowDatePicker && (
        <DateTimePicker
          value={borrowDate}
          mode="date"
          display="default"
          onChange={handleBorrowDateChange}
          minimumDate={new Date()}
        />
      )}

      <TouchableOpacity onPress={() => setShowReturnDatePicker(true)}>
        <Text style={styles.datePickerText}>Select Return Date</Text>
      </TouchableOpacity>

      {showReturnDatePicker && (
        <DateTimePicker
          value={returnDate}
          mode="date"
          display="default"
          onChange={handleReturnDateChange}
          minimumDate={new Date()}
        />
      )}

      <Text style={styles.detail}>Selected Borrow Date: {borrowDate.toDateString()}</Text>
      <Text style={styles.detail}>Selected Return Date: {returnDate.toDateString()}</Text>



      <Button title="Borrow Item" onPress={handleBorrowItem} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
    },
    detail: {
      fontSize: 18,
      marginBottom: 8,
      textAlign: 'center',
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 8,
      marginBottom: 8,
    },
    datePickerText: {
      fontSize: 18,
      color: 'blue',
      marginBottom: 8,
      textAlign: 'center',
    },
    datePicker: {
      width: 200,
      alignSelf: 'center',
    },
  });

export default ItemDetailsScreen;
