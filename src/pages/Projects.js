import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import projects from '../data/projects/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Mackenzie Goodwin's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>
            Some of the projects I like. Find most of them on{' '}
            <a href="https://github.com/mackenzieg" target="_blank" rel="noreferrer"><strong>GitHub</strong></a>.
          </p>
        </div>
      </header>
      {projects.projectCards.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
