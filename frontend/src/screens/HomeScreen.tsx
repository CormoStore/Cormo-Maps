import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import MapComponent from "../components/MapComponent";
import api from "../services/api";

export default function HomeScreen({ navigation }: any) {
  const [spots, setSpots] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/spots")
      .then(res => setSpots(res.data))
      .catch(err => console.warn(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator style={styles.center} />;

  return (
    <View style={styles.container}>
      <MapComponent
        spots={spots}
        onMarkerPress={(spotId: string) => navigation.navigate("SpotDetails", { spotId })}
      />
      <View style={styles.footer}>
        <Text>Showing {spots.length} spots</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SpotDetails", { spotId: "new" })}>
          <Text style={{ color: "white" }}>Add Spot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  footer: { padding: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  button: { backgroundColor: "#0a84ff", padding: 10, borderRadius: 6 }
});