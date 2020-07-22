import { ObjectId } from 'mongodb';

import { BookDocument } from '../types';

export const SampleBook: BookDocument = {
  _id: new ObjectId('507f191e810c19729de860ea'),
  name: "Baby Bear's Jam Encylopedia",
  owner: new ObjectId('746573747573657269644030'),
  favorites: 99999,
  views: 74982579,
  lastModified: new Date('01/01/1970'),
  recipes: [
    {
      _id: new ObjectId(),
      activeTime: 45,
      categories: ['Meal'],
      directions: `1) Heat the oil in a large frying pan over medium heat until shimmering. Add the onions and bell pepper, season with salt, and cook, stirring occasionally, until softened, about 8 minutes.
        2)Add the garlic, chili powder, and cumin, stir to coat the vegetables, and cook until fragrant, about 1 minute. Add the ground beef and measured salt and cook, breaking the meat into small pieces with a wooden spoon, until the beef is no longer pink, about 7 minutes.
        3)Transfer the mixture to the slow cooker, add the diced tomatoes and their juices, tomato sauce, and beans, and stir to combine. Cover and cook until the chili thickens and the flavors meld, about 8 hours on low or 6 hours on high.
        4)Stir in the jalapeños or green chiles. Taste and season with salt as needed, and serve with the cheese, scallions, and sour cream.`,
      ingredients: [
        { name: 'yellow onion', quantity: '2', unit: '' },
        { name: 'red capsicum', quantity: '1', unit: '' },
        { name: 'garlic cloves', quantity: '6', unit: '' },
        { name: 'chili powder', quantity: '0.25', unit: 'cup' },
        { name: 'ground cumin', quantity: '1', unit: 'tbsp' },
        { name: 'ground beef', quantity: '1', unit: 'kg' },
        { name: 'diced tomato', quantity: '800', unit: 'g' },
        { name: 'tomato sauce', quantity: '400', unit: 'g' },
        { name: 'kidney beans', quantity: '850', unit: 'g' },
        { name: 'shredded cheddar', quantity: '0', unit: '' },
        { name: 'sour cream', quantity: '250', unit: 'g' },
        { name: 'tortilla', quantity: '8', unit: '' },
        { name: 'tortilla chips', quantity: '500', unit: 'g' },
      ],
      methods: ['Slow Cooked'],
      name: 'Chili Con Carne',
      previewImage:
        'https://chowhound1.cbsistatic.com/thumbnail/640/0/chowhound1.cbsistatic.com/assets/2014/09/30669_spicy_slow_cooker_beef_chili_3000x2000.jpg',
      recipeSource: 'https://www.chowhound.com/recipes/spicy-slow-cooker-beef-chili-30669',
      waitingTime: 360,
      lastModified: new Date('07/08/2018'),
    },
    {
      _id: new ObjectId(),
      name: 'Beef Stroganoff',
      previewImage: 'https://1.bp.blogspot.com/-8LfGxvbiDiM/TZ DTetHlP9I/AAAAAAAAJ60/8OqJTXJZk1s/IMG_6085.jpg',
      activeTime: 80,
      waitingTime: 60,
      ingredients: [
        { name: 'Chuck Roast', quantity: '1', unit: 'kg' },
        { name: 'Sliced mushrooms', quantity: '220', unit: 'g' },
        { name: 'Creme Fraiche', quantity: '185', unit: 'ml' },
        { name: 'Peas', quantity: '1', unit: 'handful' },
        { name: 'Yellow onion', quantity: '1/2', unit: '' },
        { name: 'Beef stock', quantity: '500', unit: 'ml' },
        { name: 'White wine', quantity: '1/2', unit: ' cup' },
        { name: 'Plain flour', quantity: '1 1/2', unit: 'tbsp' },
        { name: 'Minced garlic', quantity: '2', unit: 'cloves' },
        { name: 'Salt and pepper', quantity: '', unit: '' },
        { name: 'Fresh chives', quantity: '1', unit: 'bunch' },
        { name: 'Egg noodles', quantity: '500', unit: 'g' },
        { name: 'Butter', quantity: '1', unit: 'tbsp' },
        { name: 'Parsley', quantity: '1', unit: 'tbsp' },
        { name: 'Parmesan', quantity: '5', unit: 'tbsp' },
        { name: 'Olive oil', quantity: '', unit: '' },
        { name: 'Butter', quantity: '2', unit: 'tbsp' },
      ],
      directions:
        '1. Slice chuck roast into bite sized strips. Season generously with salt and pepper.\n2. Heat olive oil in a large skillet over high heat until shimmering. Stir in beef; cook, stirring c onstantly, for 6-7 minutes, until liquid evaporates and meat browns. Remove meat from the pan and set aside.\n3. Stir 1 tbsp butter, mushrooms and onions into the pan; cook and stir over medium heat until the vegetables are lightly browned. Add gar lic and stir for 30 seconds. Stir in flour; cook for 1-2 minutes until incorporated.\n4. Stir in wine and 1 cup of stock, sc raping the bottom of the pan to release any browned bits. Bring to a simmer, cook for 3-4 minutes, until the sauce thickens. \n5. Return beef to the pan. Stir in remaining cup of stock; bring to a simmer and cook on low heat for about 1 hour with th e lid on, until the beef is tender and the sauce is thick. Stir every 20 minutes.\n6. Boil large pot of water and add salt. Cook egg noodles until al dente, strain and put back into pot. Add 2 tbsp butter, parsley and parmesan. Toss until evenly co ated.\n7. Stir in creme fraiche to the beef. Stir in peas and chives. Season with salt and pepper to taste.',
      lastModified: new Date('07/08/2018'),
    },
    {
      _id: new ObjectId(),
      name: 'Chorizo Egg Skillet',
      previewImage:
        'https://prods3.imgix.net/images/articles/2017_04/Non-featured-Chorizo-egg-recipe.jpg?auto=format%2Ccompress&dpr=1.5&ixjsv=2.2.3&q=66&w=750',
      activeTime: 30,
      waitingTime: 20,
      ingredients: [
        { name: 'Chuck Roast', quantity: '1', unit: 'kg' },
        { name: 'Sliced mushrooms', quantity: '220', unit: 'g' },
        { name: 'Creme Fraiche', quantity: '185', unit: 'ml' },
        { name: 'Peas', quantity: '1', unit: 'handful' },
        { name: 'Yellow onion', quantity: '1/2', unit: '' },
        { name: 'Beef stock', quantity: '500', unit: 'ml' },
        { name: 'White wine', quantity: '1/2', unit: ' cup' },
        { name: 'Plain flour', quantity: '1 1/2', unit: 'tbsp' },
        { name: 'Minced garlic', quantity: '2', unit: 'cloves' },
        { name: 'Salt and pepper', quantity: '', unit: '' },
        { name: 'Fresh chives', quantity: '1', unit: 'bunch' },
        { name: 'Egg noodles', quantity: '500', unit: 'g' },
        { name: 'Butter', quantity: '1', unit: 'tbsp' },
        { name: 'Parsley', quantity: '1', unit: 'tbsp' },
        { name: 'Parmesan', quantity: '5', unit: 'tbsp' },
        { name: 'Olive oil', quantity: '', unit: '' },
        { name: 'Butter', quantity: '2', unit: 'tbsp' },
      ],
      directions:
        '1. Slice chuck roast into bite sized strips. Season generously with salt and pepper.\n2. Heat olive oil in a large skillet over high heat until shimmering. Stir in beef; cook, stirring c onstantly, for 6-7 minutes, until liquid evaporates and meat browns. Remove meat from the pan and set aside.\n3. Stir 1 tbsp butter, mushrooms and onions into the pan; cook and stir over medium heat until the vegetables are lightly browned. Add gar lic and stir for 30 seconds. Stir in flour; cook for 1-2 minutes until incorporated.\n4. Stir in wine and 1 cup of stock, sc raping the bottom of the pan to release any browned bits. Bring to a simmer, cook for 3-4 minutes, until the sauce thickens. \n5. Return beef to the pan. Stir in remaining cup of stock; bring to a simmer and cook on low heat for about 1 hour with th e lid on, until the beef is tender and the sauce is thick. Stir every 20 minutes.\n6. Boil large pot of water and add salt. Cook egg noodles until al dente, strain and put back into pot. Add 2 tbsp butter, parsley and parmesan. Toss until evenly co ated.\n7. Stir in creme fraiche to the beef. Stir in peas and chives. Season with salt and pepper to taste.',
      lastModified: new Date('07/08/2018'),
    },
  ],
};
