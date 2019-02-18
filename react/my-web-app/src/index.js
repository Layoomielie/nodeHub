import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// const fruits=[
//     <li key="1">苹果</li>,
//     <li key="2">香蕉</li>,
//     <li key="3">橘子</li>
// ]

// const elements=(
//     <div>
//         <ul>{fruits}</ul>
//     </div>
// )

// const todos=[
//     {
//         id:1,
//         title:'eat'
//     },
//     {
//         id:2,
//         title:'sleep'
//     },
//     {
//         id:3,
//         title:'walk'
//     }
// ]

// const todosList=[]
// todos.forEach((item,index=2)=>{
//     todosList.push(<li key={index}>{item.title}</li>)
// })

// 循环添加元素
// const todosList=todos.map((item,index)=>{
//     return <li key={index}>{item.title}</li>
// })

//ES6 推荐在函数中使用 let 定义变量
//const 用来声明一个常量 (值类似值不能改变，引用类型地址不能改变)
//let 和 const 只在最近的一个块中（花括号中）有效

function Hello(props){
    return (
        <div className="aside">
            <p>hello {props.name}</p>
        </div>
    )
}

const elements=(
    <div>
        {/* 匿名调用函数 */}
        <button onClick={()=>alert('hello world')}>点击</button>
    </div>
)

// ReactDOM.render(
//     <Hello name="ali"></Hello>,
//     document.getElementById('root')
// )



ReactDOM.render(
     <App/>,
    document.getElementById('root')
)