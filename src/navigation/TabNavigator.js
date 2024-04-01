import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBarIcon from '../components/TabBarIcon'
import OrdersStack from './OrdersStack'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import colors from '../utils/globals/colors'
import ProfileStack from './ProfileStack'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='ShopStack' screenOptions={{headerShown:false, tabBarShowLabel:false, tabBarStyle: styles.tabBar}}>
        <Tab.Screen name= 'ShopStack' component={ShopStack} options={{tabBarIcon: ({focused}) => <TabBarIcon title='Products' nameIcon='home' focused={focused}/>}}/>
        <Tab.Screen name= 'CartStack' component={CartStack} options={{tabBarIcon: ({focused}) => <TabBarIcon title='Cart' nameIcon='shopping-cart' focused={focused}/>}}/>
        <Tab.Screen name= 'OrdersStack' component={OrdersStack} options={{tabBarIcon: ({focused}) => <TabBarIcon title='Order' nameIcon='list' focused={focused}/>}}/>
        <Tab.Screen name= 'ProfileStack' component={ProfileStack} options={{tabBarIcon: ({focused}) => <TabBarIcon title='Profile' nameIcon='user' focused={focused}/>}}/>
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.primary,
        shadowColor: colors.tertiary,
        elevation: 4,
        position: 'absolute',
        borderRadius: 15,
        bottom: 20,
        left: 20,
        right: 20,
        height: 60,
        elevation: 4
      }
})