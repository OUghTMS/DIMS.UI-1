import React, {Component} from 'react';

export default class AboutSection extends Component {
  render() {
    return (
      <div className="about-section">
        <div className="about-text">
          <h2>Dev incubator management system</h2>
          <p>
            Hello! My name is Misha<br/>
            I created this SPA as part of the Dev incubator team<br/>
            Let me briefly introduce you to the application
          </p>
          <p>
            A management system is a set of policies,<br/>
            processes and procedures used by an organization<br/>
            to ensure that it can fulfill the tasks required<br/>
            to achieve its objectives.
          </p>
          <p>
            For convenient use Dev incubator management system,<br/>
            the app was divided into the roles for all registered users.
          </p>
        </div>
      </div>
    );
  }
}
