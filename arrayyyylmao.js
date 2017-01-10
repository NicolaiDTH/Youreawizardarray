var questions = [
 ['How many fucks do I give?', 0]
 ['How many problems does Beyonces husband have?', 99]
 ['How many luftballons?', 99]
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;

function print(message) {
 document.write(message);
}

for (var i = 0; i < questions.length; i += 1) {
 question = questions[i][0];
 answer = questions[i][1];
 response = parseInt(prompt(question));
 if (response === answer) {
  correctAnswers += 1;
 }
}

html = 'You got ' + correctAnswers + ' question(s) right!';
print(html);