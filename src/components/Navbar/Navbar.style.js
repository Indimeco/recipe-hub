import { css } from 'styled-components';

const spacings = {
  bannerHeight: 60,
  bannerPaddingTop: 15,
  bannerPaddingBottom: 5,
  navHeight: 25,
  navPaddingTop: 5,
  navPaddingBottom: 5
};

const totalSpace = Object.entries(spacings).reduce((total, pair) => {
  const [key, value] = pair;
  return total + value;
}, 0);

export default ({ subTheme, ...props }) => {
  subTheme = props.theme.colors[subTheme] || props.theme.colors.root;

  return css`
  .nav {
    position: fixed;
    width: 100%;
    top: 0;

    .links {
      height: ${spacings.navHeight}px;
      background-color: ${subTheme.bg};

      ${props.theme.spacing.indent}
      padding-top: ${spacings.navPaddingTop}px;
      padding-bottom: ${spacings.navPaddingBottom}px;

      a {
        color: ${subTheme.fg};
        &:hover {
          color: ${subTheme.fgAccent};
        }
      }
    }

    .banner {
      height: ${spacings.bannerHeight}px;
      padding-top: ${spacings.bannerPaddingTop}px;
      padding-bottom: ${spacings.bannerPaddingBottom}px;
      padding-right: 25px;
      padding-left: 25px;
    }
  }

  .navbar-spacing {
    display: block;
    margin-top: ${totalSpace}px;
  }
`;
};
