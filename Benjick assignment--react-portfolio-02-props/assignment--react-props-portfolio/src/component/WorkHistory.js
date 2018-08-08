import React,{Component} from "react"
import Job 				from "./Job"
import { skills, eduList, jobsList } from "../data/datasource"

class Workhistory extends Component{
	render(){
		return(
			<section>
			   <h4>Work Experience</h4>
			    <div class="job-timeline">
		            { jobsList.map(function(eachJob) {
		           		 return <Job data3= { eachJob }/>
		        	}) }

			    </div>
			</section>
		);
	}
}

export default Workhistory;