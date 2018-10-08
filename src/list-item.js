import React from 'react';


const Item = (props) =>{


    return <div className="Listitem">
                    <img src={require('./icon/touxiang.jpg')}></img>
                    <div className="title">
                        <h6>{ props.content }</h6>
                        <span>{ props.time }</span>
                    </div>
                    <button onClick={props.onClick}>删除</button> 
                   
            </div>
}

export default Item;