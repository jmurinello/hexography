const withinSvg = ([x, y]) => Math.abs(x) <= 208 && Math.abs(y) <= 480

const adjust = points => points.filter(withinSvg)

export default adjust
