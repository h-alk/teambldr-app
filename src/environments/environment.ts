// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:4200/',
  firebase: {
    apiKey: 'AIzaSyAX7z8C60wsmx071CEXI36afIdW0dRwecw',
    authDomain: 'team-bldr.firebaseapp.com',
    databaseURL: 'https://team-bldr.firebaseio.com',
    projectId: 'team-bldr',
    storageBucket: 'team-bldr.appspot.com',
    messagingSenderId: '814914099009'
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
