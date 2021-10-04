import React, { Component, useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';

function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}


const Lotto = () => {
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);
    //ajax use EX)
    // //componentDidUpdate에 ajax를 사용하고싶을때
    // useEffect( () => {
    //     //ajax
    // }, []);
    // const mounted = useRef( false);
    // useEffect( () => {
    //     if (!mounted.current) {
    //         mounted.current = true;
    //     }else {
    //         //ajax
    //     }
    // }, [바뀌는값])//componentDidUpdate만,com

    useEffect(() => {
        console.log('useEffect');
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => { //timeouts.current바뀌는게아님
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
        return () => {
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            })
        }
    }, [timeouts.current]) //input자리가 빈배열이면 componentDidMount랑 같은역할
    //배열에 요소가있으면 componentDidMount랑 componentDidUpdate둘다수행
    useEffect(() => {
        console.log('lotto 数を作る.');
    }, [winNumbers]);

    const onClickRedo = useCallback(() => {
        console.log('onClickRedo');
        console.log(winNumbers);
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = []; //timeouts.current이 바뀜
    }, [winNumbers]);
    return (
        <>
            <div>あたり数</div>
            <div id="결과창">
                {winBalls.map((v) => <Ball key={v} number={v} />)}
            </div>
            <div>ボーナス数!</div>
            {bonus && <Ball number={bonus} onClick={onClickRedo} />}
            {redo && <button onClick={onClickRedo}>もう一度</button>}
        </>
    );
}


export default Lotto;
