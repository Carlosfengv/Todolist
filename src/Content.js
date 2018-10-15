import React,{ Component } from 'react';
import FormContro from './form-control';
import Item from './list-item';
import moment from "moment";

class Content extends Component{
    constructor(props){
        super(props);
        this.state={
            unfinished: 0,
            isShow: false,
            list:[],
            addValue: ""
        }

    }
    delitem = (item) =>{
        const delitems = [...this.state.list];
        // splice(删除内容,删除长度)
        delitems.splice(item,1)
        let Filte = delitems.filter(items => !items.Finished).length;
        this.setState({
            list: delitems,
            unfinished: Filte
        })
    }
    toogle = (item,index) =>{
        const total = [...this.state.list]
        let EditorItem = !item.Finished;
        total[index].Finished = EditorItem;
        this.updateUnfinished
        let Filte = this.state.list.filter(items => !items.Finished).length
        this.setState({
            list: total,
            unfinished: Filte
        })
        /* console.log(Filte) */
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
        const item = { content: this.state.addValue,time: statusPassTime ,Finished: false};
        TotalList.push(item);
        let Filte = this.state.list.filter(items => !items.Finished).length + 1;
        this.setState({
            list: TotalList,
            isShow: false,
            addValue: "",
            unfinished: Filte
        });
        //将添加的数组存储到 localstroage 中
        localStorage.setItem("list",JSON.stringify(TotalList))

    }
    render(){
        return <div className="Content">
            <FormContro isShow={this.state.isShow}
                        total={this.state.list.length}
                        unfinished={this.state.unfinished}
                        onClick={this.Additem}  
                        onChange ={this.GetValue}
                        value={this.state.addValue}>
            </FormContro>
            <div className="ListContainer">
                <ul>
                    { this.state.list.map((items,index)=>{
                        return <li key={index}>
                                 <Item 
                                 isfinish = {items.Finished}
                                 content ={items.content}
                                 time={items.time}
                                 onClick={()=>this.delitem(index)}
                                 onToggle={()=>this.toogle(items,index)}
                                 ></Item>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    }
}

export default Content;