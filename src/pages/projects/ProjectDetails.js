import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Main from '../../layouts/Main';
import projects from '../../data/projects/projects';

class ProjectDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Project Not Found',
      contents: <Link to="/projects"><p>Go back</p></Link>,
    };
  }

  componentDidMount() {
    const project = projects.projectDetails[this.props.match.params.projectId];

    if (project) {
      this.setState({
        title: project.title,
        contents: project.contents,
      });
    }
  }

  render() {
    return (
      <Main
        title="Microplastic Resonator"
        description="Learn about Mackenzie Goodwin's projects."
      >

        <article className="post" id="projects">
          <header>
            <div className="title">
              <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
              <p>Some of the projects I like</p>
            </div>
          </header>
          <p>{this.state.title}</p>
          {this.state.contents}
        </article>
      </Main>
    );
  }
}

ProjectDetails.defaultProps = {
  match: null,
};

ProjectDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired,
    }),
  }),
};

export default ProjectDetails;
