import pipe from '../../../lib/pipe'
import convertPoints from './convert-points'
import definePolygon from './define-polygon'
import listPoints from './list-points'

const assemblePolygon = d => pipe(listPoints, convertPoints(d), definePolygon)

const hexagon = diameter => coordinates =>
  coordinates.map(assemblePolygon(diameter))
             .join('')


export default hexagon
