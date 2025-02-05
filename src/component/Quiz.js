import { useContext, useEffect, useState } from "react";
import QuestionData from "../data/QuestionData";
import { DataContext } from "../App";

const Quiz = ()=>{
    //console.log(QuestionData);
    const [current, setCurrent] = useState(0)
    const [selectChoice, setSelectChoices] = useState("")
    const {score,setScore,setAppState} = useContext(DataContext)

    useEffect(()=>{
        checkAnswer()
    },[selectChoice])

    const checkAnswer =()=>{
        if(selectChoice !==""){
            if(selectChoice === QuestionData[current].answer){
                setScore(score + 1)
                nextQuestion()
            }else{
                nextQuestion()
            }
        }
    }

    const nextQuestion =()=>{
        setSelectChoices("")
        if(current === QuestionData.length - 1){
            setAppState("score")
        }else{
            setCurrent(current + 1)
        }
    }

    return(
        <div className='quiz'>
            <h1>{QuestionData[current].question}</h1>
            <div className="">
                <button onClick={()=> setSelectChoices("A")}>{QuestionData[current].A}</button>
                <button onClick={()=> setSelectChoices("B")}>{QuestionData[current].B}</button>
                <button onClick={()=> setSelectChoices("C")}>{QuestionData[current].C}</button>
                <button onClick={()=> setSelectChoices("D")}>{QuestionData[current].D}</button>
            </div>
            <p>{`${current+1} / ${QuestionData.length}`}</p>
        </div>
    )
}

export default Quiz;