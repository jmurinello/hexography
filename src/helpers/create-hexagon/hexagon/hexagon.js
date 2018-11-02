import pipe from '../../../lib/pipe'
import convertPoints from './convert-points'
import definePolygon from './define-polygon'
import listPoints from './list-points'

const assemblePolygon = (a, d, i) => pipe(listPoints, convertPoints(d), definePolygon(a)(i))

const hexagon = appearance => diameter => coordinates =>
  coordinates.map((coordinate, index) =>
    assemblePolygon(appearance, diameter, index)(coordinate)
  ).join('')

export default hexagon
