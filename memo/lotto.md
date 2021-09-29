  componentDidMonut(){
        for (let i = 0; i< this.state.winNumbers.length -1; i++){
            setTimeout(()=> {
                
            })
        }
    }

    let을 써서 클로저 문제가 안생긴다.

    useMemo: 복잡한 함수 결괏값을 기억
    getNumbers 계속 호출되니까 useMemo를 써줘서 그 값을 기억해줘서 계속안불러줌
    useRef: 일반 값을 기억

    useCallback : 함수를 기억하는것

    훅스는 순서가 중요.
    조건문 안에 절대 넣으면 안 되고 함수나 반복문 안에도 웬만하면 넣으면 안됨.
    useEffect,callback,memo()안에 useState,넣으면 안뎀,
    for() 안에는 useState를 넣어도되긴되는데 추천안함.
    훅스들은 최상위 바깥에다 빼서 실행순서가 같게끔 만드는게 좋음.