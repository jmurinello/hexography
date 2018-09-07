import '../public/assets/main.css'
import './containers/color-picker/deploy-color-picker.css'
import './helpers/create-hexagon/create-hexagon.css'
import generateGrid from './containers/grid'
import deployColorPicker from './containers/color-picker'
import scatterListeners from './listeners'
import diameter from './helpers/diameter'

generateGrid(diameter)
deployColorPicker()
scatterListeners()
