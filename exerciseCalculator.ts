interface ParseArguments {
  targetHoursPerDay: number
  daysTrained: Array<number>
}
interface CalulatedResult {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}
const parseData = (args: Array<number>): ParseArguments => {
  if (isNaN(args[0])) {
    throw new Error(`Argument you entered is not a number!`)
  }
  if (args.length < 10) throw new Error("Not enough arguments")
  if (args.length > 10) throw new Error("Too many arguments")
  if (args.every((e) => isNaN(e))) {
    throw new Error("Only numbers should be entered")
  } else {
    return {
      targetHoursPerDay: Number(args[0]),
      daysTrained: args.splice(1),
    }
  }
}
const calculateResults = (
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
    if (averageHour === 1) {
      return `Poor performance, you'll need to improve!`
    } else if (averageHour >= 1 && averageHour <= 2) {
      return `Not too bad but could be better!`
    } else if (averageHour >= 3) {
      return `Excellent performance, target achieved!`
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
try {
  const argsToParse = process.argv.splice(2).map(Number)
  const { targetHoursPerDay, daysTrained } = parseData(argsToParse)
  console.log(calculateResults(targetHoursPerDay, daysTrained))
} catch (error) {
  console.log("Error, something bad happened, message: ", error.message)
}
