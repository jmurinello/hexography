import pipe from '../../../lib/pipe'
import pickEndpoint from './pick-endpoint'
import collectInterval from './collect-interval'
import gatherCoordinates from './gather-coordinates'
import adjustToSvg from './adjust-to-svg'
import createGridModel from './create-grid-model'
import plotGrid from './plot-grid'

const generateGrid = pipe
(
  pickEndpoint,
  collectInterval,
  gatherCoordinates,
  adjustToSvg,
  createGridModel,
  plotGrid
)

export default generateGrid
