import { StyleSheet, Text, Image, Pressable  } from 'react-native'
import colors from '../utils/globals/colors'

const ProductByCategory = ({item, navigation}) => {
  return (
    <Pressable onPress={()=> navigation.navigate('ItemDetail', {productId:item.id})} style = {styles.container}>
        <Text style = {styles.text}> {item.title}</Text>
        <Image style = {styles.image} source= {{uri: item.thumbnail}} resizeMode='cover'/>
    </Pressable>
  )
}

export default ProductByCategory

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.tetrary,
        width: '80%',
        marginHorizontal: '10%',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    text: {
        width: '60%',
        fontSize: 16,
        fontFamily: 'Poppins'
    },
    image: {
        minWidth: 90,
        minHeight: 90,
        borderRadius: 5
    }
})