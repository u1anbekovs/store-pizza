import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const {
            order,
            sortBy,
            category,
            searchFilter,
            currentPage
        } = params
        const {data} = await axios.get(`https://6469c222183682d61445d295.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${searchFilter}`)
        return data
    }
)


const initialState = {
    items: [],
    loading: 'loading',
}

const pizzasSlice = createSlice({
    name: "pizza",
    initialState,

    reducers: {},

    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.loading = 'loading'
            state.items = []
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload
            state.loading = 'success'
        },
        [fetchPizzas.rejected]: (state) => {
            state.loading = 'error'
            state.items = []
        }
    }
})


export const {} = pizzasSlice.actions
export default pizzasSlice.reducer