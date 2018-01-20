const shadowOn = () =>
{
  const target = event.target

  target.setAttribute('stroke', 'hsl(0, 0%, 25%)')
  target.setAttribute('stroke-width', '0.3em')
}

export default shadowOn
