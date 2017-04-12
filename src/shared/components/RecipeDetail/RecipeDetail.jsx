// @flow

import React from 'react'

import Details from './Details'
import TagList from './TagList'
import LearningPathList from './LearningPathList'
import IngredientList from './IngredientList'
import StepList from './StepList'
import EquipmentList from './EquipmentList'
import SkillList from './SkillList'

type Props = {
  videoFullUrl: string,
  title: string,
  description: string,
  chef: {
    name: string,
    thumbnailUrl: string,
  },
  categories: [{ name: string }],
  tags: [{ name: string }],
  learningPaths: [{ name: string }],
  courseType: string,
  length: number,
  difficulty: string,
  servings: number,
  price: number,
  ingredients: [{
    name: string,
    quantity: number,
    unit: string,
  }],
  steps: [{
    pictureUrl: string,
    description: string,
    tip: string,
  }],
  equipments: [{ name: string }],
  skills: [{ name: string }],
};

const RecipeDetail = (recipe: Props) =>
  <section className="section-recipe-details grid container">
    <Details
      videoFullUrl={recipe.videoFullUrl}
      title={recipe.title}
      description={recipe.description}
      chef={recipe.chef}
      categories={recipe.categories}
    />
    <section className="recipe-details">
      <section className="basic-recipe-information">
        <TagList tags={recipe.tags} />
        <LearningPathList paths={recipe.learningPaths} />
        <div className="course-type">
          <h5>Course Type: </h5>
          <p>{recipe.courseType}</p>
        </div>
        <div className="length">
          <h5>Estimated time: </h5>
          <p>{recipe.length} minutes</p>
        </div>
        <div className="difficulty">
          <h5>Difficulty: </h5>
          <p>{recipe.difficulty}</p>
        </div>
        <div className="servings">
          <h5>Servings: </h5>
          <p>{recipe.servings} people</p>
        </div>
        <div className="price">
          <h5>Price: </h5>
          <p>{recipe.price} €</p>
        </div>
      </section>
      <section className="recipe-material">
        <EquipmentList equipments={recipe.equipments} />
        <IngredientList ingredients={recipe.ingredients} />
      </section>
      <StepList steps={recipe.steps} />
      <SkillList skills={recipe.skills} />
    </section>
  </section>

export default RecipeDetail
