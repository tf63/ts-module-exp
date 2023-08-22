export const calculateSum = (numbers: number[]): number => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0)
    return sum
}
