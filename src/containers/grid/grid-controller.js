import gridModel from './grid-model'

const gridController = (() => {
  const createModel = representation => gridModel.create(representation)
  const updateModel = (id, color) => {
    const index = id.split(/\-/)[1]
    gridModel.update(index, color)
  }

  return {
    createModel,
    updateModel
  }
})()

export default gridController
