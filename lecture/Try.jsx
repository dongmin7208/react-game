import React, { Component } from 'react';

class Try extends Component {
    render() {
        return (
            <li>
                <b>{this.props.value.fruit}</b> - {this.props.index}
                <div>1</div>
                <div>2</div>
            </li>
        );
    }
};

export default Try;