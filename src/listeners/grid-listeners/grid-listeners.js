import highlightOff from './highlight-off'
import highlightOn from './highlight-on'
import startPainting from './start-painting'
import stopPainting from './stop-painting'

const addEvent = ([x, y]) =>
  document.querySelector('.js-viewport g').addEventListener(x, y)

const spreadListeners = list => list.map(addEvent)

const gridListeners = () => spreadListeners
(
  [
    ['mouseout', highlightOff],
    ['mouseover', highlightOn],
    ['mousedown', startPainting],
    ['mouseup', stopPainting]
  ]
)

export default gridListeners
