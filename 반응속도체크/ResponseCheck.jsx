import React, { Component , useState, useRef } from "react";

const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);
    const timeOut = useRef(null);
    const endTime = useRef();
    const startTime = useRef();

    const onClickScreen = () => {
        if (state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요.');
            timeOut.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000) // 2초 ~ 3초 랜덤.
        } else if (state === 'ready') {
            clearTimeout(this.timeout);
            setState('waiting');
            setMessage('너무 성급하시군요! 초록색일떄 클릭하세욥!');
        } else if (state === 'now') {
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요.');
            setResult( (prevState) => {
                return [...prevState, endTime.current - startTime.current];
            });
        }
    };

    const renderAverage = () => {
        return result.length !== 0
            && <div>평균 시간: {result.reduce((a, c) => a+c) / result.length}</div>
    }

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
    )
}


// class ResponseCheck extends Component{
//     state = {
//         state: 'waiting',
//         message: '클릭해서 시작하세요.',
//         result: [],
//     };
//     timeout;
//     startTime;
//     endTime;
//
//     onClickScreen = () => {
//         const { state, message, result } = this.state;
//         if (state === 'waiting') {
//             this.setState({
//                 state: 'ready',
//                 message: '초록색이 되면 클릭하세요.',
//             });
//             this.timeout = setTimeout(() => {
//                 this.setState( {
//                     state: 'now',
//                     message: '지금 클릭',
//                 })
//                 this.startTime = new Date();
//             }, Math.floor(Math.random() * 1000) + 2000) // 2초 ~ 3초 랜덤.
//         } else if (state === 'ready') {
//             clearTimeout(this.timeout);
//             this.setState({
//                 state: 'waiting',
//                 message: '너무 성급하시군요! 초록색일떄 클릭하세욥!',
//
//             })
//         } else if (state === 'now') {
//             this.endTime = new Date();
//             this.setState( (prevState) => {
//                 return {
//                     state: 'waiting',
//                     message: '클릭해서 시작하세요.',
//                     result: [...prevState.result, this.endTime - this.startTime],
//                 };
//             });
//         }
//     };
//
//     renderAverage = () => {
//         const { result } = this.state;
//         return this.state.result.length !== 0
//             && <div>평균 시간: {this.state.result.reduce((a, c) => a+c) / this.state.result.length}</div>
//     }
//     render() {
//         const { state, message } = this.state;
//         return (
//             <>
//                 <div
//                     id="screen"
//                     className={state}
//                     onClick={this.onClickScreen}
//                 >
//                     {message}
//                 </div>
//                 {this.renderAverage()}
//             </>
//         )
//     }
// }

export default ResponseCheck;