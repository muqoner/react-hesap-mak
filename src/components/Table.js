import React, { Component } from 'react'


class Table extends Component {
    
    constructor(props){
        super(props)
        this.onClickCardHeader = this.onClickCardHeader.bind(this)
        this.result = this.result.bind(this)
        this.onClickTable=this.onClickTable.bind(this)
        this.state={
            val:"",
            num1:"",
            num2:"",
            sonuc:""
        }
        
    }
    onClickCardHeader(e){
            if(e.target.id === "input1"){
                this.onClickTable
            } 
    }
    
    onClickTable(e){
        if(e.target.value !==undefined){
            document.getElementById("input1").value+=e.target.value
                this.setState({
                    val:document.getElementById("input1").value
                })
        }
    }
    result(){
        let input=document.getElementById("input1")
        let pVal=document.getElementById("showValue")
        if(this.state.val.indexOf("x")>0){
            this.setState({num1:this.state.val.split("x")[0],num2:this.state.val.split("x")[1]})
            
            setTimeout(() => {
                this.setState({sonuc:this.state.num1*this.state.num2})
                pVal.innerText =(this.state.val+"="+this.state.sonuc)
                input.value=""
            }, 100);
            
            
        }else if(this.state.val.indexOf("+")>0){
            this.setState({num1:Number(this.state.val.split("+")[0]),num2:Number(this.state.val.split("+")[1])})
            setTimeout(() => {
                this.setState({sonuc:this.state.num1+this.state.num2})
                pVal.innerText =(this.state.val+"="+this.state.sonuc)
                input.value=""
            }, 100);
        }else if(this.state.val.indexOf("-")>0){
            this.setState({num1:Number(this.state.val.split("-")[0]),num2:Number(this.state.val.split("-")[1])})
            setTimeout(() => {
                this.setState({sonuc:this.state.num1-this.state.num2})
                pVal.innerText =(this.state.val+"="+this.state.sonuc)
                input.value=""
            }, 100);
            
        }else if(this.state.val.indexOf("/")>0){
            this.setState({num1:Number(this.state.val.split("/")[0]),num2:Number(this.state.val.split("/")[1])})
            setTimeout(() => {
                this.setState({sonuc:this.state.num1/this.state.num2})
                pVal.innerText =(this.state.val+"="+this.state.sonuc)
                input.value=""
            }, 100);
        }else{
            pVal.innerText="lütfen geçerli bir işlem girin!"
        }
    }
    deleteItem(){
        let val = document.getElementById("input1").value
        val = val.substr(0,val.length-1)
        document.getElementById("input1").value=val
    }
    render() {
        return (
            <div className="row m-3">
                <div className=" col-sm-2 col-md-2 col-lg-3 ">
                    <div>
                        <div id="card" className="card">
                            <div onClick={this.onClickCardHeader} className="card-header bg-dark">
                                <div id="card-header">
                                    <p className="text-white" id="showValue"></p>
                                    <div className="input-group input-group-sm mb-2">
                                        <input id="input1" type="text" className={`form-control`}/>
                                        <div className="input-group-append">
                                        <a className="btn btn-danger" onClick={this.deleteItem}><i className="fas fa-backspace"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div  className="card-body p-0 mb-0">
                                <table id="table" onClick={this.onClickTable} className="table table-dark table-lg mb-0 ">
                                    <tbody>
                                        <tr>
                                            <td><button value="1" className="btn btn-danger btn-sm">1</button></td>
                                            <td><button value="2" className="btn btn-danger btn-sm">2</button></td>
                                            <td><button value="3" className="btn btn-danger btn-sm">3</button></td>
                                            <td><button value="+"  className="btn btn-danger btn-sm">+</button></td>
                                            <td><button value="x"  className="btn btn-danger btn-sm">x</button></td>
                                        </tr>
                                        <tr>
                                            <td><button value="4" className="btn btn-danger btn-sm">4</button></td>
                                            <td><button value="5" className="btn btn-danger btn-sm">5</button></td>
                                            <td><button value="6" className="btn btn-danger btn-sm">6</button></td>
                                            <td><button value="-" className="btn btn-danger btn-sm">-</button></td>
                                            <td><button value="/" className="btn btn-danger btn-sm">/</button></td>
                                        </tr>
                                        <tr>
                                            <td><button value="7" className="btn btn-danger btn-sm">7</button></td>
                                            <td><button value="8" className="btn btn-danger btn-sm">8</button></td>
                                            <td><button value="9" className="btn btn-danger btn-sm">9</button></td>
                                            <td><button value="0" className="btn btn-danger btn-sm">0</button></td>
                                            <td><button onClick={this.result} className="btn btn-danger btn-sm">=</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Table
