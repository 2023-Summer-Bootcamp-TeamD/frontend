import HeaderResponse from './HeaderResponsive';

const VariousValues = {
  Tablet: 768,
  SEMIS: 1000,
  S: 1150,
  SEMIM: 1250,
  M: 1350,
  L: 1400,
  XL: 1550,
};

const MainPageTheme = {
  TabletSemiSmall: `screen and (min-width: ${VariousValues.Tablet}px) and (max-width: ${VariousValues.SEMIS}px)`,
  SemiSmallSmall: `screen and (min-width: ${VariousValues.SEMIS}px) and (max-width: ${VariousValues.S}px)`,
  SemiSmallSemiMedium: `screen and (min-width: ${VariousValues.SEMIS}px) and (max-width: ${VariousValues.SEMIM}px)`,
  SemiMediumLarge: `screen and (min-width: ${VariousValues.SEMIM}px) and (max-width: ${VariousValues.L}px)`,
  LargeXLarge: `screen and (min-width: ${VariousValues.L}px) and (max-width: ${VariousValues.XL}px)`,
};

const Theme = {
  HeaderResponse,
  MainPageTheme,
};
export default Theme;
