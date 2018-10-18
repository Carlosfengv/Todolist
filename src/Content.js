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
            addValue: "",
            checked: true
            
        }
        const Local = this._getLocalStorage('list')
        if(Local===null){
            this._setLocalStorage([])
        }else{
          this._setLocalStorage(Local)
        }
    }
    _getLocalStorage =(value)=>{
        return JSON.parse(localStorage.getItem(value))
    }
    _setLocalStorage =(value)=>{
        localStorage.setItem("list",JSON.stringify(value))
    }
    componentWillMount(){
        const LoadValue = this._getLocalStorage('list');
        let un = LoadValue.filter(items => !items.Finished)
        this.setState({
            list: un,
            unfinished: un.length
        })
        /* console.log(LoadValue) */
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
        const UUID = Math.random().toString().slice(2,17);
        const item = { "content": this.state.addValue,"time": statusPassTime ,"Finished": false,"id":parseInt(UUID)};
        TotalList.push(item);
        let Filte = this.state.list.filter(items => !items.Finished).length + 1;
        this.setState({
            list: TotalList,
            isShow: false,
            addValue: "",
            unfinished: Filte
        });
        //将添加的数组存储到 localstroage 中
        this._setLocalStorage(TotalList);

    }
    delitem = (item) =>{
        const delitems = [...this.state.list];
        // splice(删除内容,删除长度)
        delitems.splice(item,1)
        let Filte = delitems.filter(items => !items.Finished).length;
        this._setLocalStorage(delitems);
        this.setState({
            list: delitems,
            unfinished: Filte
        })
    }
    toogle = (items) =>{
        /* const total = [...this.state.list]
        let EditorItem = !item.Finished;
        total[index].Finished = EditorItem;
        this.updateUnfinished
        let Filte = this.state.list.filter(items => !items.Finished).length
        this.setState({
            list: total,
            unfinished: Filte
        }) */

        // localstorage
        const LoadValue = this._getLocalStorage('list');
        const ids = items.id
        const ID = LoadValue.findIndex(i =>{
            return i.id === ids;
        });
        LoadValue[ID].Finished = !items.Finished;
        if(this.state.checked===true){
            const FilteValue = this.state.list;
            const oID = FilteValue.findIndex( i => {
                return i.id === ids;
            });
            FilteValue[oID].Finished = !items.Finished;
            this.setState({
                list: FilteValue,
                unfinished: LoadValue.filter(items => !items.Finished).length
            })
            console.log(oID)
            
        }else{
            this.setState({
                list: LoadValue,
                unfinished: LoadValue.filter(items => !items.Finished).length
            })
        }
        this._setLocalStorage(LoadValue);
        console.log(LoadValue[ID]);
        
    }
    tabMenu = () =>{
        let LoadValue = this._getLocalStorage('list');
        if(this.state.checked===false){
            const un = LoadValue.filter(items => !items.Finished);
            this.setState({
                list: un,
                checked: !this.state.checked
            })
        }else{
            this.setState({
                list: LoadValue,
                checked: !this.state.checked
            })
        }
        
    }
    render(){
        return <div className="Content">
            <FormContro isShow={this.state.isShow}
                        checked={this.state.checked}
                        total={this._getLocalStorage('list').length}
                        unfinished={this.state.unfinished}
                        onClick={this.Additem}  
                        onChange ={this.GetValue}
                        onToggle = {this.tabMenu}
                        value={this.state.addValue}>
            </FormContro>
            <div className="ListContainer">
                {this.state.list.length !==0? <ul>
                    { this.state.list.map((items,index)=>{
                        return  <Item
                                 key = {items.id}
                                 isfinish = {items.Finished}
                                 content ={items.content}
                                 time={items.time}
                                 onClick={()=>this.delitem(index)}
                                 onToggle={()=>this.toogle(items)}
                                 ></Item>
                    })}
                </ul>:<ul><div className="Nodate"><img src={require('./icon/undraw-empty-xct-9.svg')}></img><p>请添加待办事项</p></div></ul>}
            </div>
        </div>
    }
}

export default Content;