import React from 'react'
import { useState } from 'react'


const Calculator = () => {

    const [inputVal, setInputVal] = useState("")





    return (
        <div className='top_Container'>

            <div className="container">

                <h1>React Calculator</h1>
                <div className="inputContainer">
                    <input type="text" value={inputVal} onChange={(e) => { setInputVal(e.target.value) }} />
                </div>

                <div className="btn-Container">

                    <div className='containerbtn'>
                        <div> <button value="1" onClick={(e) => { setInputVal(inputVal + e.target.value) }}>1</button></div>
                        <div><button value="2" onClick={(e) => { setInputVal(inputVal + e.target.value) }}>2</button></div>
                        <div><button value="3" onClick={(e) => { setInputVal(inputVal + e.target.value) }}>3</button> </div>
                    </div>

                    <div className='containerbtn'>
                        <div> <button value="4" onClick={(e) => { setInputVal(inputVal + e.target.value) }}>4</button></div>
                        <div> <button value="5" onClick={(e) => { setInputVal(inputVal + e.target.value) }}>5</button></div>
                        <div><button value="6" onClick={(e) => { setInputVal(inputVal + e.target.value) }}>6</button></div>
                    </div>

                    <div className='containerbtn'>
                        <div><button value="7" onClick={(e) => { setInputVal(inputVal + e.target.value) }}>7</button></div>
                        <div><button value="8" onClick={(e) => { setInputVal(inputVal + e.target.value) }}>8</button></div>
                        <div><button value="9" onClick={(e) => { setInputVal(inputVal + e.target.value) }}>9</button></div>
                    </div>

                    <div className='containerbtn'>
                        <div><button value="0" onClick={(e) => { setInputVal(inputVal + e.target.value) }}>0</button></div>
                        <div><button value="00" onClick={(e) => { setInputVal(inputVal + e.target.value) }}>00</button></div>
                        <div><button value="+" onClick={(e) => { setInputVal(inputVal + e.target.value) }}>+</button></div>
                    </div>

                    <div className='containerbtn'>
                        <div><button value="-" onClick={(e) => { setInputVal(inputVal + e.target.value) }}>-</button></div>
                        <div><button value="*" onClick={(e) => { setInputVal(inputVal + e.target.value) }}>*</button></div>
                        <div><button value="/" onClick={(e) => { setInputVal(inputVal + e.target.value) }}>/</button></div>
                    </div>

                    <div className='containerbtn'>

                        <div><button value="AC" onClick={(e) => { setInputVal(inputVal.slice(0, - 1)) }}>AC</button></div>
                        <div><button value="CE" onClick={(e) => { setInputVal("") }}>CE</button></div>

                        <div>
                            <button value="=" onClick={(e) => {

                                try {
                                    setInputVal(eval(inputVal));
                                } catch {
                                    console.log("Error");
                                }
                            }}>=</button>



                        </div>


                    </div>

                </div>

            </div>







        </div >
    )
}

export default Calculator