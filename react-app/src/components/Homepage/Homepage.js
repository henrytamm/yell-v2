import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBizes } from "../../store/biz";
import { getAllCategory } from "../../store/categories";
import "./Homepage.css";
import Footer from "../Footer/Footer";

const CATEGORY_EMOJIS = ["🥗", "🌮", "🍣", "🥣", "🍕", "🥖", "☕", "🍦"];

function Homepage() {
  const dispatch = useDispatch();
  const biz = useSelector((state) => state.bizReducer);
  const bizArr = biz ? Object.values(biz) : [];

  const categories = useSelector((state) => state.categoryReducer);
  const categoriesArr = categories ? Object.values(categories) : [];

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getBizes());
  }, [dispatch]);

  return (
    <>
      <div className="homepage-img-container">
        <img
          className="homepage-img"
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
          alt="Restaurant interior"
        />
        <div className="hero-overlay">
          <h1>Find the Best Local Businesses</h1>
          <p>Restaurants, bars, salons, and more</p>
        </div>
      </div>

      <div className="categories-section">
        <h2 className="categories-title-container">Categories</h2>
        <div className="categories-container">
          {categoriesArr.map((category, idx) => (
            <NavLink key={category.id} to={`/categories/${category.id}`}>
              <div className="category-card-container">
                <p className="emojis-container">
                  {CATEGORY_EMOJIS[idx] || "🍽️"}
                </p>
                <p className="category-name-container">{category.name}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="biz-list-container">
        <h2 className="biz-title">Popular Businesses</h2>
        <div className="biz-card-container">
          {bizArr.slice(0, 8).map((biz, idx) => (
            <div className="biz-card" key={biz.id}>
              <NavLink to={`/biz/${biz.id}`}>
                <img
                  className="biz-card-img"
                  src={biz.previewImage}
                  alt={biz.name}
                />
              </NavLink>
              <div className="biz-card-info">
                <NavLink to={`/biz/${biz.id}`}>
                  <span className="biz-card-rank">{idx + 1}.</span>
                  <span className="biz-card-name">{biz.name}</span>
                </NavLink>
                <div className="biz-card-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className={`fas fa-star star ${
                        star <= (biz.avgStars || 4) ? "" : "empty"
                      }`}
                    />
                  ))}
                </div>
                {biz.categories && biz.categories.length > 0 && (
                  <p className="biz-card-category">
                    {biz.categories.map((c) => c.name).join(", ")}
                  </p>
                )}
                <p className="biz-card-description">{biz.description}</p>
                <p className="biz-card-location">
                  {biz.city}, {biz.state}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
