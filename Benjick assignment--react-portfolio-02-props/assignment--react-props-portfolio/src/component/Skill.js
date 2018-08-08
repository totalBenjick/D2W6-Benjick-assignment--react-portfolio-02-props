import React,{Component} from "react"

class Skill extends Component{
	render(){
		return(
			<span class="skills-list__single">{this.props.data}</span>

		);
	}
}

export default Skill;