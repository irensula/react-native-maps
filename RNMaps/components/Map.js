import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Alert, StyleSheet, Text, View } from "react-native";
import { MarkersList } from "./MarkersList";
//In your android/gradle.properties, chnage newArchEnabled=true to newArchEnabled=false

const Map = () => {
  const INITIAL_REGION = {
    latitude: 61.50134,
    longitude: 23.7465,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };
  // const onMarkerSelected = (marker) => {
  //   Alert.alert(marker.name);
  // };
  return (
    <MapView
      style={styles.map}
      // provider={PROVIDER_GOOGLE}
      initialRegion={INITIAL_REGION}
      showsUserLocation
      showsMyLocationButton
    >
      {MarkersList.map((marker, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          onPress={() => setSelectedMarker(marker)}
          // onPress={() => onMarkerSelected(marker)}
        >
          <Callout>
            <View
              style={{ padding: 10, backgroundColor: "white", borderRadius: 8 }}
            >
              <Text style={{ fontWeight: "bold" }}>{marker.name}</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  callout: {
    width: 120, // must have width
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  calloutText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Map;
