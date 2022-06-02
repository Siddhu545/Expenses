/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';

 const Provider = () => {
     return(
         <MyProvider>
             <App />
         </MyProvider>
     )
 }
 
 AppRegistry.registerComponent(appName, () => App);
 