import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
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
        {/* Back Button and Centered Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.header}>CART</Text>
          {/* Empty View to balance the row */}
          <View style={{ width: 42 }} />
        </View>

        {/* Items */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 280 }}
        >
          {[1, 2, 3].map((_, index) => (
            <View key={index} style={styles.item}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1519741497674-611481863552",
                }}
                style={styles.image}
              />

              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.name}>Pleasant Cap</Text>
                <Text style={styles.size}>Size: Large</Text>
                <Text style={styles.price}>$240.32</Text>
              </View>

              <View style={styles.qtyContainer}>
                <TouchableOpacity style={styles.qtyBtn}>
                  <Text style={styles.qtyText}>+</Text>
                </TouchableOpacity>
                <Text style={styles.qtyValue}>2</Text>
                <TouchableOpacity style={styles.qtyBtn}>
                  <Text style={styles.qtyText}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {/* Bottom Sheet just below cards */}
          <View style={styles.bottomSheet}>
            <View style={styles.summary}>
              <Text style={styles.row}>Sub Total     $565.68</Text>
              <Text style={styles.row}>Shipping     $20.00</Text>
              <Text style={styles.total}>Total     $585.68</Text>
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
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

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
    textAlign: "center",
  },

  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 12,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 14,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },

  size: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },

  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E6F3D",
    marginTop: 4,
  },

  qtyContainer: {
    alignItems: "center",
  },

  qtyBtn: {
    backgroundColor: "#1E6F3D",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  qtyText: {
    color: "#fff",
    fontWeight: "700",
  },

  qtyValue: {
    marginVertical: 6,
    fontWeight: "700",
    color: "#111",
  },

  bottomSheet: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 0,
    marginTop: 10,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 10,
  },

  summary: {
    marginBottom: 10,
  },

  row: {
    fontSize: 14,
    color: "#888",
    marginBottom: 6,
  },

  total: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1E6F3D",
    marginTop: 6,
  },

  checkout: {
    backgroundColor: "#1E6F3D",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
  },

  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
