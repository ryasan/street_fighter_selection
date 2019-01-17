import {
  USA,
  USSR,
  China,
  Japan,
  Brazil,
  Thailand,
  India,
  Spain,
  Balrog,
  Blanka,
  Ryu,
  Ehonda,
  Guile,
  Ken,
  Mbison,
  Sagat,
  Chunli,
  Dhalsim,
  Vega,
  Zangief
} from './images';

const portraitIds = {
  Ryu: Ryu,
  'E.Honda': Ehonda,
  Blanka: Blanka,
  Guile: Guile,
  Balrog: Balrog,
  Vega: Vega,
  Ken: Ken,
  'Chun Li': Chunli,
  Zangief: Zangief,
  Dhalsim: Dhalsim,
  Sagat: Sagat,
  'M.Bison': Mbison
};

const mapIds = {
  25: { name: 'USA', country: USA, fighter: 'Guile' },
  14: { name: 'USA', country: USA, fighter: 'Ken' },
  26: { name: 'USA', country: USA, fighter: 'Balrog' },
  7: { name: 'USSR', country: USSR, fighter: 'Zangief' },
  32: { name: 'CHINA', country: China, fighter: 'Chun Li' },
  21: { name: 'JAPAN', country: Japan, fighter: 'Ryu' },
  33: { name: 'JAPAN', country: Japan, fighter: 'E.Honda' },
  63: { name: 'BRAZIL', country: Brazil, fighter: 'Blanka' },
  56: { name: 'THAILAND', country: Thailand, fighter: 'M.Bison' },
  57: { name: 'THAILAND', country: Thailand, fighter: 'Sagat' },
  43: { name: 'INDIA', country: India, fighter: 'Dhalsim' },
  16: { name: 'SPAIN', country: Spain, fighter: 'Vega' }
};

const MAP_ROWS = 8;
const MAP_COLUMNS = 12;
const FIGHTER_GRID_WIDTH = 720;

export { portraitIds, mapIds, FIGHTER_GRID_WIDTH, MAP_ROWS, MAP_COLUMNS };
