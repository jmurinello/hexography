const intoList = (p, q) => [...p, ...q]

const gather = x => y => [x, y]

const replicate = ys => x => ys.map(gather(x))

const expand = xs => xs.map(replicate(xs))

const gatherCoordinates = interval => expand(interval).reduce(intoList)

export default gatherCoordinates
