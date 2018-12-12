import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const SampleA = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('SampleB');
      navigation.navigate('SampleB');
      navigation.navigate('SampleB');
    }}
    style={styles.container}
  >
    <Text>SampleA</Text>
  </TouchableOpacity>
);

const SampleB = ({ navigation }) => (
  <View style={styles.container}>
    <Text>SampleB</Text>
  </View>
);

const AppNavigator = StackNavigator({
  SampleA: { screen: SampleA },
  SampleB: { screen: SampleB },
});

const App = () => <AppNavigator />;

export default App;
