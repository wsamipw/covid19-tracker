import {LEVEL_ONE, LEVEL_ZERO, LEVEL_TWO} from "./CONSTANTS";

export const result = (data)=>{
    let result = 0;
    let resultText ="";
    let symptom1Value, symptom2Value, travelValue, closeContactValue = 0;
    const {symptom1, symptom2, travel, closeContact} = data;
    Boolean(symptom1)? symptom1Value=4 : symptom1Value=0;
    Boolean(symptom2)? symptom2Value=4 : symptom2Value=0;
    Boolean(travel)? travelValue=4 : travelValue=0;
    Boolean(closeContact)? closeContactValue=4 : closeContactValue=0;
    
    result = symptom1Value + symptom2Value + travelValue + closeContactValue;

    if(result===0){
        resultText = LEVEL_ZERO
    }else if(result>=0 && result<10){
        resultText = LEVEL_ONE
    }else if(result>=10){
        resultText = LEVEL_TWO
    }

    return resultText
}
