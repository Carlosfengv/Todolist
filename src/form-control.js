import React,{ Component } from 'react';



class FormControl extends Component{
    constructor(props){
        super(props);
        this.state={
            isShow: this.props.isShow,
        }
    }
/*     showBtn = (event) =>{
        if(event.target.value.length===0){
            this.setState({
                isShow: !this.state.isShow
            })
        }else{
            this.setState(
                this.setState({
                    isShow: true
                })
            )
        }
    } */

    render(){
        return <div className="form">
                    <div className="form-filter">
                       <span className="item active">待办<span className="num">{this.props.unfinished}</span></span>
                       <span className="item">全部<span className="num">{this.props.total}</span></span>
                    </div>
                    <div className="form-control">
                        <div className="icon"><img alt="mail" src={require('./icon/mail.svg')}></img></div>
                        <input  onChange={this.props.onChange}  onBlur={this.props.onBlur} placeholder="请输入待办事项" defaultValue={this.props.defaultValue} value={this.props.value}></input>
                        {
                            this.props.isShow? <button onClick={this.props.onClick} >Add</button> :null
                        }
                    </div>
                </div>
    }
}

export default FormControl;