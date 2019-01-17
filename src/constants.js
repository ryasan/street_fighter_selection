import {
  USA,
  USSR,
  China,
  Japan,
  Brazil,
  Thailand,
  India,
  Spain
} from './images';

const portraitIds = {
  Ryu: 'https://i.postimg.cc/J0Z3QYqq/ryu.gif',
  'E.Honda': 'https://i.postimg.cc/qBPjCyLw/ehonda.gif',
  Blanka: 'https://i.postimg.cc/fRKKFFhq/blanka.gif',
  Guile: 'https://i.postimg.cc/wB4kxmMh/guile.gif',
  Balrog: 'https://i.postimg.cc/WpF53XMt/balrog.gif',
  Vega: 'https://i.postimg.cc/RVxL09Sb/vega.gif',
  Ken: 'https://i.postimg.cc/QtRk1ZpC/ken.gif',
  'Chun Li': 'https://i.postimg.cc/MK1t0H3S/chun-li.gif',
  Zangief: 'https://i.postimg.cc/fW9vZkN9/zangief.gif',
  Dhalsim: 'https://i.postimg.cc/wjH2wzns/dhalsim.gif',
  Sagat: 'https://i.postimg.cc/tT1Ns4n8/sagat.gif',
  'M.Bison': 'https://i.postimg.cc/rpwJLJVV/mbison.gif'
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

export { portraitIds, mapIds, MAP_ROWS, MAP_COLUMNS };
