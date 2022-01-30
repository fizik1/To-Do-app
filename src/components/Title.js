import './title.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Title() {
    let navigate = useNavigate();

    let json =localStorage.getItem('json')
    let tuplam = JSON.parse(json)||[]
    let input = React.createRef()
    const handler= ()=>{
        let text = input.current.value
        let readonly =true,
            edit=true,
            check=true;
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        let vazefa ={
            text,
            readonly,
            edit,
            check,
            bgColor
        }
        tuplam.push(vazefa)
        let json = JSON.stringify(tuplam)
        localStorage.setItem('json',json)
        input.current.value=''
        console.log(tuplam);
        // window.location.reload()
        navigate('/');
        
    }


    return(
        <div className="title">
            <div className="text">
                <h1>Kun uchun qanday vazifalaringiz bor?</h1>
            </div>
            <div className="writeng-area">
                <div className="input-area">
                    <input type="text" placeholder='Vazefa nomini yozing...' ref={input} maxLength='30' />
                </div>
                <div className="search-area" onClick={handler}>
                    <button>Qo'shish</button>
                </div>
            </div>
        </div>
    )
}

export default Title