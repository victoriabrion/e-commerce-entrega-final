import Home from "../screens/Home"
import ItemDetail from "../screens/ItemDetail"
import ItemListCategory from "../screens/ItemListCategory"
import Header from "../components/Header"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()


const ShopStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={({route, navigation}) => {
        return { 
          header: () => {
            return <Header navigation = {navigation}
                           title={route.name === 'Home' ? 'Store' : 
                                  route.name === 'ItemListCategory' ? route.params.categorySelected : 'More info'}/>}}}}>
        <Stack.Screen name= 'Home' component= {Home}></Stack.Screen>
        <Stack.Screen name= 'ItemListCategory' component= {ItemListCategory}></Stack.Screen>
        <Stack.Screen name= 'ItemDetail' component= {ItemDetail}></Stack.Screen>
</Stack.Navigator>
  )
}

export default ShopStack