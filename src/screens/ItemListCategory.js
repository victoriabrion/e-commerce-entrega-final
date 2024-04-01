import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import SearchBar from '../components/SearchBar'
import { useGetProductsByCategoryQuery } from '../app/services/shop'

const ItemListCategory = ({route, navigation}) => {

  const {categorySelected} = route.params
  const {data:products, isError, isLoading, isSuccess, error} = useGetProductsByCategoryQuery(categorySelected)
  const [productsFiltered, setProductsFiltered] = useState ([])
  const [keyWord, setKeyWord] = useState ('')

  const handlerKeyWord = (k) => {
    setKeyWord(k)
  }

  useEffect (() => {
    setProductsFiltered(products)
    if (keyWord) setProductsFiltered(products.filter(product => {
      const productTitleLower = product.title.toLowerCase()
      const keyWordLower = keyWord.toLocaleLowerCase()
      return productTitleLower.includes(keyWordLower)
    }))
  }, [categorySelected, keyWord, products])

  if (isLoading) return <View><Text>Loading...</Text></View>

  return (
    <>
    <SearchBar handlerKeyWord= {handlerKeyWord}/>
    <FlatList style= {styles.container} data = {productsFiltered} keyExtractor= {item => item.id} renderItem={({item}) => <ProductByCategory navigation ={navigation} item = {item} />} />
    </>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Poppins'
  }
})