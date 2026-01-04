import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <LinearGradient
        colors={["#0B1F14", "#1E6F3D", "#2ECC71"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
          
          {/* Top Bar */}
          <View style={styles.topBar}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={28} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.topTitle}>Profile</Text>
            <View style={{ width: 28 }} />
          </View>

          {/* Profile Header */}
          <View style={styles.profileHeader}>
            <Image
              source={require("@/assets/images/person.png")}
              style={styles.avatar}
            />
            <Text style={styles.name}>Anees Ahmed</Text>

            <TouchableOpacity style={styles.editBtn}>
              <Text style={styles.editText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          {/* Preferences Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>

            <View style={styles.option}>
              <Text style={styles.optionText}>Dark Mode</Text>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: "#ccc", true: "#1E6F3D" }}
                thumbColor={darkMode ? "#fff" : "#fff"}
              />
            </View>

            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Saved Reflection</Text>
              <Ionicons name="chevron-forward" size={20} color="#888" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Bookmark Verses</Text>
              <Ionicons name="chevron-forward" size={20} color="#888" />
            </TouchableOpacity>
          </View>

          {/* Help Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Help</Text>

            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Languages</Text>
              <Ionicons name="chevron-forward" size={20} color="#888" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Notifications</Text>
              <Ionicons name="chevron-forward" size={20} color="#888" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Logout</Text>
              <Ionicons name="exit-outline" size={20} color="#1E6F3D" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
  },

  /* Top Bar */
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  topTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
  },

  /* Profile Header */
  profileHeader: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
  editBtn: {
    marginTop: 10,
    backgroundColor: "#1E6F3D",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  editText: {
    color: "#fff",
    fontWeight: "600",
  },

  /* Sections */
  section: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    margin:20,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E6F3D",
    marginBottom: 10,
  },

  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  optionText: {
    fontSize: 14,
    color: "#111",
  },
});
