import compose from '../../../lib/compose'
import createHexagon from '../../../helpers/create-hexagon'
import diameter from '../../../helpers/diameter'

const plot = tiles =>
  document.querySelector('.js-viewport').innerHTML += `${tiles}`

const grid = coordinates => createHexagon({ diameter, coordinates })

const plotGrid = compose(plot, grid)

export default plotGrid
