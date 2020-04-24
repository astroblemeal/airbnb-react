import React from "react";
import './flat.css'

class Flat extends React.Component {
	render() {  
		const title = this.props.flat.price 
		+ this.props.flat.priceCurrency +  
		" - " + this.props.flat.name;  

      const style = {
      	//Template literals ES6 *modern javascript way
      	// ugly way  "url('" + this.props.flat.imageUrl + "')"
      	backgroundImage: `url('${this.props.flat.imageUrl}')`
      };
		
		return (
			<div className="flat" onClick={this.props.handleClick}>
            <div className="flat-picture" style={style}></div>
            <div className="flat-title"></div>
            {title} 	
           </div>

	   ); 
	}
}

export default Flat;




