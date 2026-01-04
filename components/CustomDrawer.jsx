import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomDrawer({ visible, onClose, }) {
  const router = useRouter();
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.drawer}>
        {/* Close button */}
        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
          <Ionicons name="close" size={28} color="#fff" />
        </TouchableOpacity>

        {/* Drawer Header */}
        <View style={styles.header}>
          <Image
            source={require("@/assets/images/person.png")}
            style={styles.avatar}
          />
          <Text style={styles.name}>Anees Ahmed</Text>
        </View>

        {/* Drawer Items */}
        <TouchableOpacity style={styles.item} onPress={() => router.push("/Profile")}>
          <Ionicons name="person-outline" size={22} color="#fff" />
          <Text style={styles.itemText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => router.push("/cart")}>
          <Ionicons name="cart-outline" size={22} color="#fff" />
          <Text style={styles.itemText}>Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => router.push("/Products")}>
          <Ionicons name="exit-outline" size={22} color="#fff" />
          <Text style={styles.itemText}>ProductDetail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 2,
  },
  drawer: {
    width: 260,
    height: "100%",
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#0B1F14", // Dark green background
    borderRightWidth: 1,
    borderRightColor: "#1E6F3D", // Slight green border for depth
  },
  closeBtn: {
    position: "absolute",
    top: 40,
    right: 15,
  },
  header: {
    marginBottom: 30,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#2ECC71", 
    marginBottom: 10,
    alignSelf: "left",
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 12,
    backgroundColor: "rgba(46, 204, 113, 0.1)", // subtle green highlight on hover effect
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 15,
    fontWeight: "500",
  },
});
