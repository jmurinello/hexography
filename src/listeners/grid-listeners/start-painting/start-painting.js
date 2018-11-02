import { currentColor } from '../../color-picker-listeners/retrieve-color/retrieve-color'

const paint = () =>
{
  const target = event.target

  target.setAttribute('class', `${currentColor}`)
}

const startPainting = () =>
{
  paint()
  document.querySelector('.js-viewport g').onmousemove = () => paint()
}

export default startPainting
