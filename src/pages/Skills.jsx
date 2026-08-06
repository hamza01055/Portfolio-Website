import React from 'react';
import { Reveal, SectionHeading } from '../components/shared';
import {
  PythonIcon, FastApiIcon, DockerIcon, PostgreSQLIcon, OpenAIIcon, LangChainIcon,
} from '../components/shared';
import {
  ReactIcon, JavaIcon, JsIcon, TsIcon, CppIcon, CIcon, DartIcon,
  NextjsIcon, HtmlIcon, CssIcon, TailwindIcon, FlutterIcon,
  DjangoIcon, FlaskIcon, NodeIcon, ExpressIcon,
  TensorflowIcon, SklearnIcon, PytorchIcon, AnacondaIcon, NumpyIcon, PandasIcon,
  LanggraphIcon, JupyterIcon, KerasIcon, HuggingfaceIcon, OllamaIcon, OpenCVSkillIcon, MatplotlibIcon,
  MysqlIcon, MongodbIcon, RedisIcon, SqliteIcon,
  AwsIcon, VercelIcon, StreamlitIcon, RenderIcon, FigmaIcon, PostmanIcon, LinuxIcon, VsCodeIcon,
} from '../components/skillIcons';
import { Github as GithubIcon } from '../components/shared';
import { Terminal, Code2 } from 'lucide-react';

// Skill tile: a single large brand icon in a square box, name on hover via
// `title` (kept for accessibility/screen readers even though it's not shown
// visually — a logo grid, not a stat: self-rated percentages don't carry
// real information, a technology either belongs on the list or not).
// Hover-only lift + scale, no continuous motion — every earlier pass in
// this project has been trimming background animation, so this stays
// consistent: it reacts to the cursor and nothing else.
const SkillTile = ({ icon: Icon, label }) => (
  <div
    title={label}
    className="group flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white/70 text-zinc-800 border border-black/5 rounded-2xl transition-all duration-200 hover:border-black/15 hover:-translate-y-1 hover:scale-105 hover:shadow-lg cursor-default backdrop-blur-sm shadow-sm"
  >
    <Icon className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 transition-transform duration-200 group-hover:scale-110" />
  </div>
);

const SKILL_GROUPS = [
  {
    label: 'Programming Languages',
    icon: Code2,
    items: [
      { name: 'Python', icon: PythonIcon },
      { name: 'Java', icon: JavaIcon },
      { name: 'JavaScript', icon: JsIcon },
      { name: 'TypeScript', icon: TsIcon },
      { name: 'C++', icon: CppIcon },
      { name: 'C', icon: CIcon },
      { name: 'Dart', icon: DartIcon },
      { name: 'SQL', icon: MysqlIcon },
    ],
  },
  {
    label: 'Frontend & Mobile',
    icon: Code2,
    items: [
      { name: 'React', icon: ReactIcon },
      { name: 'Next.js', icon: NextjsIcon },
      { name: 'HTML', icon: HtmlIcon },
      { name: 'CSS', icon: CssIcon },
      { name: 'Tailwind CSS', icon: TailwindIcon },
      { name: 'Flutter', icon: FlutterIcon },
    ],
  },
  {
    label: 'Backend',
    icon: Terminal,
    items: [
      { name: 'Django', icon: DjangoIcon },
      { name: 'FastAPI', icon: FastApiIcon },
      { name: 'Flask', icon: FlaskIcon },
      { name: 'Node.js', icon: NodeIcon },
      { name: 'Express', icon: ExpressIcon },
    ],
  },
  {
    label: 'AI & Machine Learning',
    icon: Code2,
    items: [
      { name: 'TensorFlow', icon: TensorflowIcon },
      { name: 'scikit-learn', icon: SklearnIcon },
      { name: 'PyTorch', icon: PytorchIcon },
      { name: 'Anaconda', icon: AnacondaIcon },
      { name: 'NumPy', icon: NumpyIcon },
      { name: 'Pandas', icon: PandasIcon },
      { name: 'LangGraph', icon: LanggraphIcon },
      { name: 'Jupyter', icon: JupyterIcon },
      { name: 'Keras', icon: KerasIcon },
      { name: 'OpenAI', icon: OpenAIIcon },
      { name: 'LangChain', icon: LangChainIcon },
      { name: 'Hugging Face', icon: HuggingfaceIcon },
      { name: 'Ollama', icon: OllamaIcon },
      { name: 'OpenCV', icon: OpenCVSkillIcon },
      { name: 'Matplotlib', icon: MatplotlibIcon },
    ],
  },
  {
    label: 'Databases',
    icon: Terminal,
    items: [
      { name: 'MySQL', icon: MysqlIcon },
      { name: 'PostgreSQL', icon: PostgreSQLIcon },
      { name: 'MongoDB', icon: MongodbIcon },
      { name: 'Redis', icon: RedisIcon },
      { name: 'SQLite', icon: SqliteIcon },
    ],
  },
  {
    label: 'Tools & Platforms',
    icon: Code2,
    items: [
      { name: 'Docker', icon: DockerIcon },
      { name: 'Git & GitHub', icon: GithubIcon },
      { name: 'VS Code', icon: VsCodeIcon },
      { name: 'AWS', icon: AwsIcon },
      { name: 'Vercel', icon: VercelIcon },
      { name: 'Streamlit', icon: StreamlitIcon },
      { name: 'Render', icon: RenderIcon },
      { name: 'Figma', icon: FigmaIcon },
      { name: 'Postman', icon: PostmanIcon },
      { name: 'Linux', icon: LinuxIcon },
    ],
  },
];

// Skills — a categorized inventory of languages, frameworks, and tools.
// Every logo is an inline SVG (see components/skillIcons.jsx): no
// third-party badge CDNs, so the section renders instantly with zero extra
// network requests instead of ~40 hotlinked images.
const Skills = () => (
  <section id="skills" className="py-24 md:py-32 border-t border-black/5 relative overflow-hidden scroll-mt-24">
    <SectionHeading
      pretitle="Stack"
      title="Skills & Technologies"
      highlightText="Technologies"
      highlightClass="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent"
    />

    <div className="max-w-6xl mx-auto px-6">
      <Reveal>
        <p className="max-w-2xl mx-auto text-center text-zinc-400 text-sm md:text-base font-lora leading-relaxed -mt-10 mb-16">
          Languages, frameworks, and tools I reach for when building AI systems end to end.
        </p>
      </Reveal>

      <div className="space-y-10">
        {SKILL_GROUPS.map((group, gi) => (
          <Reveal key={group.label}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <group.icon className="w-4 h-4 text-zinc-500" />
                <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] font-accent">
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {group.items.map((item) => (
                  <SkillTile key={item.name} icon={item.icon} label={item.name} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
