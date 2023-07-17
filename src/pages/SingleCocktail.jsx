import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [cocktail, setCocktail] = useState(null);
  const { id } = useParams();

  const fetchDrink = useCallback(async () => {
    try {
      const resp = await fetch(`${url}${id}`);
      const data = await resp.json();
      setCocktail(data.drinks);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetchDrink();
  }, [fetchDrink]);
  if (cocktail) {
    const {
      strDrink: name,
      strCategory: category,
      strAlcoholic: info,
      strDrinkThumb: image,
      strGlass: glass,
      strInstructions: instructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    } = cocktail[0];

    const ingredients = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    ];

    return (
      <section className="section cocktail-section">
        <Link className="btn btn-primary" to="/">
          Back to home
        </Link>
        <h2 className="section-title"></h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>
              <span className="drink-data">category</span>
              {category}
            </p>
            <p>
              <span className="drink-data">info</span>
              {info}
            </p>
            <p>
              <span className="drink-data">glass</span>
              {glass}
            </p>
            <p>
              <span className="drink-data">instructions</span>
              {instructions}
            </p>
            <p>
              <span className="drink-data">ingredients</span>
              {ingredients.map((ingredient) => {
                return ingredient;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleCocktail;
