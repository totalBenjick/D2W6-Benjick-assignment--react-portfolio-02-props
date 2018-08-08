import React,{Component} from "react"
import EduTitle from "./EduTitle"
import { skills, eduList, jobsList } from "../data/datasource"

class EducationHistory extends Component{
	render(){
		return(
			<section>
			  <h4>Education</h4>

			  <div class="degree-list">
				{eduList.map(function(eachDegree){
					return <EduTitle data={eachDegree} />
				})}

			  </div>

			</section>
		);
	}
}


export default EducationHistory;