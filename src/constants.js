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
	Zangief,
} from './images';

const portraitIds = {
	'Ryu': Ryu,
	'E.Honda': Ehonda,
	'Blanka': Blanka,
	'Guile': Guile,
	'Balrog': Balrog,
	'Vega': Vega,
	'Ken': Ken,
	'Chun Li': Chunli,
	'Zangief': Zangief,
	'Dhalsim': Dhalsim,
	'Sagat': Sagat,
	'M.Bison': Mbison,
};

const countries = [
	{
		name: 'USSR',
		flag: USSR,
		fighter: 'Zangief',
		coordinates: [0, 7],
	},
	{
		name: 'USA',
		flag: USA,
		fighter: 'Ken',
		coordinates: [1, 2],
	},
	{
		name: 'SPAIN',
		flag: Spain,
		fighter: 'Vega',
		coordinates: [1, 4],
	},
	{
		name: 'JAPAN',
		flag: Japan,
		fighter: 'Ryu',
		coordinates: [1, 9],
	},
	{
		name: 'USA',
		flag: USA,
		fighter: 'Guile',
		coordinates: [2, 1],
	},
	{
		name: 'USA',
		flag: USA,
		fighter: 'Balrog',
		coordinates: [2, 2],
	},
	{
		name: 'CHINA',
		flag: China,
		fighter: 'Chun Li',
		coordinates: [2, 8],
	},
	{
		name: 'JAPAN',
		flag: Japan,
		fighter: 'E.Honda',
		coordinates: [2, 9],
	},
	{
		name: 'INDIA',
		flag: India,
		fighter: 'Dhalsim',
		coordinates: [3, 7],
	},
	{
		name: 'THAILAND',
		flag: Thailand,
		fighter: 'M.Bison',
		coordinates: [4, 8],
	},
	{
		name: 'THAILAND',
		flag: Thailand,
		fighter: 'Sagat',
		coordinates: [4, 9],
	},
	{
		name: 'BRAZIL',
		flag: Brazil,
		fighter: 'Blanka',
		coordinates: [5, 3],
	},
];

const MAP_ROWS = 8;
const MAP_COLUMNS = 12;
const FIGHTER_GRID_WIDTH = 720;
const GITHUB_REPO_URL = 'https://github.com/ryasan86/street_fighter_selection';

export {portraitIds, countries, FIGHTER_GRID_WIDTH, MAP_ROWS, MAP_COLUMNS, GITHUB_REPO_URL};
