import gridController from '../../../containers/grid/grid-controller'

const render = (() => {
  const grid = () => document.querySelectorAll('.js-viewport polygon')

  const disableNewButton = () => {
    const newBtn = document.querySelector('.js-new-file')
    newBtn.setAttribute('disabled', '')
  }

  const mirrorGridModel = data => {
    let newModel
    const currentModel = gridController.getModel()

    Array.isArray(data)
      ? newModel = currentModel.map((item, index) => { item = data[index] })
      : newModel = currentModel.map(item => data)

    gridController.setModel(newModel)
  }

  const newFile = () => {
    const baseClass = 'framework'
    mirrorGridModel(baseClass)
    grid().forEach(tile => tile.setAttribute('class', baseClass))
    disableNewButton()
  }

  return {
    newFile
  }
})()

export default render
