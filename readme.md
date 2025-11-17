1 npx create-expo-app training-app --template blank

2 cd <folder-name>
3 npx expo start
4 npx expo install expo-audio

DEPLOY:
5 npx expo-doctor
6 npx expo install expo-asset
7 npm install -g eas-cli
8 eas build:configure
9 eas build --platform android --profile production

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
