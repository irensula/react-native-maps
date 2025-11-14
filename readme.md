1 npx create-expo-app training-app --template blank

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

https://expo.dev/accounts

npx expo install react-dom react-native-web - for the web
npm cache clean --force

expo install expo-av
