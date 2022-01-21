// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "I realize immediately when I lose my temper",
	topic:"self awareness",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
    {
    numb: 2,
    question: "I can 'reframe' bad situations quickly",
    topic:"managing emotions",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
    {
    numb: 3,
    question: "I am able to always motive myself to do difficult tasks",
    topic:"motivating oneself",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
    {
    numb: 4,
    question: "I am always able to see things from the other person's viewpoint",
	topic:"empathy",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
    {
    numb: 5,
    question: "I am an excellent listener",
    topic:"social skills",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
  
   {
    numb: 6,
    question: "I know when I am happy",
    topic:"self awareness",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
  {
    numb: 7,
    question: "I do not wear my 'heart on my sleeve'",
    topic:"managing emotions",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
  {
    numb: 8,
    question: "I am usually able to prioritize important activities at work and get on with them",
    topic:"motivating oneself",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 9,
    question: "I am excellent at empathizing with someone else's problem",
    topic:"empathy",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 10,
    question: "I never interrupt other people's conversations",
    topic:"social skills",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 11,
    question: "I usually recognize when I am stressed",
    topic:"self awareness",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 12,
    question: "Others can rarely tell what kind of mood I am in",
    topic:"managing emotions",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 13,
    question: "I always meet deadlines",
    topic:"motivating oneself",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 14,
    question: "I can tell if someone is not happy with me",
    topic:"empathy",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 15,
    question: "I am good at adapting and mixing with a variety of people",
    topic:"social skills",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 16,
    question: "When I am being 'emotional' I am aware of this",
    topic:"self awareness",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 17,
    question: "I rarely 'fly off the handle' at other people",
    topic:"managing emotions",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 18,
    question: "I never waste time",
    topic:"motivating oneself",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 19,
    question: "I can tell if a team of people are not getting along with each other",
    topic:"empathy",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 20,
    question: "People are the most interesting thing in life for me",
    topic:"social skills",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 21,
    question: "When I feel anxious, I usually can account for the reason(s)",
    topic:"self awareness",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 22,
    question: "Difficult people do not annoy me",
    topic:"managing emotions",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 23,
    question: "I do not prevaricate",
    topic:"motivating oneself",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 24,
    question: "I can usually understand why people are being difficult towards me",
    topic:"empathy",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 25,
    question: "I love to meet new people and get to know what makes them 'tick'",
    topic:"social skills",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 26,
    question: "I always know when I'm being unreasonable",
    topic:"self awareness",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 27,
    question: "I can consciously alter my frame of mind or mood",
    topic:"managing emotions",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 28,
    question: "I believe you should do the difficult things first",
    topic:"motivating oneself",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 29,
    question: "Other individuals are not 'difficult' just 'different'",
    topic:"empathy",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 30,
    question: "I need a variety of work colleagues to make my job interesting",
    topic:"social skills",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 31,
    question: "Awareness of my own emotions is very important to me at all times",
    topic:"self awareness",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 32,
    question: "I do not let stressful situations or people affect me once I have left work",
    topic:"managing emotions",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 33,
    question: "Delayed gratification is a virtue that I hold to",
    topic:"motivating oneself",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 34,
    question: "I can understand if I am being unreasonable",
    topic:"empathy",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 35,
    question: "I like to ask questions to find out what it is important to people",
    topic:"social skills",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 36,
    question: "I can tell if someone has upset or annoyed me",
    topic:"self awareness",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 37,
    question: "I rarely worry about work or life in general",
    topic:"managing emotions",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 38,
    question: "I believe in 'Action this Day'",
    topic:"motivating oneself",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 39,
    question: "I can understand why my actions sometimes offend others",
    topic:"empathy",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 40,
    question: "I see working with difficult people as simply a challenge to win them over",
    topic:"social skills",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 41	,
    question: "I can let anger 'go' quickly so that it no longer affects me",
    topic:"self awareness",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 42,
    question: "I can suppress my emotions when I need to",
    topic:"managing emotions",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 43,
    question: "I can always motivate myself even when I feel low",
    topic:"motivating oneself",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 44,
    question: "I can sometimes see things from others' point of view",
    topic:"empathy",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 45,
    question: "I am good at reconciling differences with other people",
    topic:"social skills",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 46,
    question: "I know what makes me happy",
    topic:"self awareness",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 47,
    question: "Others often do not know how I am feeling about things",
    topic:"managing emotions",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 48,
    question: "Motivations has been the key to my success",
    topic:"motivating oneself",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 49,
    question: "Reasons for disagreements are always clear to me",
    topic:"empathy",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },
{
    numb: 50,
    question: "I generally build solid relationships with those I work with",
    topic:"social skills",
    options: [
      "Strongly disagree",
      "Somewhat disagree",
      "Neither agree nor disagree",
      "Somewhat agree",
	  "Strongly agree"
    ]
  },

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];