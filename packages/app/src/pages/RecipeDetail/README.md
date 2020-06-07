## RecipeDetail

The parent state is initialized from the graphql dataset
Individual controls dispatch updates to the parent state when edit mode changes

The parent component is reponsible for
* telling individual controls what to render (internal state of individual controls is never used for rendering)
* communicating with the graphql layer to update and receive updates
* controlling edit mode

Each control component has internal state which is responsible for 
* what gets updated in the parent state
* how data is transformed between edit modes