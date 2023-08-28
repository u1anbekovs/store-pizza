import React, {useState} from 'react';
import "./Buy.module.scss"
import style from "./Buy.module.scss"
import {setModal} from "../../../redux/slices/cardSlice";
import {useDispatch, useSelector} from "react-redux";

const Buy = () => {
    const {modal} = useSelector(state => state.cardSlice)
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleClick = (event) => {
        event.preventDefault();
        const message = `Имя: ${name}\n      Email: ${email}\n      Тел: ${phone}\n   Адрес: ${address}\n`
        const url = `https://api.telegram.org/bot6230829845:AAEIGb70R2sSyfVbOIIlkHOfgjEdX_l7Cjc/sendMessage?chat_id=1777853417&text=`;
        fetch(url + message)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
    };
    const onClickBot = (event) => {
        handleClick(event)
        dispatch(setModal(!modal))
    }

    return (
        <div className={style.modal} onClick={() => dispatch(setModal(!modal))}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                <h2>Оформление заказа</h2>
                <form>
                    <input value={name}
                           onChange={event => setName(event.target.value)}
                           type="text"
                           placeholder="Введите имя"/>
                    <input value={email}
                           onChange={event => setEmail(event.target.value)}
                           type="email"
                           placeholder="Example@gmail.com"/>
                    <input value={phone}
                           onChange={event => setPhone(event.target.value)}
                           type="number" placeholder="+996"/>
                    <input value={address}
                           onChange={event => setAddress(event.target.value)}
                           type="text" placeholder="Адрес"/>
                </form>
                <button onClick={onClickBot}>Оформить</button>
            </div>
        </div>
    );
};
export default Buy;