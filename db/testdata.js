const book1 = {
  _id: '1',
  meta: {
    name: "Jake's Recipes",
    views: 100,
    favorites: 100
  },
  recipes: [
    {
      name: 'Chili Con Carne',
      ingredients: {
        'yellow onion': { quantity: 2, unit: '' },
        'red capsicum': { quantity: 1, unit: '' },
        'garlic cloves': { quantity: 6, unit: '' },
        'chili powder': { quantity: 0.25, unit: 'cup' },
        'ground cumin': { quantity: 1, unit: 'tbsp' },
        'ground beef': { quantity: 1, unit: 'kg' },
        'diced tomato': { quantity: 800, unit: 'g' },
        'tomato sauce': { quantity: 400, unit: 'g' },
        'kidney beans': { quantity: 850, unit: 'g' },
        'shredded cheddar': { quantity: 0, unit: '' },
        'sour cream': { quantity: 250, unit: 'g' },
        tortilla: { quantity: 8, unit: '' },
        'tortilla chips': { quantity: 500, unit: 'g' }
      },
      directions: `1) Heat the oil in a large frying pan over medium heat until shimmering. Add the onions and bell pepper, season with salt, and cook, stirring occasionally, until softened, about 8 minutes.
        2)Add the garlic, chili powder, and cumin, stir to coat the vegetables, and cook until fragrant, about 1 minute. Add the ground beef and measured salt and cook, breaking the meat into small pieces with a wooden spoon, until the beef is no longer pink, about 7 minutes.
        3)Transfer the mixture to the slow cooker, add the diced tomatoes and their juices, tomato sauce, and beans, and stir to combine. Cover and cook until the chili thickens and the flavors meld, about 8 hours on low or 6 hours on high.
        4)Stir in the jalapeños or green chiles. Taste and season with salt as needed, and serve with the cheese, scallions, and sour cream.`,
      'ready time': 360,
      'active time': 45,
      'preview image':
        'https://c-7npsfqifvt34x24tfbsdix2edipx78x2edpn.g00.chowhound.com/g00/3_c-7x78x78x78.dipx78ipvoe.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2ftfbsdi.dipx78.dpnx2fuivncobjmx2f2391x2f1x2fx78x78x78.dipx78tubujd.dpnx2fbttfutx2f3125x2f10x2f41770_tqjdz_tmpx78_dpplfs_cffg_dijmj_4111y3111.kqhx3fj21d.nbslx3djnbhf_$/$/$/$/$/$/$/$/$',
      'recipe source':
        'https://www.chowhound.com/recipes/spicy-slow-cooker-beef-chili-30669',
      method: 'Slow Cooked',
      categories: ['Meal']
    },
    {
      name: 'Mac & Cheese',
      ingredients: {
        'yellow onion': { quantity: 2, unit: '' },
        'red capsicum': { quantity: 1, unit: '' },
        'garlic cloves': { quantity: 6, unit: '' },
        'chili powder': { quantity: 0.25, unit: 'cup' },
        'ground cumin': { quantity: 1, unit: 'tbsp' },
        'ground beef': { quantity: 1, unit: 'kg' },
        'diced tomato': { quantity: 800, unit: 'g' },
        'tomato sauce': { quantity: 400, unit: 'g' },
        'kidney beans': { quantity: 850, unit: 'g' },
        'shredded cheddar': { quantity: 0, unit: '' },
        'sour cream': { quantity: 250, unit: 'g' },
        tortilla: { quantity: 8, unit: '' },
        'tortilla chips': { quantity: 500, unit: 'g' }
      },
      'ready time': 360,
      'active time': 45,
      'preview image':
        'https://images.media-allrecipes.com/userphotos/560x315/5193809.jpg',
      'recipe source':
        'https://www.allrecipes.com/recipe/11679/homemade-mac-and-cheese/?internalSource=hub%20recipe&referringId=509&referringContentType=recipe%20hub',
      method: 'Baked',
      categories: ['Meal']
    },
    {
      name: 'Fluffiest Pancakes',
      ingredients: {
        'yellow onion': { quantity: 2, unit: '' },
        'red capsicum': { quantity: 1, unit: '' },
        'garlic cloves': { quantity: 6, unit: '' },
        'chili powder': { quantity: 0.25, unit: 'cup' },
        'ground cumin': { quantity: 1, unit: 'tbsp' },
        'ground beef': { quantity: 1, unit: 'kg' },
        'diced tomato': { quantity: 800, unit: 'g' },
        'tomato sauce': { quantity: 400, unit: 'g' },
        'kidney beans': { quantity: 850, unit: 'g' },
        'shredded cheddar': { quantity: 0, unit: '' },
        'sour cream': { quantity: 250, unit: 'g' },
        tortilla: { quantity: 8, unit: '' },
        'tortilla chips': { quantity: 500, unit: 'g' }
      },
      'ready time': 360,
      'active time': 45,
      'preview image':
        'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/167797.jpg',
      'recipe source': 'https://tasty.co/recipe/tasty-101-buttermilk-pancakes',
      method: 'Slow Cooked',
      categories: ['Meal']
    },
    {
      name: 'Test 1 with a really long that might break layout',
      ingredients: {
        'yellow onion': { quantity: 2, unit: '' },
        'red capsicum': { quantity: 1, unit: '' },
        'garlic cloves': { quantity: 6, unit: '' },
        'chili powder': { quantity: 0.25, unit: 'cup' },
        'ground cumin': { quantity: 1, unit: 'tbsp' },
        'ground beef': { quantity: 1, unit: 'kg' },
        'diced tomato': { quantity: 800, unit: 'g' },
        'tomato sauce': { quantity: 400, unit: 'g' },
        'kidney beans': { quantity: 850, unit: 'g' },
        'shredded cheddar': { quantity: 0, unit: '' },
        'sour cream': { quantity: 250, unit: 'g' },
        tortilla: { quantity: 8, unit: '' },
        'tortilla chips': { quantity: 500, unit: 'g' }
      },
      'ready time': 360,
      'active time': 45,
      'preview image':
        'https://c-7npsfqifvt34x24tfbsdix2edipx78x2edpn.g00.chowhound.com/g00/3_c-7x78x78x78.dipx78ipvoe.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2ftfbsdi.dipx78.dpnx2fuivncobjmx2f2391x2f1x2fx78x78x78.dipx78tubujd.dpnx2fbttfutx2f3125x2f10x2f41770_tqjdz_tmpx78_dpplfs_cffg_dijmj_4111y3111.kqhx3fj21d.nbslx3djnbhf_$/$/$/$/$/$/$/$/$',
      'recipe source':
        'https://www.chowhound.com/recipes/spicy-slow-cooker-beef-chili-30669',
      method: 'Slow Cooked',
      categories: ['Meal']
    },
    {
      name: 'Chili Con Carne',
      ingredients: {
        'yellow onion': { quantity: 2, unit: '' },
        'red capsicum': { quantity: 1, unit: '' },
        'garlic cloves': { quantity: 6, unit: '' },
        'chili powder': { quantity: 0.25, unit: 'cup' },
        'ground cumin': { quantity: 1, unit: 'tbsp' },
        'ground beef': { quantity: 1, unit: 'kg' },
        'diced tomato': { quantity: 800, unit: 'g' },
        'tomato sauce': { quantity: 400, unit: 'g' },
        'kidney beans': { quantity: 850, unit: 'g' },
        'shredded cheddar': { quantity: 0, unit: '' },
        'sour cream': { quantity: 250, unit: 'g' },
        tortilla: { quantity: 8, unit: '' },
        'tortilla chips': { quantity: 500, unit: 'g' }
      },
      'ready time': 360,
      'active time': 45,
      'preview image':
        'https://c-7npsfqifvt34x24tfbsdix2edipx78x2edpn.g00.chowhound.com/g00/3_c-7x78x78x78.dipx78ipvoe.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2ftfbsdi.dipx78.dpnx2fuivncobjmx2f2391x2f1x2fx78x78x78.dipx78tubujd.dpnx2fbttfutx2f3125x2f10x2f41770_tqjdz_tmpx78_dpplfs_cffg_dijmj_4111y3111.kqhx3fj21d.nbslx3djnbhf_$/$/$/$/$/$/$/$/$',
      'recipe source':
        'https://www.chowhound.com/recipes/spicy-slow-cooker-beef-chili-30669',
      method: 'Slow Cooked',
      categories: ['Meal']
    },
    {
      name: 'Chili Con Carne',
      ingredients: {
        'yellow onion': { quantity: 2, unit: '' },
        'red capsicum': { quantity: 1, unit: '' },
        'garlic cloves': { quantity: 6, unit: '' },
        'chili powder': { quantity: 0.25, unit: 'cup' },
        'ground cumin': { quantity: 1, unit: 'tbsp' },
        'ground beef': { quantity: 1, unit: 'kg' },
        'diced tomato': { quantity: 800, unit: 'g' },
        'tomato sauce': { quantity: 400, unit: 'g' },
        'kidney beans': { quantity: 850, unit: 'g' },
        'shredded cheddar': { quantity: 0, unit: '' },
        'sour cream': { quantity: 250, unit: 'g' },
        tortilla: { quantity: 8, unit: '' },
        'tortilla chips': { quantity: 500, unit: 'g' }
      },
      'ready time': 360,
      'active time': 45,
      'preview image':
        'https://c-7npsfqifvt34x24tfbsdix2edipx78x2edpn.g00.chowhound.com/g00/3_c-7x78x78x78.dipx78ipvoe.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2ftfbsdi.dipx78.dpnx2fuivncobjmx2f2391x2f1x2fx78x78x78.dipx78tubujd.dpnx2fbttfutx2f3125x2f10x2f41770_tqjdz_tmpx78_dpplfs_cffg_dijmj_4111y3111.kqhx3fj21d.nbslx3djnbhf_$/$/$/$/$/$/$/$/$',
      'recipe source':
        'https://www.chowhound.com/recipes/spicy-slow-cooker-beef-chili-30669',
      method: 'Slow Cooked',
      categories: ['Meal']
    },
    {
      name: 'Chili Con Carne',
      ingredients: {
        'yellow onion': { quantity: 2, unit: '' },
        'red capsicum': { quantity: 1, unit: '' },
        'garlic cloves': { quantity: 6, unit: '' },
        'chili powder': { quantity: 0.25, unit: 'cup' },
        'ground cumin': { quantity: 1, unit: 'tbsp' },
        'ground beef': { quantity: 1, unit: 'kg' },
        'diced tomato': { quantity: 800, unit: 'g' },
        'tomato sauce': { quantity: 400, unit: 'g' },
        'kidney beans': { quantity: 850, unit: 'g' },
        'shredded cheddar': { quantity: 0, unit: '' },
        'sour cream': { quantity: 250, unit: 'g' },
        tortilla: { quantity: 8, unit: '' },
        'tortilla chips': { quantity: 500, unit: 'g' }
      },
      'ready time': 360,
      'active time': 45,
      'preview image':
        'https://c-7npsfqifvt34x24tfbsdix2edipx78x2edpn.g00.chowhound.com/g00/3_c-7x78x78x78.dipx78ipvoe.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2ftfbsdi.dipx78.dpnx2fuivncobjmx2f2391x2f1x2fx78x78x78.dipx78tubujd.dpnx2fbttfutx2f3125x2f10x2f41770_tqjdz_tmpx78_dpplfs_cffg_dijmj_4111y3111.kqhx3fj21d.nbslx3djnbhf_$/$/$/$/$/$/$/$/$',
      'recipe source':
        'https://www.chowhound.com/recipes/spicy-slow-cooker-beef-chili-30669',
      method: 'Slow Cooked',
      categories: ['Meal']
    }
  ]
};

module.exports = book1;
