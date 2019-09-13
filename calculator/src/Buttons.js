import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';
import axios from 'axios';

class Buttons extends Component {
    constructor(props){
        super(props);
        this.state={
          number1:'',
          number2:'',
          operation:'',
          result:'',
          entered: 0,
          send: ''
        }

        this.getValue = this.getValue.bind(this);
    }

    getValue(event){
        var temp = event.target.value;
        if(temp === 'AC'){
            this.setState({
                number1: '',
                number2: '',
                operation: '',
                result: '',
                entered: 0,
                send: ''
            })
        }
        
        else if(temp === '+' || temp === '-' || temp === '*' || temp === '/'){
            this.setState({
                operation: temp,
                send: temp,
                entered: 1
            })
        }
        else if(temp === '='){
            var m = this.state.number1;
            var n = this.state.number2;
            axios.post('http://localhost:3001/calci', {
            n1: m,
            n2: n,
            op: this.state.operation
            }).then(res=>{
            this.setState({result: res.data,
                           send: res.data })
        })
        }
        else{
            if(this.state.entered === 0){
                var x = this.state.number1;
                x = x + event.target.value;
                this.setState({
                    number1: x,
                    send: x
                })
                
            }
            else{
                this.setState({
                    send: ''
                })
                var y = this.state.number2;
                y = y + event.target.value;
                this.setState({
                    number2: y,
                    send: y
                })
            }
        }
    }

    render(){
        return(
            <div>
                <Display number={this.state.send}/>
                <div className="grp">
                    <Button value="0" getValue={this.getValue}/>
                    <Button value="4" getValue={this.getValue}/>
                    <Button value="8" getValue={this.getValue}/>
                    <Button value="/" getValue={this.getValue}/>
                </div>

                <div className="grp">
                    <Button value="1" getValue={this.getValue}/>    
                    <Button value="5" getValue={this.getValue}/>
                    <Button value="9" getValue={this.getValue}/>
                    <Button value="*" getValue={this.getValue}/>
                </div>
                
                <div className="grp">
                    <Button value="2" getValue={this.getValue}/>
                    <Button value="6" getValue={this.getValue}/>
                    <Button value="+" getValue={this.getValue}/>
                    <Button value="=" getValue={this.getValue}/>
                </div>
                
                <div className="grp">
                    <Button value="3" getValue={this.getValue}/>
                    <Button value="7" getValue={this.getValue}/>
                    <Button value="-" getValue={this.getValue}/>
                    <Button value="AC" getValue={this.getValue}/>
                </div>
                
            </div>
        );
    }
}

export default Buttons;