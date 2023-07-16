type Description = 'bad' | 'medium' | 'good';
type Rating = 1 | 2 | 3;
interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: Rating,
    ratingDescription: Description,
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

    const rating = (): Rating => {
        if(allHours/periodLength >= 2){
            return 3
        }else if(allHours/periodLength < 2 && allHours/periodLength > 1){
            return 2
        }else{
            return 1
        }
    }

    const ratingDescription = (): Description => {
        if(rating() === 3){
            return 'good'
        }else if(rating() === 2){
            return 'medium'
        }else{
            return 'bad'
        }
    }

     return {
        periodLength: periodLength,
        trainingDays: trainingDays.length,
        success: success(),
        rating: rating(),
        ratingDescription: ratingDescription(),
        target: 2,
        average: average
     }
}

console.log(calculateExercise([3, 0, 2, 4.5, 0, 3, 1]));