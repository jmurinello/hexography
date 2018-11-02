import gridController from '../../grid-controller'

const createGridModel = (coordinates, x = 1, representation = []) => {
  x > coordinates.length
    ? gridController.createModel(representation)
    : createGridModel(coordinates, x + 1, [...representation, 'framework'])

  return coordinates
}

export default createGridModel
