import CustomDrawer from "@/components/CustomDrawer";
import ProductList from "@/components/Productlist";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleNavigate = (screen) => {
    console.log("Navigate to:", screen);
    setDrawerVisible(false);
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light-content" />

      {/* Drawer */}
      <CustomDrawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        onNavigate={handleNavigate}
      />

      {!drawerVisible && (
        <LinearGradient
          colors={["#0B1F14", "#1E6F3D", "#2ECC71"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.container}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.topRow}>
              <TouchableOpacity onPress={() => setDrawerVisible(true)}>
                <Ionicons name="menu" size={28} color="#fff" />
              </TouchableOpacity>
              <Image
                source={require("@/assets/images/person.png")}
                style={styles.avatar}
              />
            </View>

            <View style={styles.textRow}>
              <Text style={styles.smallText}>BE DIFFERENT</Text>
              <Text style={styles.title}>POPULAR{"\n"}PRODUCTS</Text>
            </View>
          </View>

          {/* Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.tabs}
            contentContainerStyle={{ paddingLeft: 15 }}
          >
            {["All", "Hoodies", "Joggers", "Shorts", "T-Shirts"].map((t, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.tabBtn, i === 0 && styles.activeTab]}
              >
                <Text style={[styles.tab, i === 0 && { color: "#fff" }]}>{t}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Product List */}
          <ProductList />
        </LinearGradient>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "transparent" },
  container: { flex: 1 },

  header: { paddingTop: 10, paddingBottom: 24, borderBottomLeftRadius: 28, borderBottomRightRadius: 28 },
  topRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 },
  textRow: { paddingHorizontal: 15, marginTop: 10 },
  avatar: { width: 48, height: 48, borderRadius: 24, borderWidth: 2, borderColor: "#fff" },
  smallText: { color: "#E6F4EA", fontSize: 13, letterSpacing: 1.2 },
  title: { color: "#fff", fontSize: 30, fontWeight: "900", lineHeight: 36, marginTop: 4 },

  tabs: { marginBottom: 20, marginTop: 10 },
  tabBtn: { marginRight: 15, paddingVertical: 6, paddingHorizontal: 14, borderRadius: 20, backgroundColor: "rgba(255,255,255,0.9)" },
  activeTab: { backgroundColor: "#1E6F3D", paddingVertical: 10 },
  tab: { color: "#000", fontSize: 14, fontWeight: "500" },
});
