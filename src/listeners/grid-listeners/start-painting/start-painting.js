import { currentColor } from '../../color-picker-listeners/retrieve-color/retrieve-color'
import gridController from '../../../containers/grid/grid-controller'

const paint = () =>
{
  const target = event.target
  const targetId = target.id

  target.setAttribute('class', `${currentColor}`)
  gridController.updateModel(targetId, currentColor)
}

const startPainting = () =>
{
  paint()
  document.querySelector('.js-viewport g').onmousemove = () => paint()
}

export default startPainting
