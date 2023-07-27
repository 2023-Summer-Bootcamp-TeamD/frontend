import HeaderResponse from './HeaderResponsive';
// 모듈화할 필요없는 사이즈
// 850~940  850~1000 940~1060 1060~1250

// 768~850  768~900  768~1000
// 900~1000
// 1000~1200
// 1000~1250 /////
// 1200~1350 //
const VariousValues = {
  Tablet: 768,
  Tiny: 850,
  SEMIS: 900,
  S: 1000,
  SEMIM: 1200,
  M: 1250,
  L: 1350,
};

const CreatingRoomTheme = {
  TabletTiny: `screen and (min-width: ${VariousValues.Tablet}px) and (max-width: ${VariousValues.Tiny}px)`,
  TabletSEMIS: `screen and (min-width: ${VariousValues.Tablet}px) and (max-width: ${VariousValues.SEMIS}px)`,
  TabletS: `screen and (min-width: ${VariousValues.Tablet}px) and (max-width: ${VariousValues.S}px)`,
  TinyS: `screen and (min-width: ${VariousValues.Tiny}px) and (max-width: ${VariousValues.S}px)`,
  SEMISS: `screen and (min-width: ${VariousValues.SEMIS}px) and (max-width: ${VariousValues.S}px)`,
  SSEMIM: `screen and (min-width: ${VariousValues.S}px) and (max-width: ${VariousValues.SEMIM}px)`,
  SM: `screen and (min-width: ${VariousValues.S}px) and (max-width: ${VariousValues.M}px)`,
  SEMIML: `screen and (min-width: ${VariousValues.SEMIM}px) and (max-width: ${VariousValues.L}px)`,
};

const CreatingResponse = {
  CreatingRoomTheme,
  HeaderResponse,
};
export default CreatingResponse;
