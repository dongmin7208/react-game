리액트가 key를 보고 같은 컴포넌트인지 아닌지 판단해요.
リアクトがキーを見て同じコンポーネントかどうかを判断します。
```
import React, { Component } from 'react';
class NumberBaseball extends Component {

}
export const hello = 'hello'; //import {hello}
export const bye = 'hello'; // import { hello, bye}
export default NumberBaseball; // import NumberBaseball;


node module 문법
node에서는 require 쓰고   // 리액트에서는 import export쓴다 위에 밑에 호환은 된다.
웹팩은 노드로 돌리기때문에 위에부분 import쓰면 에러 const써야함
클라이언트는 웹팩에 들어있는 바벨이 바꿔주기때문에 import 써도됨.
const React = require('react');
exports.hello = 'hello';
module.exports = NumberBaseball;
```
```
{['1','2','3','4',5'].map((v) =>{
    return (
        <li>{v}</li>
    )
})}
```

```
<ul>
{[
{ fruit: '사과', taste: '맛있다'},
{ fruit: '사과1', taste: '맛있다1'},
{ fruit: '사과2', taste: '맛있다2'},
{ fruit: '사과3', taste: '맛있다3'},
{ fruit: '사과4', taste: '맛있다4'},
{ fruit: '사과5', taste: '맛있다5'},
].map( (v) => {
    return (
        <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {v.taste}</li>
    );
})
</ul>
```
render() 안에는 setState 쓰는거아님
