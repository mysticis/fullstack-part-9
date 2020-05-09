type calculateBMI = Function

const calculateBMI = (weight: number, height: number) => {
  return Math.round((weight / (height * height)) * 100)
}
export { calculateBMI }
