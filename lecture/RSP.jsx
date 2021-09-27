import React, { useState, useRef, useEffect } from 'react';



//클래스의경우 -> constructor -> render -> ref -> componentDidMount
//  (setState/props 바뀔때 -> (shouldComponentUpdate(true)) -> render -> componentDidUpdate)
//부모가나를 없앴을때 -> componentWillUnmount ->소멸
const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
};

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function (v) {
        return v[1] === imgCoord;
    })[0];
};

const RSP = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.바위);
    const [score, setScore] = useState(0);
    const interval = useRef();

    useEffect(() => {  // componentDidMount, comnponentDidUpdate
        interval.current = setInterval(changeHand, 100);
        return () => { // componentWillUnmount 역할}
            clearInterval(interval.current);
        }
    }, [imgCoord]);

    const changeHand = () => {
        if (imgCoord === rspCoords.바위) {
            setImgCoord(rspCoords.가위);
        } else if (imgCoord === rspCoords.가위) {
            setImgCoord(rspCoords.보);
        } else if (imgCoord === rspCoords.보) {
            setImgCoord(rspCoords.바위);
        }
    };
    const onClickBtn = (choice) => () => {
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
            setResult('引き分けた!');
        } else if ([-1, 2].includes(diff)) {
            setResult('勝ちました!')
            setScore((prevScore) => prevScore + 1);
        } else {
            setResult('負けた');
            setScore((prevScore) => prevScore - 1);
        }
        setTimeout(() => {
            interval.current = setInterval(changeHand, 100);
        }, 1000);
    }
    return (
        <>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('바위')}>グ-</button>
                <button id="scissor" className="btn" onClick={onClickBtn('가위')}>チョキ</button>
                <button id="paper" className="btn" onClick={onClickBtn('보')}>パ-</button>
            </div>
            <div>{result}</div>
            <div>現在 {score}点</div>
        </>
    );
}

export default RSP;