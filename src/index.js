import React from 'react';
import ReactDOM from 'react-dom';
//importing external css file
import './index.css'; 

/* 
let time = new Date(2021, 7, 25, 11);*/
let time = new Date();
time = time.getHours();
let greetings = ''
const styling = { };

if (time >= 1 && time <= 11){
  greetings = 'Good Morning';
  styling.color = 'green';
} 
else if (time >= 12 && time<= 19){
  greetings = 'Good Afternoon';
  styling.color = 'orange';
}
else{
  greetings = 'Good Night';
  styling.color = 'black';
}

const borderline = {
  backgroundColor: 'white',
  borderRadius: '25px',
  padding: '20px',
  margin: 'auto',
  marginTop: '20px',
  width: '500px',
  textAlign: 'center'
}

ReactDOM.render(
  <>
    <div style={borderline}>
    <h1>Hello sir, <span style={styling}>{greetings}.</span></h1>
    </div>
  </>,
  document.getElementById('root')
);


// console.log(postHtml);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
