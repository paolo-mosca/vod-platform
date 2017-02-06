import React, {Component} from 'react'
import { Field, FieldArray, reduxForm, SubmissionError } from 'redux-form'
import CustomInput from '../Form/CustomInput'
import Ingredients from './SubComponents/Ingredients'
import Steps from './SubComponents/Steps'
import Equipment from './SubComponents/Equipment'
import Skills from './SubComponents/SkillsLearnt'
import {required, number, url} from '../Form/validations'
import {fetchRecipeInfo, createOrUpdateRecipe, fetchRecipe, recipeBySlug} from '../../../data/recipes'
import {connect} from 'react-redux'
import {getSelectOptions} from '../../../utils/form'
import {browserHistory} from 'react-router'

@connect((state, {routeParams: {slug}}) => {
  return {
    categoryOptions: getSelectOptions(state.categories),
    tagOptions: getSelectOptions(state.tags),
    learningPathOptions: getSelectOptions(state.learningPaths),
    authorOptions: getSelectOptions(state.authors),
    initialValues: recipeBySlug(state, slug)
  }
})
@reduxForm({
  form: 'recipeCreateForm'
})
export default class RecipeCreateForm extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  componentDidMount () {
    const {routeParams: {slug}, dispatch} = this.props
    dispatch(fetchRecipeInfo())
    if (slug) {
      dispatch(fetchRecipe(slug))
    }
  }
  preventSubmit (e) {
    e.preventDefault()
  }
  submit (values) {
    const {routeParams: {slug}, dispatch} = this.props
    dispatch(createOrUpdateRecipe(values, slug))
      .then(() => {
        browserHistory.push('/')
      })
  }
  render () {
    const {
      submitting,
      handleSubmit,
      categoryOptions,
      tagOptions,
      learningPathOptions,
      authorOptions,
      routeParams: {
        slug
      }
    } = this.props
    return (
       <div className="container subsection-recipes">
         <form id='create-new-video-recipe-form' onSubmit={handleSubmit(this.submit)}>
           <fieldset>
             <legend>Add a new Videos to Keychn VOD Platform</legend>
           </fieldset>
           <p>Recipe Text Details</p>
           <Field
             name='title'
             component={CustomInput}
             placeholder='Recipe title'
             type='text'
             validate={required} />
           <Field
             name='slug'
             component={CustomInput}
             placeholder='Recipe slug'
             type='text'
             readOnly={!!slug}
             validate={required} />
           <Field
             name='description'
             component={CustomInput}
             placeholder='Recipe description'
             type='text'
             validate={required} />

           <p>Recipe Category</p>
           <Field
             name='categories'
             component={CustomInput}
             type='select'
             multi={true}
             placeholder='Choose one category'
             options={categoryOptions}
             validate={required}
           />

           <p>Recipe Tags (select multiple)</p>
           <Field
             name='tags'
             component={CustomInput}
             type='select'
             placeholder='Choose one or more tags'
             multi={true}
             simpleValue={true}
             options={tagOptions}
             validate={required}
           />

           <p> Cooking Path (select multiple)</p>
           <Field
             name='learningPath'
             component={CustomInput}
             type='select'
             placeholder='Choose one or more learning paths '
             multi={true}
             simpleValue={true}
             options={learningPathOptions}
             validate={required}
           />

           <p>Recipe Type</p>
           <Field
             name='courseType'
             component={CustomInput}
             type='select'
             placeholder='Choose one recipe type'
             options={[
               {value: 'starter', label: 'Starter'},
               {value: 'main', label: 'Main'},
               {value: 'dessert', label: 'Dessert'}
             ]}
             validate={required}
           />

           <p>Recipe Pictures URLs</p>
           <Field
             name='pictureIngredients'
             component={CustomInput}
             placeholder='Recipe ingredients picture'
             type='text'
             validate={[required, url]} />
           <Field
             name='picturePlating'
             component={CustomInput}
             placeholder='Recipe final picture'
             type='text'
             validate={[required, url]} />

           <p>Recipe Video URLs</p>
           <Field
             name='videoThumbnail'
             component={CustomInput}
             placeholder='Recipe thumbnail for the video'
             type='text'
             validate={[required, url]} />
           <Field
             name='videoPreview'
             component={CustomInput}
             placeholder='Recipe video preview'
             type='text'
             validate={[required, url]} />
           <Field
             name='videoFull'
             component={CustomInput}
             placeholder='Recipe video full-length'
             type='text'
             validate={[required, url]} />

           <p>Recipe Detailed Information</p>
           <Field
             name='length'
             component={CustomInput}
             placeholder='Recipe length (minutes)'
             type='number' min='5'
             validate={[required, number]} />
           <Field
             name='servings'
             component={CustomInput}
             placeholder='Recipe servings (people)'
             type='number' min='1'
             validate={[required, number]} />

           <p>Recipe Difficulty</p>
           <Field
             name='difficulty'
             component={CustomInput}
             type='select'
             placeholder='Choose the difficulty'
             options={[
               {value: 'easy', label: 'Easy'},
               {value: 'medium', label: 'Medium'},
               {value: 'hard', label: 'Hard'}
             ]}
             validate={required}
           />
           <p>Author</p>
           <Field
             name='author'
             component={CustomInput}
             type='select'
             placeholder='Choose Author '
             options={authorOptions}
             validate={required}
           />

           <FieldArray name='ingredients' component={Ingredients} />
           <FieldArray name='steps' component={Steps} />
           <FieldArray name='equipment' component={Equipment} />
           <FieldArray name='skillsLearnt' component={Skills} />
           <div>
             <input
               className='btn btn-primary'
               type='submit'
               value={slug ? 'Update' : 'Add New Recipe'}
               disabled={submitting}
               onSubmit={handleSubmit(this.submit)} />
          </div>
        </form>
      </div>
    )
  }
}
