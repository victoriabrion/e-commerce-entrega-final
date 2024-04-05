import { Image, StyleSheet, Text, View } from 'react-native'
import AddButton  from '../components/AddButton'
import { useSelector } from 'react-redux'
import { useGetImageQuery, useGetUserLocationQuery } from '../app/services/profile'


const Profile = ({navigation}) => {
    const localId = useSelector((state) => state.auth.localId)
    const {data} = useGetImageQuery(localId)
   // const {data: locationFormatted} = useGetUserLocationQuery(localId)

  return (
    <View style={styles.container}>
      <Image source={data ? {uri:data.image} : require ('../../assets/profiledefault.png')} style={styles.image} resizeMode='cover'/>
      <Text style={styles.text}>{locationFormatted.adress}</Text>
      <AddButton title={'Add profile picture'} onPress={() => navigation.navigate('ImageSelector')} />
      <AddButton title= {'Add address'} onPress= {() => navigation.navigate('LocationSelector')} /> 
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    image: {
        width: 200,
        height: 300
    }
})