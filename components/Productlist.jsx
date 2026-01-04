import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://api.escuelajs.co/api/v1/products");
      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <Text style={{ color: "#fff", textAlign: "center", marginTop: 50 }}>Loading products...</Text>;
  }

  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 12 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card}>
          <Image
            source={{ uri: item.images?.[0] || item.image }}
            style={styles.image}
          />
          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add" size={18} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          <Text style={styles.name}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    width: "48%",
    borderRadius: 18,
    padding: 8,
    marginTop: 12,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 14,
    marginBottom: 6,
  },
  addBtn: {
    position: "absolute",
    right: 10,
    top: 120,
    backgroundColor: "#1E6F3D",
    padding: 6,
    borderRadius: 14,
    elevation: 4,
  },
  price: { color: "#1E6F3D", fontWeight: "700", marginTop: 6, fontSize: 14 },
  name: { color: "#444", fontSize: 12, marginTop: 2, fontWeight: "500" },
});
