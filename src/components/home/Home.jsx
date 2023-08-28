import React from 'react';
import Category from "./category";
import BlockPizza from "./blockPizza";
import Sort from "./sort";
import Pagination from "../pagination";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId, setCurrentPage} from "../../redux/slices/filterSlice";
import Loading from "./blockPizza/Loading";
import {fetchPizzas} from "../../redux/slices/pizzasSlice";

const Home = () => {

    const dispatch = useDispatch()
    const {categoryId, sortId, currentPage, search} = useSelector((state) => state.filterSlice)
    const {items, loading} = useSelector((state) => state.pizzasSlice)

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const onChangeCurrentPage = number => {
        dispatch(setCurrentPage(number))
    }

    const getPizza = async () => {
        const order = sortId.sortProp.includes('-') ? 'asc' : 'desc';
        const sortBy = sortId.sortProp.replace('-', '')
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const searchFilter = search ? `&search=${search}` : ''

        dispatch(fetchPizzas({
            order,
            sortBy,
            category,
            searchFilter,
            currentPage
        }))
        window.scroll(0, 0)
    }

    React.useEffect(() => {
        dispatch(getPizza)
    }, [categoryId, sortId, search, currentPage])

    return (
        <>
            <div className="categorySort">
                <Category value={categoryId} onChangeCategory={onChangeCategory}/>
                <Sort/>
            </div>
            <h2 className="h2">Пиццы для вас</h2>
            {
                loading === 'error' ?
                    <div className="errorInfo">
                        <h1>Произошла ошибка !!! 😕</h1>
                        <p>К сожалению, не удалось получить пиццы. Попробуйте попытку позже !!!</p>
                    </div>
                    :
                    loading === 'loading' ? <Loading/> :
                        <div className="block">
                            {items.map((obj) => (
                                <BlockPizza key={obj.id} items={items} {...obj}/>
                            ))}
                        </div>
            }
            <Pagination
                currentPage={currentPage}
                onChange={onChangeCurrentPage}/>
        </>
    );
};

export default Home;