import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { PageTransition } from '../components/case-study/motion.jsx';
import ProjectHero from '../components/case-study/ProjectHero';
import ProjectOverview from '../components/case-study/ProjectOverview';
import ProblemSection from '../components/case-study/ProblemSection';
import SolutionSection from '../components/case-study/SolutionSection';
import ArchitectureSection from '../components/case-study/ArchitectureSection';
import FeatureGrid from '../components/case-study/FeatureGrid';
import GallerySection from '../components/case-study/GallerySection';
import TechStack from '../components/case-study/TechStack';
import DevelopmentChallenges from '../components/case-study/DevelopmentChallenges';
import ResultsSection from '../components/case-study/ResultsSection';
import MyRole from '../components/case-study/MyRole';
import LiveDemoSection from '../components/case-study/LiveDemoSection';
import GitHubSection from '../components/case-study/GitHubSection';
import NavigationFooter from '../components/case-study/NavigationFooter';
import ProjectCTA from '../components/case-study/ProjectCTA';
import ProjectNotFound from './ProjectNotFound';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = PROJECTS.find((entry) => entry.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [id]);

  if (!project) return <ProjectNotFound />;

  return (
    <PageTransition className="min-h-screen bg-[#0a0a0a] text-white">
      <main>
        <ProjectHero project={project} />
        <ProjectOverview project={project} />
        <ProblemSection project={project} />
        <SolutionSection project={project} />
        <ArchitectureSection project={project} />
        <FeatureGrid project={project} />
        <GallerySection project={project} />
        <TechStack project={project} />
        <DevelopmentChallenges project={project} />
        <ResultsSection project={project} />
        <MyRole project={project} />
        <LiveDemoSection project={project} />
        <GitHubSection project={project} />
        <NavigationFooter project={project} allProjects={PROJECTS} />
        <ProjectCTA />
      </main>
    </PageTransition>
  );
};

export default ProjectDetail;
