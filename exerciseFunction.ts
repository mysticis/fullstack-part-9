export default {}

interface CalulatedResult {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}
export const parseDataArray = (days: Array<number>): boolean => {
  return days.every((e) => isNaN(e))
}
export const parseTargetData = (target: number): boolean => {
  if (isNaN(target)) {
    return true
  } else {
    return false
  }
}
export const calculateResultsWeb = (
  targetHoursPerDay: number,
  daysTrained: Array<number>
): CalulatedResult => {
  const averageHour = (daysTrained: Array<number>) => {
    return daysTrained.reduce((acc, cur) => acc + cur) / daysTrained.length
  }
  const ratingValue = (daysTrained: Array<number>) => {
    return Math.round(
      daysTrained.reduce((acc, cur) => acc + cur) / daysTrained.length
    )
  }
  const isSuccess = () => {
    if (averageHour(daysTrained) < targetHoursPerDay) {
      return false
    } else {
      return true
    }
  }
  const ratingRemarks = (averageHour: number) => {
    if (averageHour < 2) {
      return `Poor performance, you'll need to improve!`
    } else if (averageHour >= 2) {
      return `Not too bad but could be better!`
    } else if (averageHour >= 3) {
      return `Excellent performance, target achieved!`
    } else {
      return `Not enough info!`
    }
  }

  return {
    periodLength: daysTrained.length,
    trainingDays: daysTrained.filter((num) => num !== 0).length,
    success: isSuccess(),
    rating: ratingValue(daysTrained),
    ratingDescription: ratingRemarks(averageHour(daysTrained)),
    target: targetHoursPerDay,
    average: averageHour(daysTrained),
  }
}
