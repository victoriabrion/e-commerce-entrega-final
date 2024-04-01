import { StyleSheet, Text, View } from 'react-native'
import colors from '../utils/globals/colors'
import { Entypo } from '@expo/vector-icons'

const TabBarIcon = ({title, nameIcon, focused}) => {
  return (
    <View style={styles.container}>
      <Entypo name={nameIcon} size={25} color={focused ? colors.quaternary : colors.tertiary}/>
      <Text style={[styles.text, !focused && styles.textFocused]}>{title}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        color: colors.quaternary,
        textAlign: 'center',
        fontSize: 15
    },
    textFocused: {
        color: colors.tertiary
    }
})