import compose from '../../lib/compose'
import convertPoints from './convert-points'
import definePolygon from './define-polygon'
import listPoints from './list-points'

const createHexagon = d => compose(definePolygon, convertPoints(d), listPoints)

const hexagon = ({ diameter = 30, coordinates = [[0,0,0]] } = {}) =>
  coordinates.map(createHexagon(diameter))
             .join('')

export default hexagon
