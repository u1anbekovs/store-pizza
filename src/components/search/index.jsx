import React from 'react';
import style from "./Search.module.scss"
import {FcSearch} from "react-icons/fc"
import {MdOutlineClose} from "react-icons/md"
import debounce from "lodash.debounce"
import {useDispatch} from "react-redux";
import {setSearch} from "../../redux/slices/filterSlice";

const Search = () => {
    const [value, setValue] = React.useState('')
    const inputRef = React.useRef(null)
    const dispatch = useDispatch()

    const onClickClear = () => {
        dispatch(setSearch(''))
        setValue('')
        inputRef.current.focus()
    }

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            dispatch(setSearch(str))
        }, 500), [])

    const onChangeInput = (event) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    return (
        <div className={style.root}>
            <FcSearch className={style.icon}/>
            <input ref={inputRef} value={value} onChange={onChangeInput} type="text"
                   placeholder="Поиск пицц...."/>
            {value &&
                <MdOutlineClose onClick={onClickClear} className={style.close}/>
            }
        </div>
    );
};

export default Search;