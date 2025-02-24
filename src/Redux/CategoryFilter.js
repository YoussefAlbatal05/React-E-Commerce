
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";


const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

const CategoryFilter = ({ setCategory , selectedCategory }) => {
    return (
        <div className="d-flex justify-content-center pt-3 button">
            {categories.map((cat) => (
                <button  key={cat} onClick={() => setCategory(cat)} className={`btn mx-2 ${selectedCategory === cat ? "btn-dark" : "btn-outline-dark" }`}>
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
