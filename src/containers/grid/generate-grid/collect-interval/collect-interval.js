const collectInterval = (endpoint, x = 1, interval = [0]) => (
  x > endpoint ? interval : collectInterval(endpoint, x + 1, [-x, ...interval, x])
)


export default collectInterval
