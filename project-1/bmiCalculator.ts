const calculateBmi = (height: number, weight: number): string => {
    const bmiNumber = weight / height;
    if(bmiNumber <= 16){
        return 'Underweight (Severe thinness)';
    }else if(bmiNumber > 16 && bmiNumber <= 16.9){
        return 'Underweight (Moderate thinness)';
    }else if(bmiNumber > 16.9 && bmiNumber <= 18.4){
        return 'Underweight (Mild thinness)';
    }else if(bmiNumber > 18.4 && bmiNumber <= 24.9){
        return 'Normal range';
    }else if(bmiNumber > 24.9 && bmiNumber <= 29.9){
        return 'Overweight (Pre-obese)';
    }else if(bmiNumber > 29.9 && bmiNumber <= 34.9){
        return 'Obese (Class I)';
    }else if(bmiNumber > 34.9 && bmiNumber <= 39.9){
        return 'Obese (Class II)';
    }else{
        return 'Obese (Class III)'
    }
};

console.log(calculateBmi(158, 57));