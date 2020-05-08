interface CalulatedResult {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

const calculateResults = (
  list: Array<number>,
  targetHoursPerDay: number
): CalulatedResult => {
  const averageHour = (list: Array<number>) => {
    return list.reduce((acc, cur) => acc + cur) / list.length
  }
  const ratingValue = (list: Array<number>) => {
    return Math.round(list.reduce((acc, cur) => acc + cur) / list.length)
  }
  const isSuccess = () => {
    if (averageHour(list) < targetHoursPerDay) {
      return false
    } else {
      return true
    }
  }
  const ratingRemarks = (averageHour: number) => {
    if (averageHour === 1) {
      return `Poor performance, you'll need to improve!`
    } else if (averageHour >= 1 && averageHour <= 2) {
      return `Not too bad but could be better!`
    } else if (averageHour >= 3) {
      return `Excellent performance, target achieved!`
    }
  }

  return {
    periodLength: list.length,
    trainingDays: list.filter((num) => num !== 0).length,
    success: isSuccess(),
    rating: ratingValue(list),
    ratingDescription: ratingRemarks(averageHour(list)),
    target: targetHoursPerDay,
    average: averageHour(list),
  }
}
try {
  console.log(calculateResults([1, 0, 2, 4.5, 0, 3, 1, 0, 4], 2))
} catch (error) {
  console.log("Error, something bad happened, message: ", error.message)
}
