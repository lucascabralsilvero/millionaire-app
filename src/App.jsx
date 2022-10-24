import "./app.css";
import React, {useEffect, useMemo, useState} from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start"

function App() {

  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false); 
  const [earned, setEarned] = useState("$ 0"); 

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Radcliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What did the composer Chopin die of?",
      answers: [
        {
          text: "Heart Attack",
          correct: false,
        },
        {
          text: "Tuberculosis",
          correct: true,
        },
        {
          text: "Acute Kidney Failure",
          correct: false,
        },
        {
          text: "Stomach Cancer",
          correct: false,
        },
      ],
    },  
    {
      id: 5,
      question: "Which saint founded the Abbey of Montecasino?",
      answers: [
        {
          text: "Benito",
          correct: true,
        },
        {
          text: "Bernardo",
          correct: false,
        },
        {
          text: "Buenaventura",
          correct: false,
        },
        {
          text: "Bonifacio",
          correct: false,
        },
      ],
    },  
    {
      id: 6,
      question: "Which of these names does not appear in the title of a play by Shakespeare?",
      answers: [
        {
          text: "Hamlet",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Radcliff",
          correct: true,
        },
      ],
    },  
    {
      id: 7,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Hamlet",
          correct: false,
        },
        {
          text: "Romeo",
          correct: false,
        },
        {
          text: "MacBeth",
          correct: false,
        },
        {
          text: "Darren",
          correct: true,
        },
      ],
    },  
    {
      id: 8,
      question: "In elegant hotels, what snack is usually left on the pillows?",
      answers: [
        {
          text: "Pretzel",
          correct: false,
        },
        {
          text: "Apple",
          correct: false,
        },
        {
          text: "Strawberrie",
          correct: false,
        },
        {
          text: "Mint",
          correct: true,
        },
      ],
    },  
    {
      id: 9,
      question: "In the court of which king Leonardo Da Vinci spent the last two years of his life?",
      answers: [
        {
          text: "Enrique IV",
          correct: false,
        },
        {
          text: "Carlos III",
          correct: false,
        },
        {
          text: "Luis XII",
          correct: false,
        },
        {
          text: "Francisco I",
          correct: true,
        },
      ],
    },  
    {
      id: 10,
      question: "Which of the following men does not have a chemical element named after him?",
      answers: [
        {
          text: "Albert Einstein",
          correct: true,
        },
        {
          text: "Niels Bohr",
          correct: false,
        },
        {
          text: "Isaac Newton",
          correct: false,
        },
        {
          text: "Enrico Fermi",
          correct: false,
        },
      ],
    },  
    {
      id: 11,
      question: "Who was the first man to travel twice into space?",
      answers: [
        {
          text: "Vladimir Titov",
          correct: false,
        },
        {
          text: "Gus Grissom",
          correct: true,
        },
        {
          text: "Yuri Gagarin",
          correct: false,
        },
        {
          text: "Yuri Gagarin",
          correct: false,
        },
      ],
    },  
    {
      id: 12,
      question: "Each chromatic component of white light in transparent bodies moves at a different speed. The fastest color in that sense is the?",
      answers: [
        {
          text: "Red",
          correct: true,
        },
        {
          text: "Orange",
          correct: false,
        },
        {
          text: "Yellow",
          correct: false,
        },
        {
          text: "Purple",
          correct: false,
        },
      ],
    },  
    {
      id: 13,
      question: "The Venetian merchant Marco Polo was an official at the court of?",
      answers: [
        {
          text: " Kumiai Khan",
          correct: true,
        },
        {
          text: "Tameriano el magnífico",
          correct: false,
        },
        {
          text: "Saladino",
          correct: false,
        },
        {
          text: "Iván The Terrible",
          correct: false,
        },
      ],
    },  
    {
      id: 14,
      question: "In 1718, which pirate was killed in battle off the coast of what is now North Carolina?",
      answers: [
        {
          text: "Calico Jack",
          correct: false,
        },
        {
          text: "Barbanegra",
          correct: true,
        },
        {
          text: "Bartholomew Roberts",
          correct: false,
        },
        {
          text: "Capitán Kidd",
          correct: false,
        },
      ],
    },  
    {
      id: 15,
      question: "There are three European cities that preserve original manuscripts of the Mayan civilization. Which of these cities does not have them?",
      answers: [
        {
          text: "Madrid",
          correct: false,
        },
        {
          text: "Rome",
          correct: false,
        },
        {
          text: "Dresden",
          correct: false,
        },
        {
          text: "Paris",
          correct: true,
        },
      ],
    },    
  ]

  const moneyPyramid = useMemo(() =>

    [
      {
        id:1,
        amount: "$100"
      },
      {
        id:2,
        amount: "$200"
      },
      {
        id:3,
        amount: "$300"
      },
      {
        id:4,
        amount: "$500"
      },
      {
        id:5,
        amount: "$1000"
      },
      {
        id:6,
        amount: "$2000"
      },
      {
        id:7,
        amount: "$4000"
      },
      {
        id:8,
        amount: "$8000"
      },
      {
        id:9,
        amount: "$16000"
      },
      {
        id:10,
        amount: "$32000"
      },
      {
        id:11,
        amount: "$64000"
      },
      {
        id:12,
        amount: "$125000"
      },
      {
        id:13,
        amount: "$250000"
      },
      {
        id:14,
        amount: "$500000"
      },
      {
        id:15,
        amount: "$1000000"
      },
  
    ].reverse(), [])


  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(mon => mon.id === questionNumber - 1).amount) 
  }, [questionNumber, moneyPyramid]);


  return (
    <div className="app">
      {userName ? (
        <>

<div className="main">
      {stop ? <h1 className="endText">You earned: {earned} </h1> : (
        <>
      <div className="top">
        <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
      </div>
      <div className="bottom">
        <Trivia data= {data} setStop={setStop} setQuestionNumber={setQuestionNumber}
        questionNumber={questionNumber} />
      </div>
      </> ) }
     </div>
     <div className="pyramid">
      <ul className="moneyList">
        {
          moneyPyramid.map((money, idx) =>(
            <li key={idx} className={ questionNumber === money.id ? "moneyListItem active" : "moneyListItem"}>
          <span className="moneyListItemNumber">{money.id}</span>
          <span className="moneyListItemAmount">{money.amount}</span>
        </li>
           ) )
        }
      </ul>
     </div>
        </>
      ) : <Start setUserName = {setUserName} />}
     
    </div>
  );
}

export default App;
