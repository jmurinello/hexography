import gridController from '../../../containers/grid/grid-controller'

const render = (() => {
  const grid = () => document.querySelectorAll('.js-viewport polygon')
  const newBtn = document.querySelector('.js-new-file')

  const disableNewButton = () => {
    newBtn.setAttribute('disabled', '')
  }

  // eslint-disable-next-line consistent-return
  const toggleNewButton = () => {
    if (newBtn.hasAttribute('disabled')) { return newBtn.removeAttribute('disabled') }
  }

  const mirrorGridModel = (data) => {
    let newModel
    const currentModel = gridController.getModel()

    // eslint-disable-next-line no-unused-expressions
    Array.isArray(data)
    // eslint-disable-next-line no-return-assign
      ? newModel = currentModel.map((item, index) => item = data[index])
      : newModel = currentModel.map(item => data) // eslint-disable-line no-unused-vars

    gridController.setModel(newModel)
  }

  const newFile = () => {
    const baseClass = 'framework'
    mirrorGridModel(baseClass)
    grid().forEach(tile => tile.setAttribute('class', baseClass))
    disableNewButton()
  }

  const loadFile = (data) => {
    mirrorGridModel(data)
    grid().forEach((tile, index) => tile.setAttribute('class', data[index]))
    toggleNewButton()
  }

  return {
    newFile,
    loadFile,
  }
})()

export default render
