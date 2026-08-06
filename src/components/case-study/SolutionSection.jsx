import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import ProseSection from './ProseSection';

const SolutionSection = ({ project }) => (
  <ProseSection
    id="solution"
    pretitle="The Solution"
    title="How the platform solves it"
    icon={CheckCircle2}
    accentClass="text-emerald-400"
    body={project.solution}
  />
);

export default SolutionSection;
