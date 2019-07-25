// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
      firebase: {
      apiKey: "AIzaSyByfaqlnPrti_Up-Ukul124W0C0vT8IyzA",
      authDomain: "ecom-cdb7a.firebaseapp.com",
      databaseURL: "https://ecom-cdb7a.firebaseio.com",
      projectId: "ecom-cdb7a",
      storageBucket: "ecom-cdb7a.appspot.com",
      messagingSenderId: "426258188323",
      appId: "1:426258188323:web:5deeef4726aecd01"
   }
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
