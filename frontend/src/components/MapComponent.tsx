import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

type Props = {
  spots: any[];
  onMarkerPress: (spotId: string) => void;
};

export default function MapComponent({ spots, onMarkerPress }: Props) {
  const initialRegion = {
    latitude: spots.length ? spots[0].location.latitude : 37.78825,
    longitude: spots.length ? spots[0].location.longitude : -122.4324,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={initialRegion}>
        {spots.map((s) => (
          <Marker
            key={s.id}
            coordinate={{ latitude: s.location.latitude, longitude: s.location.longitude }}
            title={s.name}
            description={s.type}
            onPress={() => onMarkerPress(s.id)}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 }
});