import { Pressable, StyleSheet, Text, View } from 'react-native'
import ShadowPrimary from './wrappers/ShadowPrimary'
import colors from '../utils/globals/colors'

const CardCategory = ({item, navigation}) => { 
  return (
    <Pressable onPress={() => navigation.navigate('ItemListCategory', {categorySelected:item})}>
        <ShadowPrimary style = {styles.container}>
            <Text style = {styles.text}>{item}</Text>
        </ShadowPrimary>
    </Pressable>
  )
}

export default CardCategory

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: colors.secondary,
        marginHorizontal: '10%',
        marginVertical: 10,
        padding: 20,
        alignItems: 'center',
        borderRadius: 10
    },
    text: {
        fontSize: 15,
        color: 'black',
        fontFamily: 'Poppins',
        color: colors.tertiary
    }
})