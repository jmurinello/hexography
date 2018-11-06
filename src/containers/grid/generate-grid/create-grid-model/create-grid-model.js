import gridController from '../../grid-controller'

const createGridModel = (coordinates, x = 1, representation = []) => {
  x > coordinates.length
    ? gridController.setModel(representation)
    : createGridModel(coordinates, x + 1, [...representation, 'framework'])

  return coordinates
}

export default createGridModel
