/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집','근처 병원 정보']);
  let posts = '강남 맛집';
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [ num, chNum] = useState(0);
  let [입력값, 입력값변경] = useState('');

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
      {
      
        글제목.map((a,i)=>{
          return ( <div className="list" key={'postList'+i}>
          <h3 onClick={()=>{chNum(i)}}> {글제목[i]}  <span onClick={ ()=>{따봉변경(따봉+1)} }>👍</span> {따봉}</h3>
          <p>2021 06 03</p>
          <hr/>
        </div>
          )
        })
      }

      <div className="publish">
        <input onChange={(e)=>{          입력값변경(e.target.value)          }}/>
        <button onClick={()=>{          
          let change1 = [...글제목];
          change1.unshift(입력값);
          글제목변경(change1);
          }}>
        저장</button>
      </div>
      {입력값}
      {/* <input onChange={ (e)=>{입력값변경(e.target.value) } }></input>
      <p>{입력값}</p> */}
<Profile/>

      <br></br>
      <button onClick={()=>{modal변경(!modal)}}>modal</button>
      {// 작명=전송할state
        modal ? <Modal 글제목={글제목} num={num}/> : null
      }
    </div>
  );
}

function Modal(props) {
  return(
    <div className="modal">
      <h2>{props.글제목[props.num]}</h2>
      <p>날짜</p>
      <p>내용</p>
    </div>
  );
}

class Profile extends React.Component {
  constructor(){
    super();
    this.state = {name : 'Kim'}
  }

  chName = ()=> {
    this.setState({name:'Park'})
  }

  render(){
    return (
      <div>profile 임다

        <h3>저는.. {this.state.name} ..입니다.</h3>
        <button onClick={()=>{this.chName()}}>이름변경</button>
      </div>
    )
  }

}



export default App;
