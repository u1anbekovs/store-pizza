import React from 'react';
import "./Category.scss"

const Category = ({value, onChangeCategory}) => {
    const arr = ["Все", "Мясные", "Вегетарианская", "Острые",]
    return (
        <ul className="category">
            {arr.map((name, i) => (
                <li key={i} onClick={() => onChangeCategory(i)}
                    className={value === i ? "active" : ""}>{name}</li>
            ))}
        </ul>
    );
};

export default Category;