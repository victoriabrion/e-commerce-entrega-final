import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native'

const initialState = {
    items: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, actions)=> {
            const existingItem = state.items.some((item) => item.id === actions.payload.id)
            if (!existingItem) {
                state.items = [...state.items, {...actions.payload, quantity:1}]
            } else {
                state.items = state.items.map((item) => {
                    if (item.id === actions.payload.id){
                        return {...item, quantity: item.quantity +1}
                    } 
                    return item
                })
            }
            state.total = state.items.reduce((acc,item)=> acc = acc + (item.price * item.quantity),0)
            Alert.alert('Item added to cart!', 'Item added to cart!'[
                {
                  text: 'OK',
                }
              ]);
        },
        deleteCartItem: (state, actions) => {
            state.items = state.items.filter((item) => item.id !== actions.payload)
            state.total = state.items.reduce((acc,item)=> acc = acc + (item.price * item.quantity),0)
        },
        deleteCart: (state) => {
            state.total = 0
            state.items = []
        }
    }
}
)

export const { addCartItem, deleteCartItem, deleteCart } = cartSlice.actions
export default cartSlice.reducer