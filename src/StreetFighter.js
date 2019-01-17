import { fighterNames } from './constants';

class StreetFighter {
  constructor() {
    this.keys = {
      38: 'up',
      40: 'down',
      37: 'left',
      39: 'right'
    };
    this.position = [0, 0];
    this.fighterNames = [
      ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
      ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
    ];
  }

  selectFighter = move => {
    const position = this.position;
    if (this.keys[move]) {
      if (this.keys[move] === 'right') {
        const right = position[1] + 1;
        position[1] = right > this.fighterNames[0].length - 1 ? 0 : right;
      } else if (this.keys[move] === 'left') {
        const left = position[1] - 1;
        position[1] = left < 0 ? this.fighterNames[0].length - 1 : left;
      } else if (this.keys[move] === 'up') {
        const up = position[0] - 1;
        position[0] = Math.max(up, 0);
      } else if (this.keys[move] === 'down') {
        const down = position[0] + 1;
        position[0] = Math.min(down, this.fighterNames.length - 1);
      }
    }
    return this.fighterNames[position[0]][position[1]];
  };
}

export default StreetFighter;
