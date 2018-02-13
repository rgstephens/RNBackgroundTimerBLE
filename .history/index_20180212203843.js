import { AppRegistry, Platform } from 'react-native';
import App from './App';
import store from "./store.js";
import BackgroundTimer from "react-native-background-timer";
import { doScan } from "./bluetoothScan";

const scanInterval = 10000; // Interval between scans in ms
const scanLength = 2000; // How long to scan in ms
let lastRun = null;

if (Platform.OS === "android") {
  console.log("BackgroundTimer, Platform = android");
  const intervalId = BackgroundTimer.setInterval(() => {
    console.log("*** index.js setInterval", new Date());
    store.dispatch({ type: "TIMESTAMP" });
    doScan(scanLength);
  }, scanInterval);
} else {
  console.log("BackgroundTimer, Platform = ios");
  BackgroundTimer.start();
  const intervalId = setInterval(() => {
    console.log("*** index.js setInterval", new Date());
    store.dispatch({ type: "TIMESTAMP" });
    doScan(scanLength);
  }, scanInterval);
  //BackgroundTimer.stop();
}

AppRegistry.registerComponent('RNBackgroundTimerBLE', () => App);
