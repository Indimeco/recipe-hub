export const palette = {
  darkCerulean: '#003B7A',
  absoluteZero: '#0056B3',
  periwinkle: '#CAE5FF',
  raisinBlack: '#262626',
  gunMetal: '#30343F',
  ghostWhite: '#FAFAFF'
};

export const theme = {
  colors: {
    root: {
      fg: palette.raisinBlack,
      bg: palette.ghostWhite,
      fgAccent: palette.absoluteZero,
      bgAccent: palette.periwinkle
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
        padding-right: 25px;`,
    small: '10px',
    medium: '20px',
    large: '30px'
  },
  fonts: {
    small: '14px',
    medium: '16px',
    large: '18px',
    fontFamily:
      "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande','Lucida Sans Unicode', Geneva, Verdana, sans-serif"
  }
};

export default theme;
