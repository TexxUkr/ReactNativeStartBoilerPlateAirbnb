import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import createMyStore from './store/createStore'

const store = createMyStore()
const App = () => (
  <Provider store={store}>
    <View>
      <Text> Hello There </Text>
    </View>
  </Provider>
)

export default App
