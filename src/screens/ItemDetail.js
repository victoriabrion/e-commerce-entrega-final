import { StyleSheet, Text, View , Pressable, Image} from 'react-native'
import React, { useEffect } from 'react'
import colors from '../utils/globals/colors'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'
import { useGetProductQuery } from '../app/services/shop'

const ItemDetail = ({route}) => {

  const dispatch = useDispatch()
  const {productId} = route.params
  const {data: product, isLoading} = useGetProductQuery(productId)

  if (isLoading) return <View><Text>Loading...</Text></View>

  return (
    <View style = {styles.container}>
    <View style = {styles.content}>
      <Image style ={styles.image} source= {{uri:product?.thumbnail}} resizeMode= 'cover' />
      <View style= {styles.containerText}>
        <Text style= {styles.title}>{product.title}</Text>
        <Text>{product.description}</Text>
      </View>
      <View style={styles.containerPrice}>
        <Text style= {styles.price}>$ {product.price}</Text>
        <Pressable style={styles.buyNow} onPress={() => dispatch(addCartItem(product))}>
          <Text style={styles.buyNowText}>Add to cart</Text>
        </Pressable>
      </View>
    </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'start',
    alignItems:'center',
    fontFamily: 'Poppins'
  },
  content: {
    width: '100%'
  },
  image: {
    width: '100%',
    height: 300
  },
  containerText: {
    gap: 25,
    paddingHorizontal: 5,
    paddingVertical: 25,
    fontFamily: 'Poppins'
  },
  containerPrice: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
    fontFamily: 'Poppins'
  },
title: {
  fontSize: 20,
  fontWeight: 'bold',
  fontFamily: 'Poppins'
},
price: {
  fontSize: 30,
  fontFamily: 'Poppins'
},
buyNow: {
  backgroundColor: colors.secondary,
  paddingVertical: 5,
  paddingHorizontal: 10,
  borderRadius: 5
},
buyNowText: {
  color: 'white',
  fontFamily: 'Poppins'
}
})