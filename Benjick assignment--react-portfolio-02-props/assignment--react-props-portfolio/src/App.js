import React, { Component } from 'react';
import WorkHistory from "./component/WorkHistory"
import EducationHistory from "./component/EducationHistory"
import SkillList from "./component/SkillList"

class App extends Component {
  render() {
    return (
      <div id='app-container'>
        <SkillList />
        <EducationHistory />
        <WorkHistory />

      </div>

    );
  }
}

export default App;
