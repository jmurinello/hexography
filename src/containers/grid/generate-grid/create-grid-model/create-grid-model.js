import gridController from '../../grid-controller'

const createGridModel = (coordinates, x = 1, representation = []) => {
  // eslint-disable-next-line no-unused-expressions
  x > coordinates.length
    ? gridController.setModel(representation)
    : createGridModel(coordinates, x + 1, [...representation, 'framework'])

  return coordinates
}

export default createGridModel
