import { currentColor } from '../../color-picker-listeners/retrieve-color/retrieve-color'

const paint = () =>
{
  const target = event.target

  target.setAttribute('fill', `${currentColor}`)
  target.setAttribute('stroke', `${currentColor}`)
}

const startPainting = () =>
{
  paint()
  document.querySelector('.framework').onmousemove = () => paint()
}

export default startPainting
