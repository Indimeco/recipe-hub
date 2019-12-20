import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import ToggleEdit from '../../ToggleEdit/ToggleEdit';
import Input from '../../Input/Input';

const container = props => css`
  padding: ${props.theme.spacing.small};
`;

const DirectionsBox = styled.div`
  ${container}
`;

export class RecipeDirections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      directions: props.directions,
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target });
  }

  render() {
    const { ...restProps } = this.props;
    return (
      <DirectionsBox {...restProps}>
        <ToggleEdit edit={this.state.edit} onClick={() => this.setState({ edit: !this.state.edit })} />
        {this.state.edit ? (
          <>
            <Input
              name="directions"
              el="textarea"
              value={this.state.directions}
              onChange={this.handleChange.bind(this)}
            />
          </>
        ) : (
            <>
              {this.state.directions ? (
                this.state.directions.split('\n').map((x, y) => <p key={`directions${y}`}>{x}</p>)
              ) : (
                  <p>No directions needed? No problem!</p>
                )}
            </>
          )}
      </DirectionsBox>
    );
  }
}

RecipeDirections.propTypes = {
  directions: PropTypes.string,
};

export default RecipeDirections;
