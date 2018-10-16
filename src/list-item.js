import React from 'react';


const Item = (props) =>{


    return <li>
                <div className="Listitem" id={props.id}>
                    {props.isfinish? <span className="Finish" onClick={props.onToggle}></span> : <span onClick={props.onToggle} className="Unfinished"></span> }
                    <div className={
                        props.isfinish? "title finished" : "title"
                    }>
                        <h6>{ props.content }</h6>
                        <span>{ props.time }</span>
                    </div>
                    <button onClick={props.onClick}>删除</button> 
                   
            </div>
            </li>
}

export default Item;