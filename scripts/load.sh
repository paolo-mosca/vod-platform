mongoimport --db vod-development --collection categories --file ./scripts/db-data/categories.json --jsonArray
mongoimport --db vod-development --collection equipment --file ./scripts/db-data/equipment.json --jsonArray
mongoimport --db vod-development --collection ingredients --file ./scripts/db-data/ingredients.json --jsonArray
mongoimport --db vod-development --collection learningpaths --file ./scripts/db-data/learningpaths.json --jsonArray
mongoimport --db vod-development --collection chefs --file ./scripts/db-data/chefs.json --jsonArray
mongoimport --db vod-development --collection tags --file ./scripts/db-data/tags.json --jsonArray
