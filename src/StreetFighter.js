class StreetFighter {
  constructor () {
    this.position = [0, 0]
    this.fighterNames = [
      ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
      ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
    ]
  }

  selectFighter = keyCode => {
    const position = this.position
    const xLength = this.fighterNames[0].length
    const yLength = this.fighterNames.length
    switch (keyCode) {
      case 39: // right
        const right = position[1] + 1
        position[1] = right % xLength
        break
      case 37: // left
        const left = position[1] - 1
        position[1] = (left + xLength) % xLength
        break
      case 40: // down
        const down = position[0] + 1
        position[0] = down % yLength
        break
      case 38: // up
        const up = position[0] - 1
        position[0] = (up + xLength) % yLength
        break
      default:
    }
    return this.fighterNames[position[0]][position[1]]
  }
}

export default StreetFighter
