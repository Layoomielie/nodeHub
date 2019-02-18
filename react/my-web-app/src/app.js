import React from 'react';
import View from './view';

class App extends React.Component{
    constructor(props){                         
        super(props);
        this.state={
            text:'This is view !'
        }
        // setTimeout(() => {
        //     this.setState({
        //         text:'this is change'
        //     })
        // }, 2000);
    }

    //  必须render继承React.Component 才是一个组件类
    //  必须通过render返回组件模板 
    

    // 创建阶段
    //constructor(props)  构造函数    设置state和props
    // componentWillMount()  render 前调用  可以调用setState  发送ajax获取数据
    // render
    //  componentDidMount()  组件已经挂载  可以获取内部DOM 可以发送Ajax 可以设置setState  修改后会重新渲染

    // 运行阶段
    // componentWillReceiveProps(nextProps){}  通过this.props 调用之前的props 可以使用setState 
    // shouldComponentUpdate 决定是否渲染 只能返回false和true  
    // componentWillUpdate(nextProps,nextState)  不能修改状态 否则会循环渲染
    // componentDidUpdate(preProps,prevState)  组件已经被渲染 

    // 卸载阶段
    // componentWillUnmount 组件卸载  执行清理  清除定时器 清除DOM对象


    render(){
        let text=this.state.text;
        return (
        <div>
            <View text={text} />
            {/* <button onClick={(e)=>{console.log(e.target)}}>foo</button> */}
            <button onClick={this.handleClick.bind(this,1,2)}>点击</button>
        </div>
        )
    }

    handleClick(a,b){
      console.log(a,b)
         this.setState({
             text:'this is change'
         })
    }
}

export default App;