import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

class App extends React.Component {
    render(){
    return(
    <Router >
    <div>
    <Route exact path="/" component={Home} />
    <Route path="/Page1" component={Page1} />
    <Route path="/Page2" component={Page2} />
    <Route path="/Page3" component={Page3} />
    </div>
    </Router>
    )
    // history.push() 方法用于在JS中实现页面跳转
    // history.go(-1) 用来实现页面的前进（1）和后退(-1)
    }
    }


    //fetch 返回一个promise对象
    // npm i -S fetch-jsonp
    /*
        通过fetch请求回来的数据，是一个Promise对象.
        调用then()方法，通过参数response，获取到响应对象
        调用 response.json() 方法，解析服务器响应数据
        再次调用then()方法，通过参数data，就获取到数据了

       fetch('/api/movie/' + this.state.movieType)
    // response.json() 读取response对象，并返回一个被解析为JSON格式的promise对象
         .then((response) => response.json())
    // 通过 data 获取到数据
        .then((data) => {
        console.log(data);
         this.setState({
            movieList: data.subjects,
            loaing: false
    })
  })
    */

    //  跨域获取数据的三种方式
    //  1. JSONP  只能发送get请求  需要服务端支持JSONP
    /* movielist.js 
    fetchJsonp('https://api.douban.com/v2/movie/in_theaters')
    .then(rep => rep.json())
    .then(data => { console.log(data) })
    */

    // 2.CORS - 服务器端配合
    // 3. redux 状态管理工具，用来管理应用中的数据
    export default App;