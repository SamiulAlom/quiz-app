import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswer";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  const { id } = useParams();
  const location = useLocation();
  const { state } = location;
  //eslint-disable-next-line
  const qna = state?.qna;

  const { loading, error, answers } = useAnswers(id);

  function calculateScore() {
    let score = 0;

    answers.forEach((question, index) => {
      const checkedIndexes = question.options
        .filter((option) => option.checked)
        .map((option) => option.id);
      const correctIndexes = question.options
        .filter((option) => option.correct)
        .map((option) => option.id);

      if (_.isEqual(checkedIndexes, correctIndexes)) {
        score += 10;
      }
    });

    return score;
  }

  const userScore = calculateScore();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}

      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}

// function calculate() {
//   let score = 0;
//   answers.forEach((question, index1) => {
//     let correctIndexes = [],
//       checkedIndexes = [];

//     question.options.forEach((option, index2) => {
//       if (option.correct) correctIndexes.push(index2);
//       if (
//         qna &&
//         qna[index1] &&
//         qna[index1].options[index2] &&
//         qna[index1].options[index2].checked
//       ) {
//         checkedIndexes.push(index2);
//         option.checked = true;
//       }
//     });

//     if (_.isEqual(correctIndexes, checkedIndexes)) {
//       score = score + 10;
//     }
//   });
//   return score;
// }
