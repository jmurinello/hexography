export let currentColor = 'light-brown' // eslint-disable-line import/no-mutable-exports

const retrieveColor = () => {
  const color = window.event.target.getAttribute('class').split(' ')[0]
  const element = document.querySelector('.js-shade7 polygon')
  currentColor = color
  element.setAttribute('class', `${color}`)
}

export default retrieveColor
