import gridModel from './grid-model'

const gridController = (() => {
  const setModel = representation => gridModel.set(representation)
  const getModel = () => gridModel.get()
  const updateModel = (id, color) => {
    const index = id.split(/\-/)[1]
    gridModel.update(index, color)
  }

  return {
    setModel,
    getModel,
    updateModel
  }
})()

export default gridController
