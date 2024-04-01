import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import colors from '../utils/globals/colors'

const OrderItem = ({order}) => {
  return (
    <View style={styles.card}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{order.createdAt}</Text>
            <Text style={styles.text2}>{order.total}</Text>
        </View>
        <AntDesign name='search1' size={30} color= {colors.primary}/>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.secondary,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
        alignItems: 'center'
    },
    textContainer: {
        width: '70%'
    },
    text: {
        fontSize: 17,
        fontFamily: 'Poppins',
        color: colors.tertiary
    },
    text2: {
        fontSize: 19,
        fontFamily: 'Poppins',
        color: colors.primary
    }
})