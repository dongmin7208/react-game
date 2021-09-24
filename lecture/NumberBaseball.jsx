import React, { Component } from 'react';

getNumbers = () => {  //숫자 네 개를 겹치지않고 랜덤하게 뽑는 함수

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
    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxlength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>試投: {this.state.tries.length}</div>
                <ul>
                    {['like', 'like', 'like', 'like', 'like'].map(() => {
                        return (
                            <li>like</li>
                        )
                    })}
                    <li />
                </ul>
            </>
        )
    }
}
export default NumberBaseball; // import NumberBaseball