import {
  PythonIcon, FastApiIcon, DockerIcon, PostgreSQLIcon, OpenAIIcon,
  LangChainIcon, LangGraphIcon, GeminiIcon, MCPIcon, N8nIcon, Github,
} from '../components/shared';
import {
  ReactIcon, TailwindIcon, FlutterIcon, RedisIcon, MongodbIcon,
} from '../components/skillIcons';

// Maps every distinct `tech` string used across src/data/projects.js to a
// display icon + case-study category + one-line description. Keyed by the
// exact strings already in use — not a fuzzy match — so new tech entries
// need a new key here (or fall back to the 'Other' bucket automatically).
export const TECH_LOOKUP = {
  // Frontend
  React: { icon: ReactIcon, category: 'Frontend', description: 'Component-based UI library for building the client interface.' },
  'Tailwind CSS': { icon: TailwindIcon, category: 'Frontend', description: 'Utility-first CSS framework for rapid, consistent styling.' },
  'Framer Motion': { icon: null, category: 'Frontend', description: 'Animation library for scroll reveals, transitions, and gestures.' },
  'Three.js': { icon: null, category: 'Frontend', description: 'WebGL 3D graphics library for real-time rendered visuals.' },
  Flutter: { icon: FlutterIcon, category: 'Frontend', description: 'Cross-platform UI toolkit for mobile and desktop apps.' },

  // Backend
  Python: { icon: PythonIcon, category: 'Backend', description: 'Primary backend language for services and AI pipelines.' },
  FastAPI: { icon: FastApiIcon, category: 'Backend', description: 'High-performance async Python web framework powering the API layer.' },
  'Raspberry Pi': { icon: null, category: 'Backend', description: 'Embedded compute running on-device inference and control logic.' },

  // AI
  OpenAI: { icon: OpenAIIcon, category: 'AI', description: 'LLM provider used for reasoning and generation.' },
  'OpenAI API': { icon: OpenAIIcon, category: 'AI', description: 'LLM provider used for reasoning and generation.' },
  'Gemini API': { icon: GeminiIcon, category: 'AI', description: "Google's multimodal LLM used for agent reasoning." },
  'Google Gemini': { icon: GeminiIcon, category: 'AI', description: "Google's multimodal LLM used for agent reasoning." },
  LangChain: { icon: LangChainIcon, category: 'AI', description: 'Framework for composing LLM calls, tools, and retrieval.' },
  LangGraph: { icon: LangGraphIcon, category: 'AI', description: 'Graph-based orchestration for multi-agent workflows.' },
  'Agentic AI': { icon: MCPIcon, category: 'AI', description: 'Autonomous agents that reason, plan, and call tools.' },
  RAG: { icon: null, category: 'AI', description: 'Retrieval-Augmented Generation for grounded, context-aware answers.' },
  YOLOv8: { icon: null, category: 'AI', description: 'Real-time object detection model for computer vision.' },
  YOLO: { icon: null, category: 'AI', description: 'Real-time object detection model for computer vision.' },
  OpenCV: { icon: null, category: 'AI', description: 'Computer vision library for image and video processing.' },
  'Finance APIs': { icon: null, category: 'AI', description: 'Market/financial data feeds used for grounded analysis.' },

  // Database
  PostgreSQL: { icon: PostgreSQLIcon, category: 'Database', description: 'Relational database for structured application data.' },
  Redis: { icon: RedisIcon, category: 'Database', description: 'In-memory store used for caching and session state.' },
  MongoDB: { icon: MongodbIcon, category: 'Database', description: 'Document database for flexible, schema-less data.' },

  // Automation
  n8n: { icon: N8nIcon, category: 'Automation', description: 'Visual workflow automation orchestrating agent and business logic.' },
  Webhooks: { icon: null, category: 'Automation', description: 'Event-driven integration triggers between services.' },
  'Google Sheets API': { icon: null, category: 'Automation', description: 'Live sync of reservations, orders, and customer data.' },

  // Deployment
  Docker: { icon: DockerIcon, category: 'Deployment', description: 'Containerized deployment for consistent, portable environments.' },
  Git: { icon: null, category: 'Deployment', description: 'Version control for tracking and collaborating on the codebase.' },
  GitHub: { icon: Github, category: 'Deployment', description: 'Source hosting, CI, and issue tracking.' },
};

export const getTechMeta = (name) =>
  TECH_LOOKUP[name] || { icon: null, category: 'Other', description: '' };

// Groups a project's `tech` array into { category: [{ name, ...meta }] }
// preserving a fixed, sensible category display order.
const CATEGORY_ORDER = ['Frontend', 'Backend', 'AI', 'Database', 'Automation', 'Deployment', 'Other'];

export const groupTechByCategory = (techList = []) => {
  const buckets = {};
  techList.forEach((name) => {
    const meta = getTechMeta(name);
    if (!buckets[meta.category]) buckets[meta.category] = [];
    buckets[meta.category].push({ name, ...meta });
  });
  return CATEGORY_ORDER
    .filter((cat) => buckets[cat]?.length)
    .map((cat) => ({ category: cat, items: buckets[cat] }));
};
