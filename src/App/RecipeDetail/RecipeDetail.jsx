import React from "react";
import styled from "styled-components";
import withColor from "../../hocs/withColor";
import componentStyle from "./RecipeDetail.style.js";
import Heading from "../../components/Heading/Heading";
import Image from "../../components/Image/Image";

class RecipeDetail extends React.Component {
  render() {
    const { className, ...restProps } = this.props;
    console.log(restProps);
    return (
      <div className={className}>
        <Heading el="h2">Recipe Name</Heading>
        <Image />
      </div>
    );
  }
}

export default withColor(
  styled(RecipeDetail)`
    ${componentStyle}
  `
);
