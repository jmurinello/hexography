import gridListeners from './grid-listeners'
import fileListeners from './file-listeners'
import colorPickerListeners from './color-picker-listeners'

const scatterListeners = () =>
{
  gridListeners()
  fileListeners()
  colorPickerListeners()
}

export default scatterListeners
