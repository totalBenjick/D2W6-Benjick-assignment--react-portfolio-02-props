import React,{Component} from "react"
import Skill from "./Skill"
import { skills, eduList, jobsList } from "../data/datasource"

class SkillList extends Component{
	render(){
		return(
			<section>
  				<h4>Skills</h4>
  				<div class="skills-list">
  					{skills.map(function(eachSkill){
  					return	<Skill data={ eachSkill } />
  					})}
  				</div>
			</section>	
		);
	}
}
export default SkillList;