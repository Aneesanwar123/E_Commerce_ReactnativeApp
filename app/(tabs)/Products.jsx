import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Products() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#0B1F14", "#1E6F3D", "#2ECC71"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 180 }}>
          {/* Back Button */}
          <TouchableOpacity style={styles.back} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>

          {/* Product Image */}
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1519741497674-611481863552",
            }}
            style={styles.image}
          />

          {/* Info */}
          <Text style={styles.category}>ACCESSORIES</Text>
          <Text style={styles.title}>Pleasant Cap</Text>

          <Text style={styles.desc}>
            Made from premium materials, this cap is designed to keep you looking
            fresh and stylish every day. Made from premium materials, this cap is designed to keep you looking
            fresh and stylish every day. Made from premium materials, this cap is designed to keep you looking
            fresh and stylish every day.
          </Text>

          {/* Sizes */}
          <Text style={styles.sizeLabel}>Size</Text>
          <View style={styles.sizes}>
            {["S", "M", "L", "XL", "XXL"].map((s) => {
              const active = s === "L";
              return (
                <TouchableOpacity
                  key={s}
                  style={[styles.sizeBox, active && styles.activeSize]}
                >
                  <Text style={[styles.sizeText, active && styles.activeSizeText]}>
                    {s}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        {/* Bottom Bar */}
        <View style={styles.bottom}>
          <Text style={styles.price}>$240.32</Text>

          <TouchableOpacity style={styles.cartBtn}>
            <Text style={styles.cartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  /* Back Button */
  back: {
    marginTop: 10,
    marginBottom: 10,
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0,0.25)",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start", // <-- back button stays left
  },

  /* Image */
  image: {
    width: "100%",
    height: 320,
    borderRadius: 26,
    marginTop: 10,
  },

  /* Text */
  category: {
    color: "#c5f3d5",
    marginTop: 20,
    letterSpacing: 1,
    fontSize: 12,
    textAlign: "left",
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "800",
    marginVertical: 6,
    textAlign: "left",
  },
  desc: {
    color: "#e0f0d9",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    marginHorizontal: 0,
  },

  /* Sizes */
  sizeLabel: {
    color: "#fff",
    marginTop: 24,
    marginBottom: 10,
    fontWeight: "700",
    textAlign: "left",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 30,
  },
  sizeBox: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginRight: 10,
  },
  activeSize: {
    backgroundColor: "#1E6F3D",
    borderColor: "#1E6F3D",
  },
  sizeText: {
    color: "#777",
    fontWeight: "600",
  },
  activeSizeText: {
    color: "#fff",
  },

  /* Bottom */
  bottom: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // price & button vertically aligned
  },
  price: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "800",
  },
  cartBtn: {
    backgroundColor: "#1E6F3D",
    paddingHorizontal: 36,
    paddingVertical: 16,
    borderRadius: 26,
    elevation: 4,
  },
  cartText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});
