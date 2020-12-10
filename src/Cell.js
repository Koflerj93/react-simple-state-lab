import React from "react";

class Cell extends React.Component {
    	constructor(props) {
            super(props);
            this.state = { color: props.value }
        }
        toggleColor = () => {
           this.setState({ color: '#333' }) 
            
        }
    render() {
        return <div onClick={this.toggleColor} className="cell" style={{backgroundColor: this.state.color}}></div>
    }
}

export default Cell 