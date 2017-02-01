import React, { PropTypes } from 'react'

function IngredientList ({ ingredients }) {
  return (
    <section className='ingredients'>
      <h5>Ingredients</h5>
      {ingredients
        .map((ingredient, index) => {
          var {name, quantity, unit} = ingredient
          return (
            <div key={index} className = 'ingredient-wrapper'>
              <div className='ingredient-quantity'>{quantity}&nbsp;&nbsp;</div>
              <div className='ingredient-unit'>{unit}&nbsp;</div>
              <div className='ingredient-name'>{name}</div>
            </div>
          )
        })
      }
    </section>
  )
}

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired
}

export default IngredientList
