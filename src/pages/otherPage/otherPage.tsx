import  './otherPage.less';
import React,{Component} from 'react';
export default class otherPage extends Component {
    state = {
      count:0,
      }
  render() {
    return (
      <div>
        <div>时间总是一去不复返的{this.state.count}</div>
      </div>
    )
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count+1})
    },1000)
  }
}
