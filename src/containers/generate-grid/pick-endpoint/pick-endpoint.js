const whichEndpoint = endpoint => diameter =>
  diameter in endpoint ? endpoint[diameter] : 1

const pickEndpoint = whichEndpoint
(
  {
    10: 32,
    20: 16,
    40: 8
  }
)

export default pickEndpoint
