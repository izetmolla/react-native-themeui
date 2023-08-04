import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Box, ThemeUiProvider } from 'react-native-themeui';

export default function App() {
  return (
    <ThemeUiProvider>
      <View style={styles.container}>
        <Box>
          <Text>Result:</Text>
        </Box>
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
