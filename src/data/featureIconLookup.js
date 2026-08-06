import {
  Bot, Database, UtensilsCrossed, CalendarCheck, PackageSearch, MessageCircle,
  Search, Zap, Link2, Table2, Server, Container, Sparkles,
} from 'lucide-react';

// Keyword -> icon for FeatureGrid, used for both the legacy plain-string
// `features` array (title-only, sometimes emoji-prefixed) and as the
// resolver for `featuresRich[].icon` string keys. First keyword match wins;
// falls back to a generic icon so every feature always renders with one.
const KEYWORD_ICONS = [
  [/agent/i, Bot],
  [/rag|knowledge|retriev/i, Database],
  [/food|order(ing)?\b/i, UtensilsCrossed],
  [/book|reservation/i, CalendarCheck],
  [/track/i, PackageSearch],
  [/support|chat|conversation/i, MessageCircle],
  [/context|search/i, Search],
  [/workflow|automat/i, Zap],
  [/webhook|integrat/i, Link2],
  [/sheet/i, Table2],
  [/api|backend|fastapi/i, Server],
  [/docker|deploy/i, Container],
];

// Strips a leading emoji + following whitespace, e.g. "🤖 Multi-Agent AI" -> "Multi-Agent AI".
const stripLeadingEmoji = (str) => str.replace(/^\p{Extended_Pictographic}\s*/u, '');

export const getFeatureIcon = (titleOrKey) => {
  const clean = stripLeadingEmoji(titleOrKey || '');
  const match = KEYWORD_ICONS.find(([pattern]) => pattern.test(clean));
  return match ? match[1] : Sparkles;
};

export const cleanFeatureTitle = stripLeadingEmoji;
