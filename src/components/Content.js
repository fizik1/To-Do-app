import './content.css'
import 'boxicons'
import { useNavigate } from 'react-router-dom';
import React from 'react'



function Content() {
    let navigate = useNavigate();
    let json = localStorage.getItem('json')||Boolean(false)
    if (json ==false ){
        return (<div></div>)
    }
    else {
        let tuplam = JSON.parse(json)
        let vazefa = tuplam.map((vazefa,key)=>{


    
            let input = React.createRef()
            let readonly=true
            const handlerDelete = (e)=>{
                tuplam.splice(key,1)
                let json = JSON.stringify(tuplam)
                localStorage.setItem('json',json)
                window.location.reload();
                // navigate('/');
            }
            const handlerEdit=(e)=>{
    
                vazefa.readonly = false
                vazefa.edit = false
                vazefa.check = false
                console.log(readonly);
                tuplam.splice(key,1,vazefa)
                let json = JSON.stringify(tuplam)
                localStorage.setItem('json',json)
                navigate('/');
    
            }
            const handlerCheck = (e)=>{
                vazefa.readonly = true
                vazefa.edit = true
                vazefa.check = true
                vazefa.text=input.current.value
                tuplam.splice(key,1,vazefa)
                let json = JSON.stringify(tuplam)
                localStorage.setItem('json',json)
                navigate('/');
            }
            if (json==false){
                alert('xato')
            }
            else         return(
                <div className="vazefa" style={{backgroundColor: vazefa.bgColor}}>
                    <input type="text" maxLength='30' defaultValue={vazefa.text} readOnly={vazefa.readonly} ref={input} />
                    <div className='buttons'>
                        <button onClick={(e)=>handlerDelete(e)}><box-icon name='x-circle' color='#fff'></box-icon></button>
                        <button className={vazefa.edit ?'active':'deactive'} onClick={(e)=>handlerEdit(e)}><box-icon type='solid' name='edit-alt' color='#fff' size='sm'></box-icon></button>
                        <button className={vazefa.check ?'deactive':'active'} onClick={(e)=>handlerCheck(e)}><box-icon name='check-circle' color='#fff'></box-icon></button>
                    </div>
                </div>
            )
        })
        return (
            <div className="content">
                {vazefa}
            </div>
        )
    }
}

export default Content;