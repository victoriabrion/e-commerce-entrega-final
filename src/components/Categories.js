import { StyleSheet, FlatList } from 'react-native'
import CardCategory from './CardCategory'
import { useGetCategoriesQuery } from '../app/services/shop'

const Categories = ({navigation}) => {

  const {data: categories} = useGetCategoriesQuery()

  return (
    <FlatList data= {categories} keyExtractor= {item => item} renderItem= {({item}) => <CardCategory item= {item} navigation ={navigation} />} />

  )
}

export default Categories

const styles = StyleSheet.create({})