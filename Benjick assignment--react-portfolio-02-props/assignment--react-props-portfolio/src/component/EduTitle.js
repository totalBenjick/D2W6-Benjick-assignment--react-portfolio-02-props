import React,{Component} from "react"

class EduTitle extends Component{
	render(){
		return(
		    <div class="degree">
		      <h5 class="degree__institute">{this.props.data.institute}</h5>
		      <p class="degree__field">{this.props.data.fieldOfStudy}</p>
		      <p class="degree__dates">{this.props.data.dates}</p>
		    </div>
		);
	}
}

export default EduTitle;