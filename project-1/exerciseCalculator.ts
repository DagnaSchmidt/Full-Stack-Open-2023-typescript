interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateExercise = (trainingHours: Array<number>): Result => {
    const periodLength = trainingHours.length;
    const trainingDays = trainingHours.filter(i => i !== 0 && i);
    const success = () => {
        if (periodLength === trainingDays.length){
            return true
        }else{
            return false
        }
    }
    const allHours = trainingHours.reduce((a, b) => a + b);
    const average = allHours/periodLength;

     return {
        periodLength: periodLength,
        trainingDays: trainingDays.length,
        success: success(),
        rating: 0,
        ratingDescription: 'string',
        target: 0,
        average: average
     }
}

console.log(calculateExercise([3, 0, 2, 4.5, 0, 3, 1]));