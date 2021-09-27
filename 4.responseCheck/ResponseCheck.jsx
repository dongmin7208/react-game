import React, { useState, useRef, useCallback, useMemo } from 'react';

const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('クリックしてスタート');
    const [result, setResult] = useState([]);
    const timeout = useRef(null);
    const startTime = useRef(0);
    const endTime = useRef(0);

    const onClickScreen = useCallback(() => {
        if (state === 'waiting') {
            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('今クリック');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
            setState('ready');
            setMessage('緑色になったらクリック');
        } else if (state === 'ready') { // 성급하게 클릭
            clearTimeout(timeout.current);
            setState('waiting');
            setMessage('早い！');
        } else if (state === 'now') { // 반응속도 체크
            endTime.current = new Date();
            setState('waiting');
            setMessage('クリックしてスタート');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current];
            });
        }
    }, [state]);
    const onReset = useCallback(() => {
        setResult([]);
    }, []);

    const renderAverage = () => {
        return result.length === 0
            ? null
            : <>
                <div>平均時間: {result.reduce((a, c) => a + c) / result.length}ms</div>
                <button onClick={onReset}>リセット</button>
            </>
    };

    return (
        <>
            <div
                id="screen"
                className={state}
                onClick={onClickScreen}
            >
                {message}
            </div>
            {renderAverage()}
        </>
    );
};

export default ResponseCheck;