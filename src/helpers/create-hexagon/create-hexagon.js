import compose from '../../lib/compose'
import hexagon from './hexagon'
import group from './group'

const groupHexagon = a => d => compose(group, hexagon(a)(d))

const createHexagon = ({
  appearance = 'framework',
  diameter = 20,
  coordinates = [[0, 0, 0]],
}) => groupHexagon(appearance)(diameter)(coordinates)

export default createHexagon
