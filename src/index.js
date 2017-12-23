import './main.css'
import generateGrid from './containers/grid'
import deployColorPicker from './containers/color-picker'
import diameter from './helpers/diameter'

generateGrid(diameter)
deployColorPicker()
