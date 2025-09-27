1 npx create-expo-app RNMaps --template blank

2 cd RNMaps
3 npx expo install react-native-maps
4 npm start

npx expo run:android

npx expo install expo-dev-client
npx expo run:android
npx expo start --dev-client
a

& "C:\Users\irens\AppData\Local\Android\Sdk\platform-tools\adb.exe" devices
& "C:\Users\irens\AppData\Local\Android\Sdk\platform-tools\adb.exe" kill-server
& "C:\Users\irens\AppData\Local\Android\Sdk\platform-tools\adb.exe" start-server


import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Map from "./components/Map";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ paddingTop: 100 }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
      <Map />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

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


export const MarkersList = [
  {
    latitude: 61.4981,
    longitude: 23.7608,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    name: "Tampere Cathedral",
  },
  {
    latitude: 61.4978,
    longitude: 23.7793,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    name: "Tampere University",
  },
  {
    latitude: 61.4994,
    longitude: 23.7871,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    name: "Kauppi Sports Park",
  },
  {
    latitude: 61.4957,
    longitude: 23.7312,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    name: "Pyynikki Observation Tower",
  },
];

