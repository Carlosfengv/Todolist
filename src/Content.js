import React,{ Component } from 'react';
import FormContro from './form-control';
import Item from './list-item';
import moment from "moment";

class Content extends Component{
    constructor(props){
        super(props);
        this.state={
            isShow: false,
            list:[],
            addValue: ""
        }

    }
    delitem = (item) =>{
        const delitems = [...this.state.list];
        // splice(删除内容,删除长度)
        delitems.splice(item,1)
        this.setState({
            list: delitems
        })
    }
    GetValue = (e) =>{
        if(e.target.value.length===0){
            this.setState({
                isShow: !this.state.isShow,
                addValue: ""
            })
        }else{
            this.setState(
                this.setState({
                    isShow: true,
                    addValue: e.target.value
                })
            )
        }
    }
    Additem = ()=>{
        let statusPassTime = moment().format('YYYY-MM-DD HH:mm:ss');  
        const TotalList = [...this.state.list];
        const item = { content: this.state.addValue,time: statusPassTime };
        TotalList.push(item);
        this.setState({
            list: TotalList,
            isShow: false,
            addValue: ""
        })

    }
    render(){
        return <div className="Content">
            <FormContro isShow={this.state.isShow}  onClick={this.Additem} onChange ={this.GetValue} value={this.state.addValue}></FormContro>
            <div className="ListContainer">
                <ul>
                    { this.state.list.map((items,index)=>{
                        return <li key={index}>
                                 <Item 
                                 content ={items.content}
                                 time={items.time}
                                 onClick={()=>this.delitem(index)}
                                 ></Item>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    }
}

export default Content;