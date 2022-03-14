import './Father.less';
import {useState,useEffect} from 'react';
import Child_left from './components/Child_left';
import Child_right from './components/Child_right';
interface P{
  children:any
}
export default function(props:P){
  const [name,setName] = useState('我是你的大爹')
  // setName(name + '__')
  // useEffect(()=>{
  // })
    // setInterval(()=>{
    //   setName(name + '==')
    // },3000)
    function SetA(){
      setName(name + '__');
    }
  return (
    <div onClick={SetA}>{name}
      <div>
        {props.children}
      <Child_right/>
      <Child_left/>
      </div>

    </div>
  )
}
