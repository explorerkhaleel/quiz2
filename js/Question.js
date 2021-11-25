class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    //Create a input box to enter the number
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.answersubmitted=createElement('h3');
    this.owner=createElement('h3');
  }//constructor




  display() {
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Question:- What is easy to get into, but hard to get out of ? ");
    this.question.position(150, 80);
    this.option1.html("1: House ");
    this.option1.position(150, 100);
    this.option2.html("2: Trouble");
    this.option2.position(150, 120);
    this.option3.html("3: Tent ");
    this.option3.position(150, 140);
    this.option4.html("4: Car ");
    this.option4.position(150, 160);

    this.owner.html("by Teesta Anup Bhandary");
    this.owner.position(600,300);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(() => {
      this.answersubmitted.html("Thank You, Your Answer Has Been Submitted");
      this.answersubmitted.position(220, 350);
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount += 1;
      contestant.index = contestantCount;
      //contestant.update();
      contestant.updateCount(contestantCount);
    })

  }

}//class question
