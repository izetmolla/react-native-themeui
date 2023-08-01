import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { ThemeUiProvider } from 'react-native-themeui';

export default function App() {





  return (
    <ThemeUiProvider>
      <View style={styles.container}>
        <Text>Result:</Text>
      </View>
    </ThemeUiProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
