import {useState} from 'react'

const fighterGrid = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
]
const xLength = fighterGrid[0].length
const yLength = fighterGrid.length

export function useData() {
  const [position, setPosition] = useState([0, 0])

  function moveRight() {
    const x = (position[1] + 1) % xLength
    const y = position[0]
    setPosition([y, x])
  }

  function moveLeft() {
    const x = (position[1] - 1 + xLength) % xLength
    const y = position[0]
    setPosition([y, x])
  }

  function moveDown() {
    const x = position[1]
    const y = (position[0] + 1) % yLength
    setPosition([y, x])
  }

  function moveUp() {
    const x = position[1]
    const y = (position[0] - 1 + yLength) % yLength
    setPosition([y, x])
  }

  function selectFighter(e) {
		console.log(e)
    switch (e.keyCode) {
      case 39:
        moveRight()
        break
      case 37:
        moveLeft()
        break
      case 40:
        moveDown()
        break
      case 38:
        moveUp()
        break
      default:
    }
  }

  return {
    fighterGrid,
    selectFighter,
    selected: fighterGrid[position[0]][position[1]],
  }
}
