import React, {Component} from "react"

class Job extends Component{
	render (){
		return(
		 <div class="job">
	        <div class="job__years">
	          <h6 class="job__end">{this.props.data3.end}</h6>
	          <h6 class="job__start">{this.props.data3.start}</h6>
	        </div>	
	        
	        <h5 class="job__title">{this.props.data3.title}</h5>
	        <h5 class="job__company">{this.props.data3.company}</h5>
	        <p class="job__description">{this.props.data3.description}</p>
	      </div>
		);
	}
}
export default Job;