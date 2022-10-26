const q1 = 'Сколько будет 2 + 2?'
const q2 = 'Сколько будет 2 * 2?'
const q3 =
  'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'
const q4 =
  'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'
const q5 = 'Сколько будет 2 + 2 * 2?'

let questionsArray = [q1, q2, q3, q4, q5]
let correctArr = [4, 4, 1, 12, 6]
let finalMsg = checkAnswer()

alert(finalMsg) //Вывод результата в конце

//....................................................................
function checkAnswer() {
  let correct = ''
  let incorrect = ''
  let finalMsg = 'Конец теста! Правильные ответы - '

  for (let i = 0; i < questionsArray.length; i++) {
    answer = checkForNaN(i) //Проверка на NaN: ответ должен быть числом

    if (answer === correctArr[i]) {
      correct += ` ${i + 1}:${answer}`
    } else {
      incorrect += `${i + 1}:${answer}`
    }
  } //...cycle ends here

  //Проверка на все правильные OR все неправильные
  correct.length > 0 ? (finalMsg += correct) : (finalMsg += '' + 0)
  finalMsg += '; Неправильные ответы - '
  incorrect.length > 0 ? (finalMsg += incorrect) : (finalMsg += '' + 0)
  //Значения записались в finalNsg
  return finalMsg
}

//.......................................................................
function checkForNaN(i) {
  let answer = +prompt(questionsArray[i]).trim()
  if (isNaN(answer)) {
    alert('Ответ должен быть числом')
    checkForNaN()
  }
  return answer
}
