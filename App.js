/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import WebView from 'react-native-webview';
import {NativeViewGestureHandler} from 'react-native-gesture-handler';

const App = () => (
  <NativeViewGestureHandler>
    <WebView source={{uri: 'http://example.com'}} />
  </NativeViewGestureHandler>
);

export default App;
