  let btn = document.querySelector('#new-quote');
  let quote = document.querySelector('.quote');
  let person = document.querySelector('.person');

  const quotes = [{
    quote : "The purpose of our lives is to be happy.",
    person:  "Dalai Lama"
  },{
    quote:"Life is what happens when you're busy making other plans.",
    person:"John Lennon"
  },{
    quote:"Get busy living or get busy dying.",
    person:"Stephen King"
  },{
    quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    person:"Thomas A. Edison"
  },{
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    person:"Albert Einstein"
  },{
    quote:"Never let the fear of striking out keep you from playing the game.",
    person:"Babe Ruth"
  },{
    quote: "Money and success don’t change people; they merely amplify what is already there.",
    person:" Will Smith"
  },{
    quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    person:"Steve Jobs"
  },{
    quote:"Not how long, but how well you have lived is the main thing.",
    person:"Seneca"
  },{
    quote:"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
    person:" Henry Ford"
  },{
    quote:"Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
    person:"Leo Burnett"
  },{
    quote:"Don’t settle for what life gives you; make life better and build something.",
    person:"Ashton Kutcher"
  },{
    quote:"Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this." ,
    person:"Celine Dion"
  },{
    quote:"When we do the best we can, we never know what miracle is wrought in our life or the life of another.",
    person:"Helen Keller"
  },{
    quote:"Life is like a coin. You can spend it any way you wish, but you only spend it once.",
    person:"Lillian Dickson"
  },{
    quote:"Do before you die",
    person:"chharan"
  },{
    quote:"Life is ten percent what happens to you and ninety percent how you respond to it.",
    person:" Charles Swindoll"
  },{
    quote:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    person: " Dr. Seuss"
  },{
    quote:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
    person:"Mahatma Gandhi"
  },];

  btn.addEventListener('click',function(){
     let random = Math.floor(Math.random()*quotes.length);
     quote.innerText = quotes[random].quote;
     person.innerText = quotes[random].person;
  })