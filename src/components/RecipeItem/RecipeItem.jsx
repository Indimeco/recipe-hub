import React from 'react';
import styled from 'styled-components';
import componentStyle from './RecipeItem.style';
import Heading from '../Heading/Heading';
import Image from '../Image/Image';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import withColor from '../../hocs/withColor';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPen,
	faHeart,
	faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

class RecipeItem extends React.Component {
	render() {
		const {
			className,
			color,
			key,
			link,
			name,
			preview,
			...restProps
		} = this.props;
		return (
			<div className={className} key={key} {...restProps}>
				<div className="recipe-card">
					<Link to={link}>
						<Heading el="h3">{name}</Heading>
					</Link>
					<Link to={link}>
						<Image src={preview} alt="" />
					</Link>
					<div className={`${className} recipe-item-controls`}>
						<Button color={color}>
							<Link to="/new">
								<FontAwesomeIcon icon={faPen} />
							</Link>
						</Button>

						<Button color={color}>
							<FontAwesomeIcon icon={faHeart} />
						</Button>

						<Button color={color}>
							<FontAwesomeIcon icon={faExternalLinkAlt} />
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default withColor(
	styled(RecipeItem)`
    ${componentStyle}
  `
);
