import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import api from "../services/api";

export default function SpotDetailsScreen({ route }: any) {
  const { spotId } = route.params;
  const [spot, setSpot] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (spotId === "new") {
      setSpot(null);
      setLoading(false);
      return;
    }
    api.get(`/spots/${spotId}`)
      .then(res => setSpot(res.data))
      .catch(err => console.warn(err))
      .finally(() => setLoading(false));
  }, [spotId]);

  if (loading) return <ActivityIndicator style={styles.center} />;

  if (!spot) return (
    <View style={styles.center}>
      <Text>No spot data (create new spot form goes here)</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {spot.image && <Image source={{ uri: spot.image }} style={styles.image} />}
      <Text style={styles.title}>{spot.name}</Text>
      <Text style={styles.subtitle}>{spot.type} • {spot.location.city || spot.location.description}</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Regulations</Text>
        <Text>{spot.regulations || "No regulation info available."}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tips & Reviews</Text>
        <Text>{spot.tips || "Be the first to add a tip!"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: "100%", height: 180, borderRadius: 8, marginBottom: 12 },
  title: { fontSize: 20, fontWeight: "bold" },
  subtitle: { color: "#666", marginBottom: 12 },
  section: { marginTop: 10 },
  sectionTitle: { fontWeight: "600" }
});