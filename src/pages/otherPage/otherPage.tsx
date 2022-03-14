import  './otherPage.less';
import React,{Component} from 'react';
import FunComponent from '../../components/funComponent/funComponent';
export default class otherPage extends Component {
    state = {
      count:0,
      timer:0,
      }
  timer: number =0; //这是为了添加给this上面添加一个属性，如果直接在timer里面定义就会报错
  render() {
    return (
      <div>
        <div>时间总是一去不复返的{this.state.count}</div>
          <FunComponent name='123'/>
      </div>
    )
  }
  componentDidMount() {
    this.timer=  window.setInterval(() => {
      this.setState({count: this.state.count+1})
    },1000)
    this.abc();
  }
  abc =()=>{
    console.log(this.state,'this');
  }
}
