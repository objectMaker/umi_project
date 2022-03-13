import  './otherPage.less';
import React,{Component} from 'react';
import FunComponent from '../../components/funComponent/funComponent';
export default class otherPage extends Component {
    state = {
      count:0,
      timer:0,
      }
  render() {
    return (
      <div>
        <div>时间总是一去不复返的{this.state.count}</div>
          <FunComponent name='123'/>
      </div>
    )
  }
  componentDidMount() {
    this.state.timer=  window.setInterval(() => {
      this.setState({count: this.state.count+1})
    },1000)
  }
}
