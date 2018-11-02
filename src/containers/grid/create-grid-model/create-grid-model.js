import gridModel from '../../../helpers/grid-model'

const createGridModel = (coordinates, x = 1, representation = []) => {
  x > coordinates.length
    ? gridModel(representation)
    : createGridModel(coordinates, x + 1, [...representation, 'framework'])

  return coordinates
}

export default createGridModel
