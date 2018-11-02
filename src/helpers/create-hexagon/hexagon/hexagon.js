import pipe from '../../../lib/pipe'
import convertPoints from './convert-points'
import definePolygon from './define-polygon'
import listPoints from './list-points'

const assemblePolygon = a => d => pipe(listPoints, convertPoints(d), definePolygon(a))

const hexagon = appearance => diameter => coordinates =>
  coordinates.map(assemblePolygon(appearance)(diameter))
             .join('')


export default hexagon
