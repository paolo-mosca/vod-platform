/* eslint-disable */

const getFutureDate = (days) => {
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + days)
  return targetDate
}

// categories
const spanishCategory = { name: 'Spanish', _id: '56f46358c558e7a529b0b42b' }
const mexicanCategory = { name: 'Mexican', _id: '56f46365c558e7a529b0b42c' }
export const categories = [spanishCategory, mexicanCategory]

// equipments
const pan = { name: 'Pan', _id: '56f4636ec558e7a529b0b42d' }
const knife = { name: 'Knife', _id: '56f46375c558e7a529b0b42e' }
const bowl = { name: 'Bowl', _id: '56f4637bc558e7a529b0b42f' }
const toaster = { name: 'Toaster', _id: '56f045bfcab8bfde77c236d7' }
export const equipments = [pan, knife, bowl, toaster]

// ingredients
const potato = { name: 'Potato', _id: '56f46382c558e7a529b0b430' }
const tomato = { name: 'Tomato', _id: '56f46389c558e7a529b0b431' }
const salt = { name: 'Salt', _id: '56f46390c558e7a529b0b432' }
const bread = { name: 'Bread', _id: '56f045c5cab8bfde77c236d8' }
const oliveOil = { name: 'olive oil', _id: '56f045cdcab8bfde77c236d9' }
const pepper = { name: 'Pepper', _id: '56f045d2cab8bfde77c236da' }
export const ingredients = [potato, tomato, salt, bread, oliveOil, pepper]

// tags
const healthyTag = { name: 'Healthy', _id: '56f46396c558e7a529b0b433' }
const veggieTag = { name: 'Veggie', _id: '56f4639cc558e7a529b0b434' }
export const tags = [healthyTag, veggieTag]

// learning paths
const spanishPath = { name: 'Basic Spanish', _id: '56f463a1c558e7a529b0b435' }
const modernPath = { name: 'Modern Techniques', _id: '56f47f47173fc350453e66d4' }
export const learningPaths = [spanishPath, modernPath]

// skills
const carameliseOnions = { name: 'Caramalise onions', _id: '56f045b0cab8bfde77c236d5' }
const grillBread = { name: 'Grill bread', _id: '56f045b7cab8bfde77c236d6' }
export const skills = [carameliseOnions, grillBread]

// chefs
const chefJohn = { name: 'John', description: 'Join is a classical mexican chef', thumbnailUrl: '3.jpg', _id: '56f4834c4553255f50e5c045' }
const chefCarlos = { name: 'Carlos Jovani', description: 'Italian gormet expert!', thumbnailUrl: '23.jpg', _id: '56f484dfb304f4ea522aa6b5' }
export const chefs = [chefJohn, chefCarlos]

// recipes
const paAmbTomquetRecipe = {
  title: 'Pa amb tomàquet',
  slug: 'pa-amb-tomaquet',
  description: 'Grilled bread with tomatoe, olive, pepper and salt.',
  categories: [spanishCategory._id],
  tags: [healthyTag._id],
  learningPath: [spanishPath._id],
  courseType: 'starter',
  pictureIngredients: '0.jpg',
  picturePlating: '1.jpg',
  videoThumbnailUrl: 'placeholdersmall.png',
  videoPreview: 'url4',
  videoFull: 'video-placeholder-big.png',
  length: '5',
  difficulty: 'Easy',
  servings: 2,
  chef: chefJohn._id,
  ingredients: [
    { _id: bread._id, quantity: 2, unit: 'slices' },
    { _id: oliveOil._id, quantity: 1, unit: 'tbsp' },
    { _id: salt._id, quantity: 1, unit: 'pinch' },
    { _id: pepper._id, quantity: 1, unit: 'pinch' },
  ],
  steps: [{
    picture: 'step1.png',
    description: 'Toast the bread slices.',
    tip: 'Crunchy outside, soft inside!',
  }, {
    picture: 'step2.png',
    description: 'Spread with tomato first, add salt and pepper and finally the olive oil.',
    tip: 'You could also spread with garlic before the tomato to obtain a more tasty flavor.',
  }],
  price: '10',
  equipments: [{ _id: toaster._id, quantity: 1 }, { _id: knife._id, quantity: 1 }],
  skills: [grillBread._id],
  _id: '56f619ce4c18778232e0855b',
}
export const recipes = [paAmbTomquetRecipe]

// export const recipes = [

//   {
//     title: 'Baby Octopus with onions',
//     slug: 'baby-octopus-with-onions',
//     description: 'Stuffed baby octopus with onions.',
//     categories: ['Spanish', 'Mediterranean'],
//     tags: [
//       'seafood',
//       'stuffed',
//     ],
//     learningPath: [
//       'spanish-basics',
//     ],
//     courseType: 'main',
//     pictureIngredients: '6.jpg',
//     picturePlating: '7.jpg',
//     videoThumbnailUrl: 'placeholdersmall.png',
//     videoPreview: 'url4',
//     videoFull: 'video-placeholder-big.png',
//     length: '5',
//     difficulty: 'Medium',
//     servings: '2',
//     chef: {
//       name: 'Marc',
//       thumbnailUrl: '3.jpg',
//       description: 'Wannabe Farmer!',
//     },
//     ingredients: [{
//       name: 'Baby octopus',
//       quantity: '500',
//       unit: 'grams',
//     }, {
//       name: 'olive oil',
//       quantity: '4',
//       unit: 'tbsp',
//     }, {
//       name: 'onions',
//       quantity: '4',
//       unit: 'big',
//     }, {
//       name: 'chopped garlic',
//       quantity: '2',
//       unit: 'cloves',
//     }, {
//       name: 'salt',
//       quantity: '2',
//       unit: 'pinches',
//     }, {
//       name: 'pepper',
//       quantity: '1',
//       unit: 'pinch',
//     }, {
//       name: 'red wine',
//       quantity: '1',
//       unit: 'glass',
//     }],
//     steps: [{
//       picture: 'step1.png',
//       description: 'Cut the onions in julienne',
//       tip: 'As thin as possible to cook it faster.',
//     }, {
//       picture: 'step1.png',
//       description: 'Heat 3tbsp of oil in a casserole and cook the onions over high heat for 5 minutes',
//       tip: 'Start hard',
//     }, {
//       picture: 'step1.png',
//       description: 'Cover the casserole with and cook over low-medium heat for 20 minutes',
//       tip: 'Move from time to time to avoid burning.',
//     }, {
//       picture: 'step1.png',
//       description: 'Heat 1tbsp of oil in a frying pan and cook the octopus over medium-high heat for 2 minutes',
//       tip: 'Move from time to time to avoid burning.',
//     }, {
//       picture: 'step1.png',
//       description: 'Add the octopus, garlic, wine, salt and pepper into the casserole with the onions.',
//       tip: 'You can also use champagne or white wine to obtain a ligther taste. ',
//     }],
//     price: '10',
//     equipments: [{
//       name: 'casserole with the cover',
//       quantity: '1',
//     }, {
//       name: 'frying pan',
//       quantity: '1',
//     }, {
//       name: 'knife',
//       quantity: '1',
//     }],
//     skillsLearnt: [{
//       name: 'Caramelise onions',
//     }, {
//       name: 'Stuffed octopus or calamari',
//     }],
//     comments: [{
//       text: 'Awesome recipe from Catalonia',
//       userId: 'Jean',
//       created: 1471199929,
//     }, {
//       text: 'A mix of sweet and savory.',
//       userId: 'Denise',
//       created: 1471199999,
//     }],
//     userId: 'seconduserid',
//     created: 1461199199,
//     _id: '56f61ff82bd2403e3e80310b',
//   }, 
//   {
//     title: 'Guacamole',
//     slug: 'guacamole',
//     description: 'The tradional guacamole from Mexico DF.',
//     categories: ['Mexican'],
//     tags: [
//       'fresh',
//       'vegan',
//     ],
//     learningPath: [
//       'mexican-basics',
//     ],
//     courseType: 'starter',
//     pictureIngredients: '15.jpg',
//     picturePlating: '16.jpg',
//     videoThumbnailUrl: 'placeholdersmall.png',
//     videoPreview: 'url4',
//     videoFull: 'video-placeholder-big.png',
//     length: '5',
//     difficulty: 'Easy',
//     servings: '2',
//     chef: {
//       name: 'Carla',
//       thumbnailUrl: '3.jpg',
//       description: 'Wannabe Farmer!',
//     },
//     ingredients: [{
//       name: 'Avocado',
//       quantity: '3',
//       unit: '',
//     }, {
//       name: 'lime',
//       quantity: '1',
//       unit: '',
//     }, {
//       name: 'tomato',
//       quantity: '1',
//       unit: 'normal',
//     }, {
//       name: 'red onion',
//       quantity: '1/2',
//       unit: 'big',
//     }, {
//       name: 'salt',
//       quantity: '2',
//       unit: 'pinches',
//     }, {
//       name: 'pepper',
//       quantity: '2',
//       unit: 'pinch',
//     }, {
//       name: 'coriander (optional)',
//       quantity: '1',
//       unit: 'pinch',
//     }, {
//       name: 'serrano chili (optional)',
//       quantity: '1',
//       unit: 'pinch',
//     }],
//     steps: [{
//       picture: 'step1.png',
//       description: 'Peel and pit the avocados. Extact the juice from line. Finely chop the tomatoe and red onion.',
//     }, {
//       picture: 'step1.png',
//       description: 'In a large bowl, mix and mash avocado, lime juice, tomato and red onion to desired chunkiness.',
//       tip: 'Mexicans avoid mashing completely the avocados.',
//     }, {
//       picture: 'step1.png',
//       description: 'Season with salt and pepper, to taste. Add some chopped coriander and serrano chili, for some heat. Serve immediately in a bowl and garnish with coriander.',
//       tip: 'Be aware that people tend to dislike coriander',
//     }],
//     price: '10',
//     equipments: [{
//       name: 'knife',
//       quantity: '1',
//     }, {
//       name: 'spoon',
//       quantity: '1',
//     }, {
//       name: 'bowl',
//       quantity: '1',
//     }],
//     skillsLearnt: [{
//       name: 'Ealisy peel and pit the avocados.',
//     }],
//     comments: [{
//       text: 'This guaca is GREAT!',
//       userId: 'Berto',
//       created: 1421199929,
//     }],
//     userId: 'seconduserid',
//     created: 1441199199,
//     _id: '56f04089cab8bfde77c236d3',
//   },
//   {
//     title: 'Carne Asada Tacos',
//     slug: 'carne-asada-tacos',
//     description: 'Easy to make tacos with chuck steak.',
//     categories: ['Mexican'],
//     tags: [
//       'grilled',
//       'fastfood',
//     ],
//     learningPath: [
//       'mexican-basics',
//     ],
//     courseType: 'main',
//     pictureIngredients: '20.jpg',
//     picturePlating: '21.jpg',
//     videoThumbnailUrl: 'placeholdersmall.png',
//     videoPreview: 'url4',
//     videoFull: 'video-placeholder-big.png',
//     length: '5',
//     difficulty: 'Easy',
//     servings: '2',
//     chef: {
//       name: 'Isma',
//       thumbnailUrl: '3.jpg',
//       description: 'Wannabe Singer!',
//     },
//     ingredients: [{
//       name: 'Chuck steak',
//       quantity: '250',
//       unit: 'grams',
//     }, {
//       name: 'Olive oil',
//       quantity: '2',
//       unit: 'tbsp',
//     }, {
//       name: 'Worcestershire sauce',
//       quantity: '1',
//       unit: 'tbsp',
//     }, {
//       name: 'Paprika',
//       quantity: '1',
//       unit: 'pinch',
//     }, {
//       name: 'Chimichurri',
//       quantity: '1',
//       unit: 'pinch',
//     }, {
//       name: 'Sesame Oil',
//       quantity: '1/2',
//       unit: 'big',
//     }, {
//       name: 'Red onion',
//       quantity: '1',
//       unit: 'medium',
//     }, {
//       name: 'Tomato',
//       quantity: '1',
//       unit: 'big',
//     }, {
//       name: 'lime',
//       quantity: '1',
//     }, {
//       name: 'chili',
//       quantity: '1',
//       unit: 'medium',
//     }, {
//       name: 'coriander',
//       quantity: '1',
//       unit: 'pinch',
//     },
//     {
//       name: 'salt',
//       quantity: '1',
//       unit: 'pinch',
//     }, {
//       name: 'pepper',
//       quantity: '1',
//       unit: 'pinch',
//     }, {
//       name: 'Corn Tortillas',
//       quantity: '1',
//       unit: 'pack',
//     },
//     ],
//     steps: [{
//       picture: 'step1.png',
//       description: 'Make a marinade by combining olive oil, Worcestershire sauce, paprika, Chimichurri and sesame oil. Mix meat and marinade and let it sit for 15 minutes at room temperature, tossing occasionally.',
//       tip: 'Taste the marinade before mixing to add more of one ingredient to adapt to your needs.',
//     }, {
//       picture: 'step1.png',
//       description: 'Let’s prepare Pico de Gallo! Finely chop the onion and tomato and juice the lime. In a bowl, mix all together and add coriander. Season with salt and pepper to taste.',
//       tip: 'Use pico de gallo to other recipes!!',
//     }, {
//       picture: 'step1.png',
//       description: 'Grill the steak over medium-high heat, until medium-rare. About 2-3 minutes per side. Let it rest for 2 minutes and slice it. To assemble the tacos, warm the tortillas on the grill, divide steak among tortillas, then top with Pico de Gallo and garnish with coriander.',
//     }],
//     price: '10',
//     equipments: [{
//       name: 'knife',
//       quantity: '1',
//     }, {
//       name: 'frying pan',
//       quantity: '1',
//     }, {
//       name: 'bowl',
//       quantity: '1',
//     }],
//     skillsLearnt: [{
//       name: 'Marinade a steak.',
//     }, {
//       name: 'Prepare the classic Pico the Gallo, mexican staple food.',
//     }],
//     _id: '56f045a7cab8bfde77c236d4',
//   },
// ]

// subscriptions
const peterSubscription = { type: 'monthly', endsAt: getFutureDate(10), _id: '56f045d9cab8bfde77c236db' }
export const subscriptions = [peterSubscription]

// users
const peter = { name: 'Peter Joseph', password: 'peter', subscription: peterSubscription._id, recipes: ['56f619ce4c18778232e0855b'], email: 'peterjoseph@gmail.com', _id: '56f5c57e63cb81a7148778a2' }
const jacque = { name: 'Jacque Fresco', password: 'Jacque', recipes: ['56f619ce4c18778232e0855b'], email: 'jacquefresco@gmail.com', _id: '56f5d755340883743e85c7c8' }
const dan = { name: 'Dan Admin', password: 'Dan', isAdmin: true, email: 'danadmin@gmail.com', _id: '56f5f355df1d5a376fc43306' }
export const users = [peter, jacque, dan]

// mongo _ids for adding seeded items
// 56f045e0cab8bfde77c236dc
// 56f12ab7136e866553058e75
// 56f619b14c18778232e0855a
// 56f61fea2bd2403e3e80310a
// 56f60b7ef4994d321855d278
// 56f61b04e78c727334b6cad5
// 56ed4735a452255c7a87d2d4
// 56ed4746586ec03c7ac80eae
// 56ef0af4e43cb8262bd66da8
// 56f03f1b5e191a02760df869
// 56f03f2f5e191a02760df86a
// 56f03f3a5e191a02760df86b
// 56f03fbecab8bfde77c236d1
// 56f03fd5cab8bfde77c236d2
// 56f12a84136e866553058e74
