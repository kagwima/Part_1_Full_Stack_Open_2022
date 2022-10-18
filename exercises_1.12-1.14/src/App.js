import {useState}  from "react";

//============================components=========================================//


const Button = ({onClick, text}) =>{
  return(
    <>
      <button onClick={onClick}>
        {text}
      </button>
    </>
  )
}


const Buttons = ({onClickOne, textOne, onClickTwo, textTwo}) =>{
  return(
    <div>
        <Button onClick = {onClickOne} text = {textOne}/>
        <Button onClick = {onClickTwo} text = {textTwo}/>
    </div>
  )
};



const DisplayTwoContents = ({heading, topAnecdote, topVote}) => {
    return (
      <>
          <h1>{heading}</h1>
          <p>{topAnecdote}</p>
          <p>has {topVote} votes</p>
      </>
    )
}


const DisplayOne = ({headOne,anecdote, numVotes}) =>{
  return(
    <div>
      <h1>{headOne}</h1>
      <p>{anecdote}</p>
      <p>has {numVotes} votes</p>
    </div>
  )
};


const DisplayTwo = ({headTwo, topAnecdote, topVote}) =>{
  if(topVote === 0){
      return (
        <div>
          <h1>{headTwo}</h1>
          <p>no votes yet</p>
        </div>
      )
  }
  return(
    <div>
      <DisplayTwoContents heading = {headTwo}
                          topAnecdote = {topAnecdote}
                          topVote = {topVote}
      />
    </div>
  )
};



const App = () => {

//===========================================variables==================================================//
const headers = {
  text1: 'Anecdote of the day',
  text2: 'Anecdote with most votes'
}

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
];


const [selected, setSelected] = useState(0);

const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))


//=================================Function; creates random integers between 0 and 7=======================================//


const random = () => Math.floor(Math.random() * anecdotes.length);


//======================================button event handler===========================================//
// and adds the random number to the selected state using the setSelected function

const selectAnecdote = () =>{ 
  return () => {
      setSelected(random)
  }
};


//=========================================anecdote selector===============================================//
//Function; adds random integers from the selected state & assigns the integer as indeces for the anecdote

const selectedAnecdote = () => {
  return anecdotes[selected]
};


//=========================================Vote Function===============================================//
//Function; creates a copy of the vote empty array using the SPREAD OPERATOR
//selects each index of the copied array using the selected state.
//using the assignment increament operater adds 1 to each of the selected index on each click
//sets the sumed up copy[index] to the vote array using the setVote on each click


const voteAnecdote = () =>{ 
  const copy = [...vote];
  copy[selected] += 1;
  return () => setVote(copy);
}

console.log(vote, vote[0], vote[1], vote[2])


//=========================================Most votes===============================================//

const mostVotes = () => Math.max(...vote);


//==============================Anecdote of the Day===================================//

const ancedoteOftheDay = () => anecdotes[vote.indexOf(mostVotes())]


  return (
    <div>
      <DisplayOne  headOne = {headers.text1}
                anecdote = {selectedAnecdote()} 
                numVotes = {vote[selected]}
      />
      <Buttons onClickOne ={selectAnecdote()} textOne = 'next anecdote'
              onClickTwo= {voteAnecdote()} textTwo = 'vote'
      />
      <DisplayTwo headTwo = {headers.text2}
                  topAnecdote = {ancedoteOftheDay()}
                  topVote = {mostVotes()}
      />
    </div>
  )
}

export default App;


