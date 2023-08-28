import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    currentPage: 1,
    search: '',
    sortId: {
        title: 'популярности',
        sortProp: 'rating'
    }
}

const filterSlice = createSlice({
    name: "filter",
    initialState,

    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        setSortId(state, action) {
            state.sortId = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setSearch(state, action) {
            state.search = action.payload
        },
    }
})


export const {
    setCategoryId,
    setSortId,
    setCurrentPage,
    setSearch,
} = filterSlice.actions
export default filterSlice.reducer