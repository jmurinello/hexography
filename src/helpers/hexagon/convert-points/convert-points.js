import toScreen from '../../../utils/to-screen'

const convertPoints = diameter => points =>
  points.map(toScreen(diameter))
        .join(' ')

export default convertPoints
