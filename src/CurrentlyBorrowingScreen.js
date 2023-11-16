import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { FIREBASE_AUTH } from "../firebaseConfig";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CurrentlyBorrowingScreen = () => {
  const navigation = useNavigation();
  // Sample data for items
  // const itemsData2 = [
  //   {
  //     id: '1',
  //     name: 'Item 1',
  //     description: 'Description for Item 1',
  //     imageUrl: 'https://example.com/item1.jpg',
  //     price: '$10.99',
  //   },
  //   {
  //     id: '2',
  //     name: 'Item 2',
  //     description: 'Description for Item 2',
  //     imageUrl: 'https://example.com/item2.jpg',
  //     price: '$8.99',
  //   },
  //   {
  //     id: '3',
  //     name: 'Item 3',
  //     description: 'Description for Item 1',
  //     imageUrl: 'https://example.com/item1.jpg',
  //     price: '$10.99',
  //   },
  //   // Add more items as needed
  // ];
  const [items, setItems] = useState([]);
  const [itemData, setItemsData] = useState([]);
  // Sample data for items
  const itemsData = [
    // Add more items as needed
  ];

  React.useEffect(() => {
    const db = getDatabase();
    const auth = FIREBASE_AUTH;
    console.log("currently fetching.");
    const dbREF = ref(db, `users/${auth.currentUser.uid}/currentBorrow/`);
    onValue(dbREF, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setItems(data);
    });
    if (items) {
      Object.keys(items).forEach((key) => {
        // items.push({})
        itemsData.push(items[key]);
        // r.pus
      });
      setItemsData(itemsData);
    } else {
      console.log("no data");
    }

    // get(child(db, `users/${auth.currentUser.uid}/currentBorrow/`))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       // console.log(snapshot.val())
    //       setItems(snapshot.val());
    //       // arr = snapshot.val();
    //       // arr.push(snapshot.val());
    //       Object.keys(items).forEach((key) => {
    //         // items.push({})
    //         itemsData.push(items[key]);
    //         // r.pus
    //       });
    //       // console.log(itemsData);
    //       setItemsData(itemsData);
    //       // console.log(items);
    //     } else {
    //       console.log("No data available");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        // Navigate to ItemDetailsScreen with item details as parameters
        navigation.navigate("ReturnItemsScreen", {
          itemId: item.id,
          itemName: item.name,
          itemDescription: item.description,
          itemPrice: item.price,
        });
      }}
    >
      <Image source={{ uri: item?.imageUrl }} style={styles.itemImage} />
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

export default CurrentlyBorrowingScreen;
