import { Keyboard, Pressable, StyleSheet, TextInput, View, Text } from 'react-native'
import colors from '../utils/globals/colors'
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'

const SearchBar = ({handlerKeyWord}) => {

    const [input, setInput] = useState ('')
    const [error, setError] = useState ('')
    const handlerInput = (t) => setInput (t)

    const search = () => {
        const expression =  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        if (expression.test(input)){
            setError('Invalid characters')
            return        
        }
        setError('')
        handlerKeyWord(input)
        Keyboard.dismiss()
    }

    const resetSearch = () => {
        handlerKeyWord('')
        handlerInput('')
        setError('')
        Keyboard.dismiss()
    }


  return (
    <View>
    <View style= {styles.container}>
      <TextInput placeholder='Search' style= {styles.input} value= {input} onChangeText={handlerInput}/>
      <Pressable onPress={search}>
        <AntDesign name= 'search1' size= {30} color= 'black' />
      </Pressable>
      <Pressable onPress={resetSearch}>
        <AntDesign name= 'closecircle' size= {30} color= 'black' />
      </Pressable>
    </View>
     
    {error ? <Text style={styles.errorText}>{error}</Text> : null}

    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.tertiary,
        flexDirection: 'row',
        padding: 10

    },
    input: {
        flex: 1,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        color: colors.primary
    }
})