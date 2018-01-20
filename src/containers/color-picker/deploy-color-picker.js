import compose from '../../lib/compose'
import createHexagon from '../../helpers/create-hexagon'

const enclose = c => p =>
  document.querySelector(`.js-shade${c}`).innerHTML = `${p}`

const picker = appearance => createHexagon({ appearance })

const append = color => compose(enclose(color), picker)

const deploy = ([x, ...xs], color = 1) =>
  typeof x === 'undefined' ? [] : [append(color)(x), ...deploy(xs, color + 1)]

const deployColorPicker = () => deploy
(
  [
    'light-blue',
    'blue',
    'light-green',
    'green',
    'light-brown',
    'brown',
    'current'
  ]
)

export default deployColorPicker
