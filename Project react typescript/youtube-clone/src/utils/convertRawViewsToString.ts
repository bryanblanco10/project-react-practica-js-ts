export const convertRawViewstoString = (
  viewCount: string
): string => {
  const quantity: number = Math.abs(Number(viewCount))
  let viewCountFormat: string = ''
  const B = 1.0e12
  const M = 1.0e6
  const K = 1.0e3
  if (quantity >= B) viewCountFormat = formatViewCount((quantity / B)) + 'B'
  else if (quantity >= M) viewCountFormat = formatViewCount((quantity / M)) + 'M'
  else if (quantity >= K) viewCountFormat = formatViewCount((quantity / K)) + 'k'
  else viewCountFormat = viewCount

  return viewCountFormat
}

const formatViewCount = (count: number): string => {
  const countSplit: string[] = `${count}`.split('.')
  const entero = countSplit[0]
  const decimal = Number(countSplit[1].split('')[0])
  const comma: string = decimal > 0 ? ',' : ''
  const format: string = `${entero}${comma}${decimal > 0 ? decimal : ''}`
  return format
}
