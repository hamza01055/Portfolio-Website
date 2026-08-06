import React from 'react';
import { AlertTriangle } from 'lucide-react';
import ProseSection from './ProseSection';

const ProblemSection = ({ project }) => (
  <ProseSection
    id="problem"
    pretitle="The Problem"
    title="The real-world problem"
    icon={AlertTriangle}
    accentClass="text-red-400"
    body={project.challenge}
  />
);

export default ProblemSection;
