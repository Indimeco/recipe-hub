import { Db } from 'mongodb';

export const createBooks = (db: Db, collectionName: string) => {
  return db.createCollection(collectionName, {
    validationAction: 'error',
    validationLevel: 'strict',
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['name', 'owner', 'recipes', 'favorites', 'views', 'lastModified'],
        properties: {
          name: {
            bsonType: 'string',
            description: 'must be a string and is required',
          },
          owner: {
            bsonType: 'objectId',
            description: 'must be an objectId and is required',
          },
          favorites: {
            bsonType: 'int', // this will probably be an array of user ids when the feature is implemented
            description: 'must be an int and is required',
          },
          views: {
            bsonType: 'int',
            description: 'must be an int and is required',
          },
          lastModified: {
            bsonType: 'date',
            description: 'must be a date and is required',
          },
          recipes: {
            bsonType: 'array',
            additionalItems: false,
            uniqueItems: true,
            description: 'must be an array and is required',
            items: {
              bsonType: 'object',
              description: 'must be an object',
              required: ['_id', 'name'],
              properties: {
                _id: {
                  bsonType: 'objectId',
                  description: 'must be an objectId and is required',
                },
                activeTime: {
                  bsonType: 'int',
                },
                categories: {
                  bsonType: 'array',
                  items: {
                    bsonType: 'string',
                  },
                },
                directions: {
                  bsonType: 'string',
                },
                ingredients: {
                  bsonType: 'array',
                  items: {
                    bsonType: 'object',
                    description: 'must be an object',
                    properties: {
                      name: {
                        bsonType: 'string',
                        description: 'must be a string',
                      },
                      quantity: {
                        bsonType: 'string',
                        description: 'must be a string',
                      },
                      unit: {
                        bsonType: 'string',
                        description: 'must be a string',
                      },
                    },
                  },
                },
                methods: {
                  bsonType: 'array',
                  items: {
                    bsonType: 'string',
                  },
                },
                name: {
                  bsonType: 'string',
                  description: 'must be a string and is required',
                },
                previewImage: {
                  bsonType: 'string',
                },
                recipeSource: {
                  bsonType: 'string',
                },
                waitingTime: {
                  bsonType: 'int',
                },
                lastModified: {
                  bsonType: 'date',
                },
              },
            },
          },
        },
      },
    },
  });
};

export const createUsers = (db: Db, collectionName: string) => {
  return db.createCollection(collectionName, {
    validationAction: 'error',
    validationLevel: 'strict',
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['username', 'books'],
        properties: {
          username: {
            bsonType: 'string',
            description: 'must be a string and is required',
          },
          books: {
            bsonType: 'array',
            items: {
              bsonType: 'objectId',
              description: 'must be an objectId',
            },
            additionalItems: false,
            uniqueItems: true,
            description: 'must be an array and is required',
          },
        },
      },
    },
  });
};
