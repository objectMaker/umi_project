import './funComponent.less'
import {useState} from 'react';
interface propsInterface{
  name: string
}
export default function (props: propsInterface,){
  const [num,setNum] = useState(0);
  setTimeout(()=>{
    setNum(9999);
  },3000)
  return (
    <div className="fun_com">{props.name}
      <div>
        {num}
      </div>
    </div>
  )
}
