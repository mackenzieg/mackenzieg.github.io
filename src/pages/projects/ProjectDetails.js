import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import Main from '../../layouts/Main';
import projects from '../../data/projects/projects';

class ProjectDetails extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    const project = projects.projectDetails[this.props.match.params.projectId];

    if (project) {
      this.setState({
        markdown: project.markdown,
      });
    }
  }

  render() {
    const renderers = {
      image: ({
        alt,
        src,
        title,
      }) => (
        <img alt={alt} src={src} title={title} style={{ maxWidth: '100%' }} />
      ),
    };
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
          {!this.state.markdown
            && <div><p>Project Not Found</p><Link to="/projects" className="button"><p>Go back</p></Link></div>}
          {this.state.markdown
            && <ReactMarkdown source={this.state.markdown} renderers={renderers} />}
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
