import React, { Component } from 'react';
import Try from './Try';

const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
};
class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],  //push use X!!!!
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.value === this.state.answer.join('')) {
            this.setState({
                result: 'homerun!',
                tries: [...this.state.tries, { try: this.state.value, result: 'homerun!' }],

            })
        } else {
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let
        }
        onChangeInput = (e) => {
            this.setState({
                value: e.target.value,
            })
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
                                <Try key={v.fruit + v.taste} value={v} index={i} /> //Reactのprops!
                            );
                        })}
                    </ul>
                </>
            )
        }
    }
export default NumberBaseball; // 이렇게 하면 이렇게 가져와야함.import NumberBaseball 디폴트는 한번만쓸수있음. 