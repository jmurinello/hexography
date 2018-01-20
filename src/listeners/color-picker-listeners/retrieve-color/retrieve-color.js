export let currentColor

const retrieveColor = () =>
{
  const style = window.getComputedStyle(event.target, null)
  const color = style.getPropertyValue('fill')
  const element = document.querySelector('.current polygon')

  currentColor = color
  element.setAttribute('fill', `${color}`)
}

export default retrieveColor
