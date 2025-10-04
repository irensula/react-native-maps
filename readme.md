1 npx create-expo-app RNMaps --template blank

2 cd RNMaps
3 npx expo install react-native-maps
4 npm start

npx expo install expo-dev-client
npx expo run:android
npx expo start --dev-client
a

// for maps
npm install react-native-maps

// for push notifications
npx expo install expo-notifications expo-device expo-constants

npm install -g eas-cli
eas --version
eas login
eas build:configure
