/* eslint-disable */

// equipments
const pan = { name: 'Pan', _id: '56f4636ec558e7a529b0b42d' }
const knife = { name: 'Knife', _id: '56f46375c558e7a529b0b42e' }
const bowl = { name: 'Bowl', _id: '56f4637bc558e7a529b0b42f' }
const toaster = { name: 'Toaster', _id: '56f045bfcab8bfde77c236d7' }
export const equipments = [pan, knife, bowl, toaster]

// recipes
const paAmbTomquetRecipe = {
  equipments: [{ _id: toaster._id, quantity: 1 }, { _id: knife._id, quantity: 1 }],
  _id: '56f619ce4c18778232e0855b',
}
export const recipes = [paAmbTomquetRecipe]
