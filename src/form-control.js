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
        return <div className="form-control">
                <div className="icon"><img alt="mail" src={require('./icon/mail.svg')}></img></div>
                <input  onChange={this.props.onChange}  onBlur={this.props.onBlur} placeholder="输入邮箱邀请项目成员" defaultValue={this.props.defaultValue} value={this.props.value}></input>
                {
                    this.props.isShow? <button onClick={this.props.onClick} >Add</button> :null
                }
            </div>
    }
}

export default FormControl;