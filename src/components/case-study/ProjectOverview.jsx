import React from 'react';
import { Terminal } from 'lucide-react';
import ProseSection from './ProseSection';

const ProjectOverview = ({ project }) => (
  <ProseSection
    id="overview"
    pretitle="Overview"
    title="What is this project?"
    icon={Terminal}
    accentClass="text-blue-400"
    body={project.overview}
  />
);

export default ProjectOverview;
