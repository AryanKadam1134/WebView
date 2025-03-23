import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const MyWebView = () => {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: "https://team-deployers.vercel.app/" }} 
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MyWebView;
