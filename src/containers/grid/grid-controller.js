import gridModel from './grid-model'

const gridController = (() => {
  let modified

  const fileModified = () => modified !== false

  const toggleModified = () => {
    if (typeof modified === 'undefined') { return modified = false }
    return modified = !modified
  }

  const setModel = (representation) => {
    toggleModified()
    gridModel.set(representation)
  }

  const getModel = () => gridModel.get()

  const updateModel = (id, color) => {
    if (!fileModified()) { toggleModified() }
    const index = id.split(/-/)[1]
    gridModel.update(index, color)
  }

  return {
    setModel,
    getModel,
    updateModel,
  }
})()

export default gridController
