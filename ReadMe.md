# Meal To Go

---

An app that is created while learning React Native.

# Features

---

- Discover restaurant by city
- Discover restaurant by city on map
- Add your favourite restaurants
- Pay your order online

# Tech

---

- Expo
- React Native
- Google geocode service(Restaurant information)
- Firebase(Authentication)
- Stripe(Payment system)

# Third party services

---

- Firebase: cloud functions for app to consume and make request
  to google geocode & place api. Look into functions folder.
  And for account sign up and sign in.
- Firebase CLI: firebase commandline tool for setup firebase project and
  develop clould functions
  https://firebaseopensource.com/projects/firebase/firebase-tools/#installation
- Google geocode api: looking up geocode for certain place.
- Google place api: find places around certain geocode.

## Run firebase emulator locally

---

**Required a project to be opened on Firebase**

- Install [Firebase CLI](https://firebaseopensource.com/projects/firebase/firebase-tools/#installation)
- `firebase login` to login to your fiebase account
- Change **default** value with your firebase project ID in `.firebaserc`
- **To set environment key/value**: google & strip service required api key
  to consume service. add api key for google and stripe for example:
  `firebase functions:config:set google.key=[google service api key]` and
  `firebase functions:config:set stripe.key=[stripe service api key]`. By
  this way cloud function is able to communicate with google and stripe service
  with api key
- `cd functions`
- `firebase functions:config:get > .runtimeconfig.json` export environment key/value
  to file
- `cd ..`
- `firebase init emulators` follow instruction with default value
- `firebase emulators:start --only functions` to start emulators
- Now you can consume cloud function service and all clould function
  source code are located under functions folder

**Note**: You will need to change **liveHost** and **localHost** in `src/utils/env.js`
accordingly

# Run app in emulator

---

- create an json file name `firebase.config.json` at root directory and fill the
  following form and fill values according to your firebase console app.

```
{
"apiKey": "",
"authDomain": "",
"projectId": "",
"storageBucket": "",
"messagingSenderId": "",
"appId": ""
}
```

values can be created in firebase console under project setting -> General
-> your apps. If no app available create a new one.

- `npm run [ios/android]`
