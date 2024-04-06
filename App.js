import {StatusBar} from 'react-native'
import { useFonts } from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import colors from './src/utils/globals/colors'
import MainNavigator from './src/navigation/MainNavigator'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import { init } from './src/utils/db'

init ()

const App = () => {

  const [fontsLoaded] = useFonts (fontCollection)

  if (!fontsLoaded) return null
  

  return (
    <>
    <StatusBar backgroundColor={colors.tertiary}  barStyle= 'light-content'/>
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
    </>
  )
}

export default App

