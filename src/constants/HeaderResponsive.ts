const VariousValues = {
  Tablet: 768,
  SEMIS: 1000,
  S: 1150,
  SEMIM: 1250,
  M: 1350,
};

const HeaderTheme = {
  TabletSemiSmall: `screen and (min-width: ${VariousValues.Tablet}px) and (max-width: ${VariousValues.SEMIS}px)`,
  SemiSmallSmall: `screen and (min-width: ${VariousValues.SEMIS}px) and (max-width: ${VariousValues.S}px)`,
  SmallMedium: `screen and (min-width: ${VariousValues.S}px) and (max-width: ${VariousValues.M}px)`,
};
const HeaderResponse = {
  HeaderTheme,
};

export default HeaderResponse;
