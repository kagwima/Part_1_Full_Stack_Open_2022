import { useState } from "react"

//==========================================Components========================================//

const Heading = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}


const Buttons = ({onClick, text}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Button = ({clickOne, textOne, clickTwo, textTwo, clickThree, textThree}) => {
  return (
    <>
      <Buttons onClick = {clickOne} text = {textOne}/>
      <Buttons onClick = {clickTwo} text = {textTwo}/>
      <Buttons onClick = {clickThree} text = {textThree}/>
    </>
  )
}



const StatisticLine = ({text, value, textTwo}) =>{
  return(
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
          <td>{textTwo}</td>
        </tr>
      </tbody>
    </table>
  )
}



const Statistics = ({heading,sumOfGood, sumOfNeutral, sumOfBad, sumOfClicks,averageClicks, positivePercentage}) => {
  return (
    <div>
      <h1>{heading}</h1>
      <StatisticLine text="good" value ={sumOfGood}/>
      <StatisticLine text="neutral" value ={sumOfNeutral}/>
      <StatisticLine text="bad" value ={sumOfBad}/>
      <StatisticLine text="all" value ={sumOfClicks}/>
      <StatisticLine text=" average" value ={averageClicks}/>
      <StatisticLine text="positive" value ={positivePercentage} textTwo = '%'/>
    </div>
  )
}

//Conditional rendering component
const Stats = ({allClicks, heading, sumOfGood, sumOfNeutral, sumOfBad, sumOfClicks, averageClicks, positivePercentage}) => {
  if(allClicks.length === 0){
    return (
      <div>
        <h1>{heading}</h1>
        <p>No Feedback Given</p>
      </div>
    )
  }
  return(
    <Statistics heading= {heading}
      sumOfGood = {sumOfGood} 
      sumOfNeutral = {sumOfNeutral}
      sumOfBad = {sumOfBad}
      sumOfClicks = {sumOfClicks}
      averageClicks = {averageClicks}
      positivePercentage = {positivePercentage}
    />
  )
}

//==============================================Main App Component========================================//

const App = () => {

  //========================================Variables===================================================//
  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [goodClicks, setGoodClicks] = useState([])
  const [neutral, setNeutral] = useState(0)
  const [neutralClicks, setNeutralClicks] = useState([])
  const [bad, setBad] = useState(0)
  const [badClicks, setBadClicks] = useState([])
  const [allClicks, setAllClicks] = useState([])


//==========================================Button Event Handlers========================================//


  //event handler; changes state of good, also adds good to setGoodClicks array
  const setStateGood = () => {
    return () => {
      setGood(good + 1)
      setGoodClicks(goodClicks.concat(good))
      setAllClicks(allClicks.concat(good))
    }
  }


//event handler; changes state of neutral, also adds neutral to setNeutralClicks array
const setStateNeutral = () => {
  return () => {
    setNeutral(neutral + 1)
    setNeutralClicks(neutralClicks.concat(neutral))
    setAllClicks(allClicks.concat(neutral))
  }
}


//event handler; changes state of bad, also adds bad to setBadClicks array
const setStateBad = () => {
  return () => {
    setBad(bad + 1)
    setBadClicks(badClicks.concat(bad))
    setAllClicks(allClicks.concat(bad))
  }
}


//==========================================Stats Functions=============================================//



//sum of good clicks
const sumGood = () => {
  return goodClicks.reduce((a,b) => a + b, 0)
}


//sum of neutral clicks
const sumNeutral = () => {
return neutralClicks.reduce((a,b) => a + b, 0)
}


//sum of bad clicks
const sumBad = () =>{
  return badClicks.reduce((a,b) => a + b, 0)
}


//sum of all clicks
const sumClicks = () => {
  return allClicks.reduce((a,b) => a + b, 0)
}

//average of all clicks
const averageClicks = () => {
  return allClicks.reduce((a,b) => a + b, 0)/allClicks.length
}


//percentage of positive clicks
const positivePercentage = () => {
  let sumOfPositive = sumGood();
  let totalClicks = sumClicks();
  if(isNaN((sumOfPositive/totalClicks * 100))){
    return 0
  }
  return sumOfPositive/totalClicks * 100
}



  return (
    <div>
      <Heading text = 'give feedback'/>
      <Button clickOne={setStateGood()} textOne='good'
              clickTwo={setStateNeutral()} textTwo='neutral'
              clickThree={setStateBad()} textThree='bad'
      />
      <Stats allClicks = {allClicks}
              heading = 'statistics'
              sumOfGood = {sumGood()} 
              sumOfNeutral = {sumNeutral()}
              sumOfBad = {sumBad()}
              sumOfClicks = {sumClicks()}
              averageClicks = {averageClicks()}
              positivePercentage = {positivePercentage()}
      />
    </div>
  )
}

export default App