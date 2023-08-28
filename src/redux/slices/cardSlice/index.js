import {createSlice} from "@reduxjs/toolkit";
import {calcTotalPrice, getCartLS} from "../../../utils/cartLS";


const {items, totalPrice} = getCartLS()

const initialState = {
    totalPrice,
    items,
    modal: true
}

const cardSlice = createSlice({
    name: "card",
    initialState,

    reducers: {
        addItems(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = calcTotalPrice(state.items)
        },
        minusItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload)
            if (findItem) {
                findItem.count--
            }
        },
        removeItems(state, action) {
            state.items = state.items.filter((obj) => obj.id !== action.payload)
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
        },
        setModal(state, action) {
            state.modal = action.payload
        }
    }
})

export const {
    addItems,
    minusItem,
    removeItems,
    clearItems,
    setModal,
}
    = cardSlice.actions
export default cardSlice.reducer