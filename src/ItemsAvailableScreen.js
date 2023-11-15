import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getDatabase, ref, child, get } from "firebase/database";
import { FIREBASE_AUTH } from "../firebaseConfig";

const ItemsAvailableScreen = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  const [itemData, setItemsData] = useState([]);
  // Sample data for items
  const itemsData = [
    // Add more items as needed
  ];

  React.useEffect(() => {
    const dbRef = ref(getDatabase());
    const auth = FIREBASE_AUTH;
    get(child(dbRef, `users/${auth.currentUser.uid}/itemsToBorrow/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val())
          setItems(snapshot.val());
          // arr = snapshot.val();
          // arr.push(snapshot.val());
          Object.keys(items).forEach((key) => {
            // items.push({})
            itemsData.push(items[key]);
            // r.pus
          });
          console.log(itemsData);
          setItemsData(itemsData);
          // console.log(items);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // const keys = Object.keys(arr);
  // keys.forEach((key, index) => {
  //   console.log(`${items[key]}`);
  // });
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        // Navigate to ItemDetailsScreen with item details as parameters
        navigation.navigate("ItemDetailsScreen", {
          // itemId: item.id,
          itemName: item.name,
          itemDescription: item.description,
          itemPrice: item.price,
        });
      }}
    >
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
        data={itemData}
        // keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 1,
    backgroundColor: "white",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    backgroundColor: "white",
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
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 14,
    color: "#555",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
});

export default ItemsAvailableScreen;
