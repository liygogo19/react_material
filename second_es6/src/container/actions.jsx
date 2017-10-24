import React, {Component} from 'react'
import { Button } from 'zent'

class Action extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div className="app__actions">
            <Button onClick={this.props.confirmTake} type="primary" >确认提货</Button>
            <Button onClick={this.props.allocationChange} type="primary" >提货分配</Button>
            <Button>取消分配</Button>
        </div>);
    }
}

export default Action;