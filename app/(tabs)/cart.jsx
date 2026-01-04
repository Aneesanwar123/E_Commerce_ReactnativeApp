import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartScreen() {
  const router = useRouter();

  const [cartItems, setCartItems] = useState([]);

  // 📌 Example of fetching cart data from API if exists
  const fetchCart = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      ); // fake list as cart
      setCartItems(response.data.slice(0, 5)); // example
    } catch (error) {
      console.log("Cart fetch error:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // 🗑 DELETE CRUD
  const deleteCartItem = (id) => {
    Alert.alert(
      "Remove from Cart",
      "Are you sure you want to remove this item?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          onPress: () => {
            setCartItems((prev) => prev.filter((item) => item.id !== id));
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      <LinearGradient
        colors={["#0B1F14", "#1E6F3D", "#2ECC71"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.header}>CART</Text>
          <View style={{ width: 42 }} />
        </View>

        {/* Cart Items */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 280 }}
        >
          {cartItems.map((item) => (
            <View key={item.id} style={styles.item}>
              <Image
                source={{ uri: item.images?.[0] }}
                style={styles.image}
              />

              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.size}>Size: Default</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>

              <TouchableOpacity
                onPress={() => deleteCartItem(item.id)}
                style={styles.deleteBtn}
              >
                <Ionicons name="trash" size={24} color="#D11A2A" />
              </TouchableOpacity>
            </View>
          ))}

          {/* Total */}
          <View style={styles.bottomSheet}>
            <View style={styles.summary}>
              <Text style={styles.row}>
                Sub Total     $
                {cartItems
                  .reduce((a, c) => a + c.price * (c.qty ?? 1), 0)
                  .toFixed(2)}
              </Text>
              <Text style={styles.row}>Shipping     $20.00</Text>
              <Text style={styles.total}>
                Total     $
                {(
                  cartItems.reduce((a, c) => a + c.price * (c.qty ?? 1), 0) +
                  20
                ).toFixed(2)}
              </Text>
            </View>

            <TouchableOpacity style={styles.checkout}>
              <Text style={styles.checkoutText}>Continue to Checkout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20,
  },
  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 12,
    marginBottom: 15,
    alignItems: "center",
  },
  image: { width: 70, height: 70, borderRadius: 14 },
  name: { fontSize: 16, fontWeight: "700", color: "#111" },
  size: { fontSize: 12, color: "#888", marginTop: 2 },
  price: { fontSize: 14, fontWeight: "700", color: "#1E6F3D" },
  deleteBtn: { padding: 6 },
  bottomSheet: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
  },
  summary: { marginBottom: 10 },
  row: { fontSize: 14, color: "#888", marginBottom: 6 },
  total: { fontSize: 18, fontWeight: "800", color: "#1E6F3D" },
  checkout: {
    backgroundColor: "#1E6F3D",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
  },
  checkoutText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
