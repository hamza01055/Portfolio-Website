import React from 'react';

// Brand-colored tech icons for the Skills section. Same convention as the
// existing icons in shared.jsx (PythonIcon, FastApiIcon, etc.): flat,
// two-tone, inline SVG, viewBox 0 0 24 24 — zero network requests, renders
// instantly, no third-party CDN dependency (techstack-generator.vercel.app,
// skillicons.dev, shields.io etc. would each be a render-blocking external
// request, working against everything else trimmed in this pass).

export const ReactIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="2.2" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1.3">
      <ellipse cx="12" cy="12" rx="10" ry="4.2"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/>
    </g>
  </svg>
);

export const JavaIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#f89820" d="M8.5 17.5c-1.3.5-2.9.7-2.9 1.5 0 .8 1.9 1.2 3.8 1.1 2.2-.1 3.6-.7 3.6-.7s-.6.6-1.5.9c-2.2.7-6.5.5-6.5-1.1 0-1.3 2.6-1.9 3.5-1.7zM9.3 15c-.8.5-.4 1.1-.4 1.1s1.5-.6 3.5-.4c2.7.3 4.4 1.2 4.4 1.2s-.3-.6-1-1c-2.3-1-4.9-.9-6.5-.9zM11.5 2.5s2.5 2.5-2.5 6.3c-4 3.1-1.4 5.6-1.4 5.6s-1.9-1.1-.6-4.7c1.5-4 4.5-5.6 4.5-7.2zM8 19.7c-3.3.3-5.5-.8-5.5-.8s2 .5 4.5.3c3.4-.3 5.5-1.7 5.5-1.7s-.8 1-4.5 2.2z"/>
    <path fill="#5382a1" d="M13.3 12.3s1.9 1-1.3 1.6c-4.5.9-8.6.5-8.6.5s2.3 1.9 5.9 1.9c5.4 0 9.2-2.3 4-4zm3.9 3.9s.5.4-.5.7c-1.9.6-8 .7-9.9 0-.6-.2.5-.5 1-.6.5-.1.8-.1.8-.1-.9-.6-6 1.3-2.6 1.9 9.4 1.6 17.1-.7 11.2-1.9z"/>
  </svg>
);

export const JsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="4" fill="#f7df1e"/>
    <path fill="#000" d="M15.9 17.6c.4.7 1 1.2 1.9 1.2.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1.4l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2 .4 2.7 1.5l-1.4.9c-.3-.6-.7-.8-1.2-.8-.6 0-.9.3-.9.8 0 .5.3.8 1.2 1.2l.5.2c1.7.7 2.6 1.4 2.6 3.1 0 1.7-1.4 2.7-3.2 2.7-1.8 0-2.9-.9-3.5-1.9l1.4-.9zm-6.9.2c.3.5.6.9 1.2.9.6 0 1-.2 1-1.1v-6.1h1.8v6.1c0 1.9-1.1 2.8-2.7 2.8-1.5 0-2.3-.7-2.8-1.6l1.5-.9z"/>
  </svg>
);

export const TsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="4" fill="#3178c6"/>
    <path fill="#fff" d="M12.7 12.4h3.4v1.6h-1.3v6.4h-1.9v-6.4h-1.3v-1.6zM7.5 18.8c.3.5.8.9 1.5.9.6 0 1-.3 1-.8 0-.5-.4-.7-1.1-1l-.4-.2c-1.1-.5-1.9-1.1-1.9-2.4 0-1.2 1-2.1 2.4-2.1 1 0 1.7.4 2.2 1.2l-1.3.8c-.2-.4-.5-.6-1-.6-.4 0-.7.2-.7.6 0 .4.3.6 1 .9l.4.2c1.3.6 2.1 1.1 2.1 2.5 0 1.4-1.1 2.2-2.6 2.2-1.5 0-2.4-.7-2.9-1.6l1.3-.6z"/>
  </svg>
);

export const CppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#00599c" d="M12 1 21 6.5v11L12 23 3 17.5v-11z"/>
    <path fill="#fff" d="M12 6a6 6 0 1 0 5.2 9l-2-1.2a3.6 3.6 0 1 1 0-3.6l2-1.2A6 6 0 0 0 12 6zm6.8 3.8h1v1h1v1h-1v1h-1v-1h-1v-1h1zm3.5 0h1v1h1v1h-1v1h-1v-1h-1v-1h1z"/>
  </svg>
);

export const CIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#a8b9cc" d="M12 1 21 6.5v11L12 23 3 17.5v-11z"/>
    <path fill="#fff" d="M12 6a6 6 0 1 0 4.2 10.3l-2-1.2a3.6 3.6 0 1 1 0-6.2l2-1.2A6 6 0 0 0 12 6z"/>
  </svg>
);

export const DartIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#00b4ab" d="M2.7 15.6 8.4 21.3 21.3 15V8.4L14.7 2 8.4 8.4z"/>
    <path fill="#00d1c1" d="M14.7 2 8.4 8.4l6.3 6.3 6.6-6.3z"/>
    <path fill="#00808a" d="M2.7 15.6 8.4 21.3l6.3-6.6-6.3-6.3z"/>
  </svg>
);

export const NextjsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="12" fill="#000"/>
    <path fill="#fff" d="M9.5 8v8h1.4v-6l4.6 6h1.4V8h-1.4v6L10.9 8z"/>
  </svg>
);

export const HtmlIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#e34f26" d="M3 2h18l-1.6 18-7.4 2-7.4-2z"/>
    <path fill="#fff" d="M12 4.5V20l6-1.7 1.3-14.8H12z" opacity=".3"/>
    <path fill="#fff" d="M12 9.5H8l.2 2.3H12v2.2H8.6l.3 3.4L12 18v-2.3l-1.9-.5-.1-1.5H12zM7.6 6.7h8.8L16.6 9H8.9l.1 2.3H12V9h4.4l-.5 5.5-3.9 1.1"/>
  </svg>
);

export const CssIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#1572b6" d="M3 2h18l-1.6 18-7.4 2-7.4-2z"/>
    <path fill="#fff" d="M12 4.5V20l6-1.7 1.3-14.8H12z" opacity=".25"/>
    <path fill="#fff" d="M12 6.5H7.4l.2 2.2h4.4v2.2H9l.2 2.4H12v2.2l-2-.5-.1-1.5H7.7l.3 3.4L12 18v-2.3zM7.6 4.7h8.8l-.2 2.3H12v0h4l-.2 2.2H12v0h3.6l-.5 5-3.1 1"/>
  </svg>
);

export const TailwindIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#38bdf8" d="M12 6.5c-3 0-4.8 1.5-5.5 4.5.9-1.5 2-2 3.3-1.6.7.2 1.2.7 1.9 1.4 1 1 2.1 2.2 4.6 2.2 3 0 4.8-1.5 5.5-4.5-.9 1.5-2 2-3.3 1.6-.7-.2-1.2-.7-1.9-1.4-1-1-2.1-2.2-4.6-2.2zm-5.5 6.5c-3 0-4.8 1.5-5.5 4.5.9-1.5 2-2 3.3-1.6.7.2 1.2.7 1.9 1.4 1 1 2.1 2.2 4.6 2.2 3 0 4.8-1.5 5.5-4.5-.9 1.5-2 2-3.3 1.6-.7-.2-1.2-.7-1.9-1.4-1-1-2.1-2.2-4.6-2.2z"/>
  </svg>
);

export const FlutterIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#47c5fb" d="M14.3 2 3 13.3l3.6 3.6L21.6 2z"/>
    <path fill="#00569e" d="M14.3 12 8 18.3l3.6 3.6 10.1-10.1H14.3z"/>
    <path fill="#02569b" d="M8 18.3 11.6 22h6.2l-6-6z" opacity=".6"/>
  </svg>
);

export const DjangoIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="3" fill="#092e20"/>
    <path fill="#44b78b" d="M9.4 4.6h2.4v10c0 2.4-1.2 3.6-3.5 3.6-.9 0-1.6-.1-2.2-.4l.4-2c.4.2.9.3 1.5.3.9 0 1.4-.4 1.4-1.7zm3.9 3.3c.7-.3 1.7-.5 2.7-.5 2.5 0 3.9 1.5 3.9 4.1v6h-2.4v-.7c-.5.6-1.3.9-2.2.9-1.6 0-2.9-1.1-2.9-2.9 0-1.9 1.6-3 3.9-3h1.1v-.4c0-1-.6-1.5-1.7-1.5-.7 0-1.4.2-1.9.4zm3.1 5.2h-.8c-1 0-1.6.4-1.6 1.1 0 .6.4.9 1.1.9.7 0 1.3-.5 1.3-1.4z"/>
  </svg>
);

export const FlaskIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M9 2v6.2L4.3 17c-.8 1.5.3 3.4 2 3.4h11.4c1.7 0 2.8-1.9 2-3.4L15 8.2V2zM10.5 3.5h3V8h-3zm-.8 5.9h4.6l1.4 2.6c-2.4.5-4.9.5-7.4 0z"/>
  </svg>
);

export const NodeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#68a063" d="M12 1 3 6v12l9 5 9-5V6z"/>
    <path fill="#fff" d="M8.5 15.5V8.4h1.7l3.3 4.9V8.4h1.6v7.1h-1.7l-3.3-4.9v4.9z"/>
  </svg>
);

export const ExpressIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="4" fill="#1a1a1a"/>
    <path fill="#fff" d="M3 15.5c.8 1 2 1.6 3.3 1.6 1.8 0 3-1.1 3-2.9V8.5H7.7v5.6c0 .8-.4 1.3-1.1 1.3-.7 0-1.2-.3-1.7-.9zm9.3-3.7c0 2.4 1.6 3.8 4 3.8 1.2 0 2.3-.4 3.1-1.1l-1-1.3c-.5.4-1.2.7-1.9.7-1.1 0-1.9-.6-2.1-1.7h5.3c0-.2 0-.4 0-.6 0-2.3-1.4-3.9-3.6-3.9-2.2 0-3.8 1.6-3.8 4.1zm1.6-.8c.2-1 .9-1.6 1.9-1.6 1 0 1.6.6 1.7 1.6z"/>
  </svg>
);

export const TensorflowIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#ff6f00" d="m1.3 6.4 8.7-4.9v4.9L5.2 9zm0 11.2 8.7 4.9v-4.9L5.2 15zM11 1.5v21l2-1.1v-4.5l2.1 1.2v-4.7L13 12.2V9.5l2.1 1.2V6z"/>
  </svg>
);

export const SklearnIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="11" fill="none" stroke="#f89939" strokeWidth="1.8"/>
    <circle cx="8" cy="9" r="2.2" fill="#f89939"/>
    <circle cx="16" cy="9" r="2.2" fill="#3499cd"/>
    <circle cx="12" cy="16" r="2.2" fill="#3499cd"/>
  </svg>
);

export const PytorchIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#ee4c2c" d="M15.5 6.6a1 1 0 1 1-1.4-1.4 1 1 0 0 1 1.4 1.4M13 4.3l-1 1a7 7 0 1 0 6.5 2.9l-1.1.9a5.6 5.6 0 1 1-4.4-4.8z"/>
    <path fill="#ee4c2c" d="M12.9 2 9.4 6.4l1.2 1.2 3.2-4.1z"/>
  </svg>
);

export const AnacondaIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="12" fill="#43b02a"/>
    <path fill="#fff" d="M8 17V9.5L12 6l4 3.5V17h-2v-6.3L12 8.6l-2 2.1V17z"/>
  </svg>
);

export const NumpyIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#4dabcf" d="M12 2 4 6.5v11L12 22V13.8L4.6 9.5z"/>
    <path fill="#013243" d="M12 2v11.8L19.4 9.5 12 5.2z"/>
    <path fill="#4dabcf" d="M12 13.8V22l8-4.5v-11z"/>
  </svg>
);

export const PandasIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect x="4" y="3" width="2.4" height="18" fill="#150458"/>
    <rect x="9" y="3" width="2.4" height="12" fill="#150458"/>
    <rect x="9" y="17" width="2.4" height="4" fill="#e70488"/>
    <rect x="14" y="3" width="2.4" height="18" fill="#150458"/>
    <rect x="19" y="8" width="2.4" height="13" fill="#150458"/>
  </svg>
);

export const LanggraphIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="6" cy="6" r="2.4" stroke="#00d4ff" strokeWidth="1.6"/>
    <circle cx="18" cy="6" r="2.4" stroke="#00d4ff" strokeWidth="1.6"/>
    <circle cx="6" cy="18" r="2.4" stroke="#00d4ff" strokeWidth="1.6"/>
    <circle cx="18" cy="18" r="2.4" stroke="#00d4ff" strokeWidth="1.6"/>
    <circle cx="12" cy="12" r="2.4" stroke="#00d4ff" strokeWidth="1.6"/>
    <path stroke="#00d4ff" strokeWidth="1.4" d="M8.1 7.5 10 10M16 7.5 14 10M8.1 16.5 10 14M16 16.5 14 14"/>
  </svg>
);

export const JupyterIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="18.5" cy="5" r="1.8" fill="#f37726"/>
    <circle cx="18.5" cy="19" r="2.6" fill="#f37726"/>
    <circle cx="6" cy="19" r="1.4" fill="#f37726"/>
    <path fill="none" stroke="#9e9e9e" strokeWidth="1.5" d="M2 12a10 5.5 0 0 0 20 0 10 5.5 0 0 0-20 0z"/>
  </svg>
);

export const KerasIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="11" fill="none" stroke="#d00000" strokeWidth="1.6"/>
    <path fill="#d00000" d="M8 6h2v11H8zm2.3 5.4L14.5 6h2.6l-4.5 5.2L17.3 17h-2.7l-4.3-5.6z"/>
  </svg>
);

export const HuggingfaceIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="10" fill="#ffd21e"/>
    <circle cx="8.5" cy="10.5" r="1.4" fill="#000"/>
    <circle cx="15.5" cy="10.5" r="1.4" fill="#000"/>
    <path fill="none" stroke="#000" strokeWidth="1.3" strokeLinecap="round" d="M8 15c1.2 1.2 2.5 1.8 4 1.8s2.8-.6 4-1.8"/>
    <path fill="#ff9d0b" d="M4.5 11c-1 0-1.8.9-1.8 2s.8 2 1.8 2c.4 0 .7-.5.5-1l-.6-1.5.6-1.5c.2-.5-.1-1-.5-1zm15 0c1 0 1.8.9 1.8 2s-.8 2-1.8 2c-.4 0-.7-.5-.5-1l.6-1.5-.6-1.5c-.2-.5.1-1 .5-1z"/>
  </svg>
);

export const OllamaIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M12 2c-3 0-5 2.2-5 5.3 0 1.6.6 2.7 1.4 3.7-1.6 1-2.7 2.7-2.9 5.2L5.3 20h13.4l-.2-3.8c-.2-2.5-1.3-4.2-2.9-5.2.8-1 1.4-2.1 1.4-3.7C17 4.2 15 2 12 2zm-2.2 6.4a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2zm4.4 0a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z"/>
  </svg>
);

export const OpenCVSkillIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="7" cy="7.5" r="4" fill="none" stroke="#ee4c2c" strokeWidth="2.2"/>
    <circle cx="17" cy="7.5" r="4" fill="none" stroke="#5fbb46" strokeWidth="2.2"/>
    <circle cx="12" cy="16" r="4" fill="none" stroke="#00549e" strokeWidth="2.2"/>
  </svg>
);

export const MatplotlibIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".4"/>
    <path fill="none" stroke="#e6522c" strokeWidth="1.6" d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19"/>
    <circle cx="12" cy="12" r="1.6" fill="#e6522c"/>
  </svg>
);

export const MysqlIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#00618a" d="M4 16.5c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5-3.6-3.5-8-3.5-8 1.5-8 3.5z" opacity=".3"/>
    <path fill="#00618a" d="M6.5 4.5c1.5 3 2.5 6.5 2.9 9.8.2-.1.5-.1.8-.2-.4-3.3-1.4-6.8-2.8-9.8zm11 8.3c1.1-2.4 1.8-5.2 1.8-7.8h-1.3c0 2.6-.7 5.3-1.8 7.6.4 0 .9.1 1.3.2z"/>
    <path fill="#e48e00" d="M17.5 15.2c-.8.2-1.2.6-1.2 1s.4.7 1.2.7 1.2-.3 1.2-.7c0-.4-.4-.8-1.2-1z"/>
  </svg>
);

export const MongodbIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#47a248" d="M12 2c2.5 3 4 6.6 4 10.5 0 4-1.8 7.2-4 9.5-2.2-2.3-4-5.5-4-9.5C8 8.6 9.5 5 12 2z"/>
    <path fill="#fff" d="M12 2v20" opacity=".5"/>
  </svg>
);

export const RedisIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#dc382d" d="M12 2.3 2.1 6.9v9.8L12 21.7l9.9-5V6.9L12 2.3zm5.8 12.6-5.8 2.6-5.8-2.6V8.1l5.8-2.6 5.8 2.6v6.8z"/>
    <path fill="#fff" d="M12 6.6 7.7 8.5v6.4l4.3 2 4.3-2V8.5L12 6.6zm2.9 3.1-2.9 1.3-2.9-1.3.9-.4 2 .9 2-.9.9.4zm-5.8 1v3.9l2.6 1.2v-3.9zm5.8 0-2.6 1.2v3.9l2.6-1.2z"/>
  </svg>
);

export const SqliteIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#003b57" d="M18 2 6 3v18l3-1V6l9-1z"/>
    <path fill="#0f80cc" d="M6 3 18 2v18l-9 2V4z"/>
  </svg>
);

export const VsCodeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#007acc" d="M16.5 2.5 8 10 4 6.8 2 8l4 4-4 4 2 1.2 4-3.2 8.5 7.5 4-2V4.5zM16.5 8v8L11 12z"/>
  </svg>
);

export const AwsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#ff9900" d="M7 13.5c0 .5.1.9.2 1.2.1.3.3.6.5.9.1.1.1.2.1.3s-.1.2-.2.3l-.6.4h-.2c-.1 0-.2 0-.3-.1a3 3 0 0 1-.4-.5l-.3-.5c-.7.8-1.6 1.2-2.6 1.2-.8 0-1.4-.2-1.8-.6-.5-.4-.7-1-.7-1.7 0-.7.3-1.3.8-1.7.5-.4 1.2-.7 2.1-.7.3 0 .6 0 1 .1.3 0 .7.1 1 .2v-.7c0-.7-.1-1.2-.4-1.5-.3-.3-.8-.4-1.5-.4-.3 0-.6 0-1 .1-.3.1-.7.2-1 .3l-.2.1c-.1 0-.2-.1-.2-.3v-.5c0-.1 0-.2.1-.3.1-.1.1-.1.2-.2.3-.2.7-.3 1.2-.4.5-.1 1-.2 1.5-.2 1.1 0 2 .3 2.5.8.5.5.8 1.3.8 2.4zm-3.6 1.3c.3 0 .6-.1 1-.2.3-.1.6-.3.9-.6.2-.2.3-.4.3-.6.1-.2.1-.5.1-.9v-.4c-.2-.1-.5-.1-.8-.2-.3 0-.6-.1-.9-.1-.6 0-1.1.1-1.4.4-.3.2-.4.6-.4 1 0 .4.1.7.3.9.3.5.6.7.9.7z"/>
  </svg>
);

export const VercelIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="m12 3 10 18H2z"/>
  </svg>
);

export const StreamlitIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#ff4b4b" d="m4 3 4.5 8L4 19l16-8z"/>
  </svg>
);

export const RenderIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#46e3b7" d="M4 6h16v4H4zm0 8h10v4H4zm12 0h4v4h-4z"/>
  </svg>
);

export const FigmaIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#0acf83" d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8z"/>
    <path fill="#a259ff" d="M4 12a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z"/>
    <path fill="#f24e1e" d="M4 4a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z"/>
    <path fill="#ff7262" d="M12 0h4a4 4 0 0 1 0 8h-4z"/>
    <path fill="#1abcfe" d="M20 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
  </svg>
);

export const PostmanIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="11" fill="#ff6c37"/>
    <path fill="#fff" d="m14.5 6.5-6 6 1.3 1.3 4-4 1.4 1.4-4 4L12.5 16l6-6z"/>
  </svg>
);

export const LinuxIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#fcc624" d="M12.5 1.5c-1.7 0-2.5 2-2.6 3.6-.1 1.7.2 2.6-.5 4-.6 1.3-2 2.9-2 4.9 0 1.3.5 2.4 1.1 3.3-.3.3-.7.5-.9.9-.4.6-.4 1.3-.2 2 .1.4-.1.6-.3.9-.2.3-.4.6-.3 1 .1.5.6.8 1.1.9.6.1 1.1-.1 1.6-.3.6-.2 1.1-.3 1.7-.1.5.1.9.5 1.5.6.6.1 1.2-.1 1.6-.5.3-.3.5-.2.9-.1.5.2 1 .5 1.6.4.6-.1 1-.5 1.1-1 .1-.4-.1-.7-.3-1-.2-.3-.4-.5-.3-.9.2-.7.2-1.4-.2-2-.2-.4-.6-.6-.9-.9.6-.9 1.1-2 1.1-3.3 0-2-1.4-3.6-2-4.9-.7-1.4-.4-2.3-.5-4-.1-1.6-.9-3.6-2.6-3.6z"/>
    <ellipse cx="10.3" cy="9.5" rx="1" ry="1.4" fill="#2b2b2b"/>
    <ellipse cx="14.7" cy="9.5" rx="1" ry="1.4" fill="#2b2b2b"/>
    <circle cx="10.3" cy="9.2" r=".4" fill="#fff"/>
    <circle cx="14.7" cy="9.2" r=".4" fill="#fff"/>
    <path fill="#fff" d="M9.5 12.5c1 .8 4 .8 5 0-.3 1.2-1.3 2-2.5 2s-2.2-.8-2.5-2z"/>
  </svg>
);
