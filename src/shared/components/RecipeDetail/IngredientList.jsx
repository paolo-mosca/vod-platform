// @flow

import React from 'react'

type Props = {
  ingredients: [{
    name: string,
    quantity: number,
    unit: string,
  }],
};

const IngredientList = ({ ingredients }: Props) =>
  <section className="ingredients">
    <h5>Ingredients</h5>
    {ingredients.map(({ name, quantity, unit }) =>
      <div key={name} className="ingredient-wrapper">
        <div className="ingredient-quantity">{quantity}&nbsp;&nbsp;</div>
        <div className="ingredient-unit">{unit}&nbsp;</div>
        <div className="ingredient-name">{name}</div>
      </div>,
    )}
  </section>

export default IngredientList
