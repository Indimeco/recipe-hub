import React, { useState, useEffect } from 'react';

import Textarea from '../../../components/Textarea/Textarea';
import Heading from '../../../components/Heading/Heading';
import { Text } from '../../../components';
import { Recipe } from '../../../../../../types';
import { RecipeDetailControl } from '../types';

interface RecipeDirectionsProps extends RecipeDetailControl {
  directions: Recipe['directions'];
}
export const RecipeDirections: React.FunctionComponent<RecipeDirectionsProps> = ({
  directions,
  isEditMode,
  dispatch,
}) => {
  const [inputDirections, setInputDirections] = useState(directions || '');

  useEffect(() => {
    if (isEditMode === false) {
      setInputDirections(directions || '');
    }
  }, [directions, isEditMode]);

  useEffect(() => {
    if (isEditMode === true) {
      dispatch({
        type: 'update',
        value: {
          directions: inputDirections || '',
        },
      });
    }
  }, [isEditMode, inputDirections, dispatch]);

  return (
    <div>
      {isEditMode ? (
        <Heading el="label" level="h3" htmlFor="RecipeDirections__textarea">
          Directions
          <Textarea
            id="RecipeDirections__textarea"
            value={inputDirections}
            onChange={(e) => setInputDirections(e.target.value)}
          />
        </Heading>
      ) : (
        <>
          <Heading el="h3">Directions</Heading>

          {directions ? (
            // eslint-disable-next-line
            directions.split('\n').map((x, index) => <Text el="p" key={`directions-${index}`} space>{x}</Text>)
          ) : (
            <Text space>No directions needed? No problem!</Text>
          )}
        </>
      )}
    </div>
  );
};

export default RecipeDirections;
