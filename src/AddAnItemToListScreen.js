import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { getDatabase, ref, set, push } from "firebase/database";
import { FIREBASE_AUTH } from "../firebaseConfig";
import DateTimePicker from "@react-native-community/datetimepicker";
// import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const AddAnItemToListScreen = () => {
  // page to add item to the list of items user is willing to lend/let users borrow
  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;
  // fields for the form/item
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [borrowDate, setBorrowDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showBorrowDatePicker, setShowBorrowDatePicker] = useState(false);
  const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);
  const [duration, setDuration] = useState();

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
      setDuration(
        Math.floor(
          (returnDate.getTime() - borrowDate.getTime()) / (1000 * 3600 * 24)
        )
      );
      console.log(duration);
    } else {
      alert(
        "Invalid Return Date. Please select a date after the Borrow Date and not in the past."
      );
    }
  };
  const handleAddItem = (async = (
    userId,
    itemName,
    itemDescription,
    itemPrice
  ) => {
    // Perform logic to add the item to the list
    // const db = getDatabase();
    console.log("...**************** " + JSON.stringify(auth.currentUser.uid));
    try {
      const db = getDatabase();
      push(ref(db, `users/${auth.currentUser.uid}/itemsToBorrow/`), {
        // id:
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        duration: duration,
        status: "available",

        // profile_picture: imageUrl,
      }).then((snapshot) => {
        ref.child(snapshot.key).update({ id: snapshot.key });
      });
      navigation.navigate("TabScreen");
    } catch (err) {
      alert(err);
    }

    // ...

    // push(ref(db, `itemsToBorrow/`), {
    //   name: itemName,
    //   description: itemDescription,
    //   price: itemPrice,
    //   photoURL: "",
    //   // photo: "",
    //   duration: "",
    // });

    // .then((snapshot) => {
    //   ref.child(snapshot.key).update({ id: snapshot.key });
    // }
    // );
    // ...vv

    // function writeUserData(userId, name, email, imageUrl) {
    //   const db = getDatabase();
    //   set(ref(db, 'users/' + userId), {
    //     username: name,
    //     email: email,
    //     profile_picture : imageUrl
    //   });
    // }
    // For example, navigate back to the Items Available screen after adding the item
    // navigation.navigate("ItemsAvaliableScreen");
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Add An Item To Your Listings For Others To Borrow
      </Text>
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
      <TouchableOpacity onPress={() => setShowBorrowDatePicker(true)}>
        <Text style={styles.datePickerText}>Select Lend Date</Text>
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

      <Text style={styles.detail}>
        Selected Lend Date: {borrowDate.toDateString()}
      </Text>
      <Text style={styles.detail}>
        Selected Return Date: {returnDate.toDateString()}
      </Text>

      <Button
        title="Add Item"
        onPress={() =>
          handleAddItem(auth, itemName, itemDescription, itemPrice)
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    marginTop: -200,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
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
  datePickerText: {
    fontSize: 18,
    color: "blue",
    marginBottom: 8,
    textAlign: "center",
  },
  datePicker: {
    width: 200,
    alignSelf: "center",
  },
});

export default AddAnItemToListScreen;
