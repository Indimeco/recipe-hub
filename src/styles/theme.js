const palette = {
  darkCerulean: '#003B7A',
  absoluteZero: '#0056B3',
  periwinkle: '#CAE5FF',
  raisinBlack: '#262626',
  gunMetal: '#30343F',
  ghostWhite: '#FAFAFF'
};

export default {
  recipeHub: {
    colors: {
      base: {
        fg: palette.raisinBlack,
        bg: palette.ghostWhite
      },
      main: {
        fg: palette.ghostWhite,
        bg: palette.darkCerulean,
        fgAccent: palette.periwinkle,
        bgAccent: palette.absoluteZero
      },
      aux: {
        fg: palette.ghostWhite,
        bg: palette.gunMetal,
        fgAccent: palette.periwinkle,
        bgAccent: palette.raisinBlack
      }
    },
    spacing: {
      indent: `padding-left: 25px;
        padding-right: 25px;`
    }
  }
};
