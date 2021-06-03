/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집','근처 병원 정보']);
  let posts = '강남 맛집';
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);

  function 제목바꾸기() {
    let arr1 = [...글제목];
    // arr1[0] = '여자 코트 추천';
    arr1.sort();
    글제목변경( arr1 );
  }

    return (
    <div className="App">
      <div className="black-nav">
        React 개발 Blog
      </div>
      <button onClick={ 제목바꾸기 } >정렬</button>
      
      <div className="list">
        <h3> {글제목[0]} <span onClick={ ()=>{따봉변경(따봉+1)} }>👍</span> {따봉} </h3>
        <p>2021 06 03</p>
        <hr/>
      </div>
      
      <div className="list">
        <h3> {글제목[1]} </h3>
        <p>2021 06 03</p>
        <hr/>
      </div>
      
      <div className="list">
        <h3 onClick={()=>{modal변경(true)}}> {글제목[2]} </h3>
        <p>2021 06 03</p>
        <hr/>
      </div>


      {
        // map
      }





      <button onClick={()=>{modal변경(!modal)}}>모달</button>
      {
        modal ? <Modal/> : null
      }

    </div>
  );
}

function Modal() {
  return(
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>내용</p>
    </div>
  );
}

export default App;
