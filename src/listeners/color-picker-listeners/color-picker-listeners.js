import retrieveColor from './retrieve-color'
import shadowOff from './shadow-off'
import shadowOn from './shadow-on'

const enclose = ([x, y]) => e => e.addEventListener(x, y)

const addEvent = listener =>
  document.querySelectorAll('.menu-list-color-picker-item polygon').forEach(enclose(listener))

const spreadListeners = list => list.map(addEvent)

const colorPickerListeners = () => spreadListeners
(
  [
    ['click', retrieveColor],
    ['mouseout', shadowOff],
    ['mouseover', shadowOn]
  ]
)

export default colorPickerListeners
