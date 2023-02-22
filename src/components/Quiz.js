import React, {useState} from "react";

const Question = [
  {
    name: "Chimdiebube",
    gender: "Male",
    state: "Ebonyi",
    country: "Nigeria",
    channel: "E C universal",
  },
  {
    Question: "Who is the CEO of Tesla?",
    A: "Emmanuel Chimdiebube",
    B: "Elon Musk",
    C: "Joe Biden",
    D: "Olaf Scholz",
    Answer: "B",
  }, {
    Question: "What is the full meaning of WHO ?",
    A: "World Heroes Organisation",
    B: "Western Health Organization",
    C: "World Health Organization",
    D: "Widows Health Organization",
    Answer: "C",
  }, {
    Question: "Which Channel is rated the biggest tech channel in the UK?",
    A: "MrWhoseTheBoss",
    B: "AppleTv",
    C: "AmazonTv",
    D: "Silversoft",
    Answer: "A",
  }, {
    Question: "Which of this languages is not used for programming?",
    A: "PHP",
    B: "Javascript",
    C: "Javanese",
    D: "Eiffel",
    Answer: "C",
  }, {
    Question: "What's the world's largest software maker?",
    A: "Microsoft",
    B: "Google",
    C: "Adobe inc",
    D: "Oracle",
    Answer: "A",
  }, {
    Question: "What's the world's largest phone manufacturer?",
    A: "Oppo",
    B: "Apple",
    C: "Samsung",
    D: "Huwai",
    Answer: "C",
  }, {
    Question: "What's the world's largest car manufacturer?",
    A: "Toyota",
    B: "Volks Wagon",
    C: "Mecerdes",
    D: "Range Rover",
    Answer: "B",
  }, {
    Question: "What's Nigeria's biggest Problem?",
    A: "NEPA",
    B: "Corruption",
    C: "Bad Leadership",
    D: "Poverty",
    Answer: "B",
  }, {
    Question: "Who's the USA's largest competitor in terms of trade?",
    A: "United Kingdom",
    B: "Russia",
    C: "Japan",
    D: "China",
    Answer: "D",
  }, {
    Question: "Why did I set this Quiz?",
    A: "For fun",
    B: "For a project",
    C: "To test a new software",
    D: "To make money",
    Answer: "B",
  },
]
// console.log(Question);
// let [count, setCount] = quest_num(0)



function Quiz() {
  const [questNum, setQuestNum] = useState(1)
  const [newcheck, setNewcheck] = useState([])
  const [duplicate, setDuplicate] = useState(0)
  const [totalMark, setTotalMark] = useState(0)
  const [qanda, setQanda] = useState(true);
  let final_mark = 0
  const next = () => {
    if (questNum < 10) {
      return setQuestNum(questNum + 1);
    } else {
      alert('you reached the end of the quiz');
    }
  }
  // function submitmark() {
  //   setQuiz(false)

  // }
  const previous = () => {
    if (questNum > 1) {
      return setQuestNum(questNum - 1);
    }
  }
  const clickAns = (e) => {
    var single_mark = 0
    var danswer = [...newcheck]

    danswer.forEach(element => {
      if (element.ques_num === questNum) {
        setDuplicate(1)
        console.log(duplicate);
      }
    });
    if (duplicate === 1) {
      console.log(questNum);
    }

    // const [qandm, setQuiz] = useState(true);
    // function submitmark() {
    //   setQuiz(false)

    // }


    for (let index = 1; index < Question.length; index++) {
      const element = Question[index];

      if (index === questNum) {
        console.log(element.Answer);
        if (element.Answer === e.target.value) {
          single_mark = 2
          final_mark = totalMark + single_mark
          setTotalMark(final_mark)

        } else {
          single_mark = 0;
          final_mark = totalMark + single_mark
          setTotalMark(final_mark)

        }
      }
    }

    if (danswer.length >= Question.length) {
      console.log("Just reach the end");
    }else{
      danswer.push({ answ: e.target.value, ques_num: questNum, mark: single_mark })
      setNewcheck(danswer)
      console.log(danswer);
      if (questNum < 10) {
        return setQuestNum(questNum + 1);
      } else {
        // setShowScore(true);
      }
    }


  };
  const submitmark = () => {
    console.log(totalMark);
    setQanda(false)
    if (totalMark < 10) {
      console.log("Failed");
    }else{
      console.log("Passed");
    }

    if (qanda) {
      setTimeout(() => {
        setQanda(true)
        window.location.reload()
        // console.log("time passed");
      }, 5000);
      // console.log("testing q and a");
    }
    
  }


  return (
    <>
    {qanda ? <div className="main-quiz">
      
      <div className="warn">
        <h4 className="warn-h4"><span className="warnwarn">⚠⚠</span> Warning :</h4><p className="warn-p">Do not refresh this page while the quiz has Started</p>
      </div>
      <div className="cards">
        <div className="for-question-num"><h3>{questNum} of 10</h3></div>
        <div className="for-question"><h2>{Question[questNum].Question}</h2></div>
        <div className="for-answers">
          <div className="ansAandB">
            <button className="ansA" value="A" onClick={clickAns}><span className="bold1">A </span>{Question[questNum].A}</button>
            <button className="ansB" value="B" onClick={clickAns}><span className="bold1">B </span>{Question[questNum].B}</button>
          </div>
          <div className="ansCandD">
            <button className="ansC" value="C" onClick={clickAns}><span className="bold1">C </span>{Question[questNum].C}</button>
            <button className="ansD" value="D" onClick={clickAns}><span className="bold1">D </span>{Question[questNum].D}</button>
          </div>
        </div>
        <div className="for-buttons">
          <button className="p-q" onClick={previous}>
            Previous
          </button>
          <button className="n-q" onClick={next}>
            Next
          </button>
        </div>
      </div>
      <button className="sub-btn" onClick={submitmark}>
        <h3>SUBMIT</h3>
      </button>:
      
      
  </div> : <div>
        <div className="Total score">
          <div className="for_score">
            <h3> Your Total score is {totalMark}</h3>
          </div>
        </div>
      </div>
  }
      
      </>
  );

}

export default Quiz;
