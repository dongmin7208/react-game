import React, { Component } from 'react';
import Try from './Try';

function getNumbers() {  //숫자 네 개를 겹치지않고 랜덤하게 뽑는 함수

};

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = () => {

    }
    onChangeInput = () => {

    }
    fruits = [
        { fruit: 'apple', taste: '美味しい' },
        { fruit: 'banana', taste: '美味しい２' },
        { fruit: 'apple１', taste: '美味しい３' },
        { fruit: 'apple２', taste: '美味しい４' },
        { fruit: 'apple３', taste: '美味しい５' },

    ]
    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>試投: {this.state.tries.length}</div>
                <ul>
                    {this.fruits.map((v, i) => {
                        return (
                            <Try value={v} index={i} /> //Reactのprops!
                        );
                    })}
                </ul>
            </>
        )
    }
}
export default NumberBaseball; // 이렇게 하면 이렇게 가져와야함.import NumberBaseball 디폴트는 한번만쓸수있음. 