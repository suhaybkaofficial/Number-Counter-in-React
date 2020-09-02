import React, { Component } from 'react';
import '../App.css';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
    }
    addCount(e) {
        e.preventDefault();
        this.setState({
          count: this.state.count + 1
        });
      };
      
      lowerCount(e) {
        e.preventDefault();
        this.setState({
          count: this.state.count - 1
        });
      };
    
      resetCount(e) {
        e.preventDefault();
        this.setState({
          count: 0
        });
      };
    
    render() { 
        
        
        return ( 
            <div className="container">
            <div className="counterHeader">
                <h1 className="display-4 text-dark text-center">React Counter</h1>
                </div>
              <div className="counterContent">
                <div className="counterBody">
                <h1 className="display-4 counterNumber">{this.state.count}</h1>
                <div className="counterButtons">
                <button className="btn btn-primary" id="addCount" onClick={(e) => this.addCount(e)}>Add Count</button><br/><br/>
                <button className="btn btn-success" id="lowerCount" onClick={(e) => this.lowerCount(e)}>Lower Count</button><br/><br/>
                <button className="btn btn-danger" id="resetCount" onClick={(e) => this.resetCount(e)}>Reset Counter</button><br/><br/>
                </div>
                </div>
              </div>
            </div>
         );
    }
}
 
export default Counter;