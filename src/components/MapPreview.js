import { StyleSheet, Image} from 'react-native'

const MapPreview = ({latitude,longitude}) => {

    const mapPreviewUrl = ``

  return (
    <Image source={latitude ? {uri:mapPreviewUrl} : require("../../assets/favicon.png")} style={styles.image}/>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    image:{
        width: 300,
        height: 300   
     }
})