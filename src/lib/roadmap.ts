export type Link = { label: string; url: string };

export type Week = {
  number: number;
  title: string;
  topics: string[];
  output: string;
  links: Link[];
};

export type Phase = {
  id: string;
  index: number;
  number: string;
  name: string;
  start: string;
  end: string;
  weeks: string;
  hoursPerWeek: string;
  accent: string;
  goal: string;
  summary: string;
  weeksList: Week[];
  deliverable?: string;
};

export type Project = {
  id: string;
  index: number;
  window: string;
  title: string;
  problem: string;
  build: string[];
  demonstrates: string[];
  timeBudget: string;
  completion: string;
  stretch?: string[];
};

export type Resource = { id: string; tier: "A" | "B" | "C"; area: string; title: string; url: string; note: string };
export type Competency = { id: string; title: string; description: string };
export type CareerMonth = { id: string; month: string; window: string; focus: string; actions: string[] };
export type JobRole = { title: string; why: string };
export type BudgetRow = { requirement: string; approach: string };
export type OutcomeGroup = { title: string; items: string[] };
export type StudyBlock = { minutes: string; title: string; body: string };
export type RhythmDay = { day: string; activity: string; time: string };
export type Milestone = { id: string; date: string; label: string };

// ---------- Phases ----------
export const phases: Phase[] = [
  {
    id: "phase-0",
    index: 0,
    number: "00",
    name: "Light foundation",
    start: "2026-11-10",
    end: "2026-12-06",
    weeks: "Weeks 1–3 (+ exam buffer)",
    hoursPerWeek: "4–5 h/week",
    accent: "teal",
    goal: "Prepare the ground without disturbing your Infosys preparation.",
    summary:
      "Python refresh, API fundamentals and initial LLM exploration. Three small exercises only — no major project. Your December 6 assessment comes first.",
    weeksList: [
      {
        number: 1,
        title: "Python & HTTP foundations",
        topics: ["Python type hints", "Pydantic", "Virtual environments", "HTTP requests"],
        output: "Python API client",
        links: [
          { label: "Python typing", url: "https://docs.python.org/3/library/typing.html" },
          { label: "Pydantic models", url: "https://docs.pydantic.dev/latest/concepts/models/" },
        ],
      },
      {
        number: 2,
        title: "FastAPI service",
        topics: ["FastAPI routes", "Request/response schemas", "Async/await"],
        output: "Small FastAPI service",
        links: [{ label: "FastAPI tutorial", url: "https://fastapi.tiangolo.com/tutorial/" }],
      },
      {
        number: 3,
        title: "First LLM call",
        topics: ["LLM API basics", "Messages", "Model parameters", "Tokens"],
        output: "First LLM request and response",
        links: [{ label: "OpenAI API quickstart", url: "https://developers.openai.com/api/docs/quickstart/" }],
      },
    ],
  },
  {
    id: "phase-1",
    index: 1,
    number: "01",
    name: "LLM engineering",
    start: "2026-12-07",
    end: "2027-01-03",
    weeks: "Weeks 4–7",
    hoursPerWeek: "7–9 h/week",
    accent: "violet",
    goal: "Become comfortable building applications around LLM APIs.",
    summary:
      "Your first proper specialization phase. LLM request lifecycle, prompts, structured outputs, function calling, streaming, errors and retries.",
    weeksList: [
      {
        number: 4,
        title: "Model behaviour",
        topics: ["LLM request lifecycle", "Tokens", "Context windows", "Temperature", "Model selection"],
        output: "Model comparison script",
        links: [{ label: "OpenAI API overview", url: "https://developers.openai.com/api/docs/overview" }],
      },
      {
        number: 5,
        title: "Prompting & context",
        topics: ["System prompts", "Few-shot prompting", "Context engineering", "Hallucinations"],
        output: "Structured research assistant",
        links: [
          { label: "OpenAI text generation", url: "https://developers.openai.com/api/docs/guides/text" },
          { label: "Prompt engineering", url: "https://developers.openai.com/api/docs/guides/prompt-engineering" },
        ],
      },
      {
        number: 6,
        title: "Structured outputs & tools",
        topics: ["JSON Schema", "Pydantic outputs", "Function calling", "Tool execution"],
        output: "AI assistant with 3 tools",
        links: [
          { label: "Structured outputs", url: "https://developers.openai.com/api/docs/guides/structured-outputs" },
          { label: "Function calling", url: "https://developers.openai.com/api/docs/guides/function-calling" },
        ],
      },
      {
        number: 7,
        title: "Streaming & resilience",
        topics: ["Streaming", "Conversation history", "API errors", "Retries", "Rate limits"],
        output: "Complete chat API",
        links: [{ label: "Anthropic context engineering", url: "https://www.anthropic.com/research/effective-context-engineering-for-ai-agents" }],
      },
    ],
    deliverable: "Project 1 — LLM Research Assistant (FastAPI + Next.js, streaming, history, structured JSON, 3 tools, error handling, usage tracking). ~25–30 hours.",
  },
  {
    id: "phase-2",
    index: 2,
    number: "02",
    name: "RAG engineering",
    start: "2027-01-04",
    end: "2027-01-31",
    weeks: "Weeks 8–11",
    hoursPerWeek: "7–9 h/week",
    accent: "blue",
    goal: "Understand how to give AI access to external knowledge.",
    summary:
      "Embeddings, vector search, document pipelines, retrieval, reranking and evaluation. End with a RAG evaluation suite.",
    weeksList: [
      {
        number: 8,
        title: "Embeddings",
        topics: ["Embeddings", "Tokenization", "Cosine similarity", "Vector representations"],
        output: "Semantic search from scratch",
        links: [
          { label: "Google ML Crash Course — Embeddings", url: "https://developers.google.com/machine-learning/crash-course/embeddings" },
          { label: "OpenAI embeddings guide", url: "https://developers.openai.com/api/docs/guides/embeddings" },
        ],
      },
      {
        number: 9,
        title: "Document pipeline",
        topics: ["PostgreSQL", "pgvector", "Document parsing", "Chunking", "Metadata"],
        output: "Document ingestion pipeline",
        links: [{ label: "pgvector", url: "https://github.com/pgvector/pgvector" }],
      },
      {
        number: 10,
        title: "Retrieval",
        topics: ["Retrieval", "Top-k", "Hybrid search", "Reranking", "Query rewriting"],
        output: "Basic RAG application",
        links: [{ label: "RAG Handbook", url: "https://unrag.dev/docs/rag" }],
      },
      {
        number: 11,
        title: "RAG evaluation",
        topics: ["Retrieval evaluation", "Answer grounding", "Citations", "Failure analysis"],
        output: "RAG evaluation suite",
        links: [{ label: "Hugging Face RAG evaluation", url: "https://huggingface.co/learn/cookbook/en/rag_evaluation" }],
      },
    ],
    deliverable: "Project 2 — Personal Knowledge Assistant (PDF upload, extraction, chunking, embeddings, pgvector, semantic search, citations, answer generation, basic evaluation). ~28–35 hours.",
  },
  {
    id: "phase-3",
    index: 3,
    number: "03",
    name: "Agent engineering",
    start: "2027-02-01",
    end: "2027-02-28",
    weeks: "Weeks 12–15",
    hoursPerWeek: "7–9 h/week",
    accent: "amber",
    goal: "Learn to build AI systems that take actions.",
    summary:
      "Agent loops, tool calling, state, LangGraph, interrupts and human approval. Build the same task in plain Python and in LangGraph.",
    weeksList: [
      {
        number: 12,
        title: "Agent loop",
        topics: ["Agent architecture", "Agent loops", "Tool calling", "Observation and execution"],
        output: "Simple agent without frameworks",
        links: [{ label: "Hugging Face Agents Course", url: "https://huggingface.co/agents-course" }],
      },
      {
        number: 13,
        title: "Tools & state",
        topics: ["Tool schemas", "Validation", "Permissions", "Memory", "State"],
        output: "Agent with database and API tools",
        links: [{ label: "Anthropic: Building effective agents", url: "https://www.anthropic.com/engineering/building-effective-agents" }],
      },
      {
        number: 14,
        title: "LangGraph",
        topics: ["LangGraph nodes", "Edges", "State", "Conditional execution", "Persistence"],
        output: "Stateful agent",
        links: [{ label: "LangGraph overview", url: "https://docs.langchain.com/oss/python/langgraph/overview" }],
      },
      {
        number: 15,
        title: "Human approval",
        topics: ["Interrupts", "Human approval", "Retries", "Failure handling", "Agent evaluation"],
        output: "Approval-based agent",
        links: [{ label: "LangGraph tutorials", url: "https://docs.langchain.com/oss/python/langgraph/tutorials" }],
      },
    ],
    deliverable: "AI Operations Assistant — search a database, retrieve documents, summarize, create a task via external API, ask for human approval, record the result. ~28–35 hours.",
  },
  {
    id: "phase-4",
    index: 4,
    number: "04",
    name: "MCP & automation",
    start: "2027-03-01",
    end: "2027-03-28",
    weeks: "Weeks 16–19",
    hoursPerWeek: "7–9 h/week",
    accent: "ember",
    goal: "Connect AI applications to real-world software.",
    summary:
      "MCP servers and clients, REST APIs, webhooks, OAuth, integrations and durable workflows. n8n for two or three sessions, not a month.",
    weeksList: [
      {
        number: 16,
        title: "MCP architecture",
        topics: ["MCP architecture", "Hosts", "Clients", "Servers", "Tools", "Resources"],
        output: "Calculator MCP server",
        links: [{ label: "Official MCP documentation", url: "https://modelcontextprotocol.io/docs/getting-started/intro" }],
      },
      {
        number: 17,
        title: "MCP Python SDK",
        topics: ["MCP Python SDK", "Server/client communication", "Tool permissions"],
        output: "PostgreSQL MCP server",
        links: [
          { label: "MCP architecture", url: "https://modelcontextprotocol.io/docs/learn/architecture" },
          { label: "MCP Python SDK", url: "https://github.com/modelcontextprotocol/python-sdk" },
        ],
      },
      {
        number: 18,
        title: "Integrations",
        topics: ["REST APIs", "Webhooks", "OAuth", "External integrations"],
        output: "GitHub integration",
        links: [],
      },
      {
        number: 19,
        title: "Automation",
        topics: ["n8n basics", "Background jobs", "Workflow state", "Retries"],
        output: "Multi-step automation",
        links: [
          { label: "n8n documentation", url: "https://docs.n8n.io/" },
          { label: "Redis documentation", url: "https://redis.io/docs/latest/" },
        ],
      },
    ],
    deliverable: "MCP-powered developer assistant — repository info, GitHub issue search/creation, selected database queries; approval required for writes. ~28–35 hours.",
  },
  {
    id: "phase-5",
    index: 5,
    number: "05",
    name: "Production engineering",
    start: "2027-03-29",
    end: "2027-04-25",
    weeks: "Weeks 20–23",
    hoursPerWeek: "7–9 h/week",
    accent: "rose",
    goal: "Turn working AI applications into dependable software.",
    summary:
      "Evaluation, tracing, security, Docker, CI/CD, deployment and cost. Deliberately break the AI Operations Assistant and fix each failure.",
    weeksList: [
      {
        number: 20,
        title: "AI evaluation",
        topics: ["AI evaluation", "Golden datasets", "LLM-as-a-judge", "Regression testing"],
        output: "50-case evaluation suite",
        links: [{ label: "OpenAI evaluation guides", url: "https://developers.openai.com/api/docs/guides/evals" }],
      },
      {
        number: 21,
        title: "Observability",
        topics: ["Logging", "Tracing", "Token usage", "Latency", "Error monitoring"],
        output: "Agent execution tracing",
        links: [
          { label: "Ragas", url: "https://docs.ragas.io/" },
          { label: "OpenTelemetry", url: "https://opentelemetry.io/docs/" },
        ],
      },
      {
        number: 22,
        title: "Security",
        topics: ["Prompt injection", "Authorization", "Data privacy", "Rate limiting"],
        output: "Security testing",
        links: [{ label: "OWASP GenAI Security", url: "https://genai.owasp.org/" }],
      },
      {
        number: 23,
        title: "Deployment",
        topics: ["Docker", "CI/CD", "Deployment", "Caching", "Cost management"],
        output: "Deploy your application",
        links: [
          { label: "Docker getting started", url: "https://docs.docker.com/get-started/" },
          { label: "GitHub Actions", url: "https://docs.github.com/en/actions" },
        ],
      },
    ],
    deliverable: "Take the AI Operations Assistant and test it with incorrect tool arguments, unavailable APIs, invalid documents, prompt injection, unauthorized requests, repeated requests and slow responses. Document each failure and fix it. ~28–35 hours.",
  },
  {
    id: "phase-6",
    index: 6,
    number: "06",
    name: "Career sprint",
    start: "2027-04-26",
    end: "2027-05-09",
    weeks: "Weeks 24–25 (+ buffer)",
    hoursPerWeek: "7–9 h/week",
    accent: "gold",
    goal: "Turn your learning into an employment portfolio.",
    summary:
      "Capstone integration, documentation, demo, system design, interview preparation and applications. No new framework.",
    weeksList: [
      {
        number: 24,
        title: "Capstone polish",
        topics: ["Capstone integration", "Documentation", "Demo"],
        output: "Complete AI product",
        links: [],
      },
      {
        number: 25,
        title: "Interview readiness",
        topics: ["System design", "Interview preparation", "Applications"],
        output: "Portfolio and interview readiness",
        links: [],
      },
    ],
    deliverable: "Project 3 — Enterprise AI Workflow Product (workflow config, multi-step execution, conditional branches, background processing, retry/recovery, human approval, evaluation dashboard, monitoring and cost tracking). Incorporates Projects 1 and 2 rather than starting from zero.",
  },
];

// ---------- Projects ----------
export const projects: Project[] = [
  {
    id: "project-1",
    index: 1,
    window: "Month 1–2",
    title: "AI Knowledge Assistant",
    problem: "Employees cannot efficiently find information in hundreds of company documents.",
    build: [
      "PDF upload and processing",
      "Text extraction",
      "Chunking",
      "Embeddings",
      "PostgreSQL + pgvector",
      "Semantic search",
      "Source citations",
      "Answer generation",
      "Feedback and evaluation",
    ],
    demonstrates: ["LLM integration", "RAG", "Retrieval", "Databases", "Evaluation"],
    timeBudget: "~25–30 hours across Phase 1–2",
    completion: "You can explain why a particular question retrieves the wrong document and how to improve retrieval.",
    stretch: ["Hybrid retrieval", "Reranking", "Document-level access control", "Feedback and evaluation dashboard"],
  },
  {
    id: "project-2",
    index: 2,
    window: "Month 3–4",
    title: "AI Business Operations Agent",
    problem: "Businesses spend time performing repetitive operations across databases, ticketing systems and communication tools.",
    build: [
      "An agent with multiple tools",
      "Database access",
      "RAG knowledge access",
      "LangGraph orchestration",
      "MCP server integration",
      "Human approval",
      "Execution history",
    ],
    demonstrates: ["Agent engineering", "Tool calling", "MCP", "Integrations", "Workflow control"],
    timeBudget: "~28–35 hours across Phase 3–4",
    completion: "Build the same task using normal Python and LangGraph, and explain why the framework is useful.",
    stretch: [],
  },
  {
    id: "project-3",
    index: 3,
    window: "Month 5–6",
    title: "Enterprise AI Workflow Product",
    problem: "Teams need an application that coordinates AI-powered processes reliably.",
    build: [
      "Workflow configuration",
      "Multi-step execution",
      "Conditional branches",
      "Background processing",
      "Retry and recovery",
      "Human approval",
      "Evaluation dashboard",
      "Monitoring and cost tracking",
    ],
    demonstrates: ["End-to-end product engineering", "Architecture", "Reliability", "Deployment", "Business problem-solving"],
    timeBudget: "~28–35 hours across Phase 5–6",
    completion: "Automated tests, traceable execution history, basic security controls and a reproducible deployment.",
    stretch: [],
  },
];

// ---------- Resources ----------
export const resources: Resource[] = [
  // Level A
  { id: "ra1", tier: "A", area: "Curriculum", title: "OpenAI Academy", url: "https://academy.openai.com/public/courses", note: "First resource to explore. Dedicated learning paths for developers: Build with AI, Build with RAG, Design and Build Agentic Systems, Evaluate AI Applications, Optimize AI Application Performance. Introduced September 2026." },
  { id: "ra2", tier: "A", area: "Agents", title: "Hugging Face Learn — Agents Course", url: "https://huggingface.co/agents-course", note: "Agent fundamentals and practical exercises. Don't attempt every optional section if it eats implementation time." },
  { id: "ra3", tier: "A", area: "Agents", title: "Anthropic Engineering", url: "https://www.anthropic.com/research/effective-context-engineering-for-ai-agents", note: "Agent architectures, tool design, context engineering and engineering trade-offs." },
  { id: "ra4", tier: "A", area: "LangGraph", title: "LangChain Academy", url: "https://academy.langchain.com/", note: "Focus on LangGraph and practical courses. Course content is free; paid certification optional." },
  { id: "ra5", tier: "A", area: "MCP", title: "Model Context Protocol", url: "https://modelcontextprotocol.io/", note: "Official specifications, implementation guides and SDKs. Learn the protocol, not third-party tutorials." },
  // Level B
  { id: "rb1", tier: "B", area: "Python", title: "Python documentation", url: "https://docs.python.org/3/", note: "Reference when implementing." },
  { id: "rb2", tier: "B", area: "FastAPI", title: "FastAPI", url: "https://fastapi.tiangolo.com/", note: "Reference when implementing." },
  { id: "rb3", tier: "B", area: "Pydantic", title: "Pydantic", url: "https://docs.pydantic.dev/", note: "Reference when implementing." },
  { id: "rb4", tier: "B", area: "OpenAI API", title: "OpenAI API documentation", url: "https://developers.openai.com/api/docs/", note: "Reference when implementing." },
  { id: "rb5", tier: "B", area: "Anthropic API", title: "Anthropic API documentation", url: "https://docs.anthropic.com/", note: "Reference when implementing." },
  { id: "rb6", tier: "B", area: "PostgreSQL", title: "PostgreSQL", url: "https://www.postgresql.org/docs/", note: "Reference when implementing." },
  { id: "rb7", tier: "B", area: "pgvector", title: "pgvector", url: "https://github.com/pgvector/pgvector", note: "Reference when implementing." },
  { id: "rb8", tier: "B", area: "LangGraph", title: "LangGraph", url: "https://docs.langchain.com/oss/python/langgraph/overview", note: "Reference when implementing." },
  { id: "rb9", tier: "B", area: "Redis", title: "Redis", url: "https://redis.io/docs/latest/", note: "Reference when implementing." },
  { id: "rb10", tier: "B", area: "Docker", title: "Docker", url: "https://docs.docker.com/", note: "Reference when implementing." },
  { id: "rb11", tier: "B", area: "OpenTelemetry", title: "OpenTelemetry", url: "https://opentelemetry.io/docs/", note: "Reference when implementing." },
  // Level C
  { id: "rc1", tier: "C", area: "Agents", title: "Building effective agents — Anthropic", url: "https://www.anthropic.com/engineering/building-effective-agents", note: "Read when its topic appears in your weekly syllabus, not end-to-end in free time." },
  { id: "rc2", tier: "C", area: "Context", title: "Effective context engineering — Anthropic", url: "https://www.anthropic.com/research/effective-context-engineering-for-ai-agents", note: "Read when its topic appears in your weekly syllabus." },
  { id: "rc3", tier: "C", area: "Retrieval", title: "Contextual Retrieval — Anthropic", url: "https://www.anthropic.com/engineering/contextual-retrieval", note: "Read when its topic appears in your weekly syllabus." },
  { id: "rc4", tier: "C", area: "RAG", title: "RAG Handbook", url: "https://unrag.dev/docs/rag", note: "Progresses from first principles to chunking, retrieval, reranking, evaluation and production." },
  { id: "rc5", tier: "C", area: "Evaluation", title: "Hugging Face RAG evaluation", url: "https://huggingface.co/learn/cookbook/en/rag_evaluation", note: "Read when its topic appears in your weekly syllabus." },
];

// ---------- Competencies ----------
export const competencies: Competency[] = [
  { id: "c1", title: "Python and API foundations", description: "FastAPI, Pydantic, async and HTTP" },
  { id: "c2", title: "LLM fundamentals", description: "Tokens, context, prompts and model APIs" },
  { id: "c3", title: "Structured outputs and tools", description: "Function calling, streaming and validation" },
  { id: "c4", title: "Embeddings and vector search", description: "Similarity and pgvector" },
  { id: "c5", title: "RAG engineering", description: "Ingestion, retrieval and citations" },
  { id: "c6", title: "RAG evaluation", description: "Datasets, retrieval quality and groundedness" },
  { id: "c7", title: "Agent fundamentals", description: "Agent loop and tool execution" },
  { id: "c8", title: "LangGraph", description: "State, nodes, edges and persistence" },
  { id: "c9", title: "MCP", description: "Server, client and integrations" },
  { id: "c10", title: "Workflow automation", description: "Background tasks and recovery" },
  { id: "c11", title: "Production AI", description: "Evaluation, security and observability" },
  { id: "c12", title: "Deployment and capstone", description: "Portfolio, documentation and interviews" },
];

// ---------- Career ----------
export const careerMonths: CareerMonth[] = [
  { id: "nov", month: "November 2026", window: "Nov 10 – Dec 6", focus: "Research & prepare", actions: ["Research job descriptions and identify recurring skills", "Keep the AI track light", "Infosys assessment on December 6 comes first"] },
  { id: "dec", month: "December 2026", window: "Dec 7 – Jan 3", focus: "LLM engineering phase begins", actions: ["Start the proper programme", "Keep conventional software engineering sharp", "Spend 20 min/week reviewing 5–10 job descriptions"] },
  { id: "jan", month: "January 2027", window: "Jan 4 – Jan 31", focus: "Publish & update", actions: ["Update your resume", "Publish Project 1 (AI Knowledge Assistant)", "Start applying to junior AI application and GenAI roles in February prep"] },
  { id: "feb", month: "February 2027", window: "Feb 1 – Feb 28", focus: "Start applying", actions: ["Apply to junior AI application and GenAI roles", "Maintain a spreadsheet of recurring technical requirements", "Compare portfolio against requirements monthly"] },
  { id: "mar", month: "March 2027", window: "Mar 1 – Apr 25", focus: "Integration & agent roles", actions: ["Apply to AI integration and agent engineering roles", "Practice technical interviews and system design", "Polish Project 2"] },
  { id: "apr", month: "April – May 2027", window: "Apr 26 – May 9", focus: "Intensify", actions: ["Intensify targeted applications", "Project demonstrations and capstone polish", "Interview preparation for junior AI engineering and FDE opportunities"] },
];

export const jobRoles: JobRole[] = [
  { title: "Junior Applied AI Engineer", why: "Your primary target" },
  { title: "GenAI Engineer", why: "LLM applications and RAG" },
  { title: "AI Application Engineer", why: "Building AI-powered software" },
  { title: "AI Product Engineer", why: "Full-stack AI products" },
  { title: "Agent Engineer", why: "Agent systems and tools" },
  { title: "AI Automation Engineer", why: "Business workflow automation" },
  { title: "Forward Deployed Engineer", why: "Customer-facing AI implementations" },
  { title: "Solutions Engineer – AI", why: "Integrations and technical problem-solving" },
];

export const careerHabits: string[] = [
  "Spend 20 minutes a week reviewing 5–10 relevant job descriptions.",
  "Maintain a spreadsheet of recurring technical requirements.",
  "Once a month, compare your portfolio against those requirements.",
];

// ---------- Priority & stack ----------
export const priorityTiers: { tier: string; items: string[]; tone: string }[] = [
  { tier: "Essential", items: ["LLM application engineering", "RAG and knowledge systems", "Agents and orchestration", "MCP and integrations", "Evaluation and production"], tone: "teal" },
  { tier: "Supplementary", items: ["No-code automation (n8n basics only)"], tone: "amber" },
  { tier: "Defer", items: ["Advanced ML, fine-tuning and Kubernetes"], tone: "mist" },
];

export const primaryStack: string[] = [
  "Python", "FastAPI", "Pydantic", "One hosted LLM API (initially OpenAI)", "PostgreSQL + pgvector",
  "LangGraph", "MCP Python SDK", "Redis (when needed)", "Next.js", "Docker",
];

export const newRules: string[] = [
  "One primary topic at a time.",
  "No parallel courses.",
  "No expensive bootcamps.",
  "Maximum one major project per learning phase.",
  "Every concept must be implemented.",
  "Revision is part of the syllabus.",
  "Existing exam and job preparation takes priority.",
];

export const dailyCommitment: { label: string; value: string }[] = [
  { label: "Minimum", value: "45 minutes on a busy day" },
  { label: "Normal", value: "75–90 minutes" },
  { label: "Maximum", value: "120 minutes when your schedule permits" },
  { label: "Weekly", value: "One lighter revision day" },
];

// ---------- Study method ----------
export const studyBlocks: StudyBlock[] = [
  { minutes: "20m", title: "Learn", body: "Read official documentation or watch the relevant lesson. Focus on one concept." },
  { minutes: "20m", title: "Understand", body: "Trace the architecture, inspect examples and write down what happens internally." },
  { minutes: "40m", title: "Implement", body: "Write code yourself. Reproduce the concept without copying the tutorial." },
  { minutes: "10m", title: "Recall", body: "Write what you learned, what failed and what you need to revise." },
];

export const weeklyRhythm: RhythmDay[] = [
  { day: "Monday", activity: "New concept A", time: "60–90 min" },
  { day: "Tuesday", activity: "Concept A implementation", time: "60–90 min" },
  { day: "Wednesday", activity: "New concept B", time: "60–90 min" },
  { day: "Thursday", activity: "Concept B implementation", time: "60–90 min" },
  { day: "Friday", activity: "Integrate both concepts", time: "60–90 min" },
  { day: "Saturday", activity: "Debugging, testing and revision", time: "60–90 min" },
  { day: "Sunday", activity: "Rest or optional catch-up", time: "0–30 min" },
];

export const fiveQuestions: string[] = [
  "What problem does this technology solve?",
  "How does it work internally?",
  "What happens behind the scenes when I execute it?",
  "What are its limitations and alternatives?",
  "How would I implement it in a real production system?",
];

export const ragExampleQuestions: string[] = [
  "Why isn't an ordinary LLM enough for private company documents?",
  "What does an embedding represent?",
  "How does cosine similarity affect retrieval?",
  "Why does chunk size affect answer quality?",
  "What happens if the relevant document isn't retrieved?",
  "How would I measure whether my retrieval pipeline improved?",
];

// ---------- Budget ----------
export const budgetRows: BudgetRow[] = [
  { requirement: "Learning resources", approach: "Free documentation and courses" },
  { requirement: "Development", approach: "VS Code / IntelliJ" },
  { requirement: "Python environment", approach: "uv or standard virtual environments" },
  { requirement: "Database", approach: "Local PostgreSQL" },
  { requirement: "Vector database", approach: "pgvector" },
  { requirement: "LLM access", approach: "One hosted API, with strict usage limits" },
  { requirement: "Frontend hosting", approach: "Free tier where available" },
  { requirement: "Backend hosting", approach: "Local development initially" },
  { requirement: "Source control", approach: "GitHub" },
  { requirement: "Automation", approach: "Self-hosted n8n when needed" },
];

// ---------- Final outcome ----------
export const outcomeGroups: OutcomeGroup[] = [
  { title: "Technical capabilities", items: [
    "Independently build applications using LLM APIs.",
    "Implement RAG systems and evaluate retrieval quality.",
    "Build agents with tools and controlled execution.",
    "Implement MCP servers and integrations.",
    "Design multi-step AI workflows.",
    "Test, secure and deploy AI applications.",
  ]},
  { title: "Portfolio", items: [
    "Two or three meaningful repositories.",
    "One complete flagship AI product.",
    "Architecture diagrams.",
    "Evaluation results.",
    "Working demonstration.",
    "Technical documentation.",
  ]},
  { title: "Career readiness", items: [
    "Resume tailored to applied AI roles.",
    "Ability to explain agent and RAG architectures.",
    "Ability to solve backend and AI integration problems.",
    "Interview preparation for junior AI engineering and FDE opportunities.",
  ]},
];

export const finalRules: string[] = [
  "Don't become a course collector. One primary course and official documentation per topic are enough.",
  "Don't jump frameworks. Learn the concept first, then one implementation.",
  "Don't overbuild projects. A small, well-engineered RAG system is better than an unfinished enterprise platform.",
  "Don't neglect conventional software engineering. Your backend, DSA and system design knowledge remain valuable.",
  "Don't compromise your primary exam preparation. This AI programme is designed to fit around your existing commitments.",
];

export const stats: { value: number; suffix?: string; label: string }[] = [
  { value: 180, label: "Days" },
  { value: 26, label: "Weeks" },
  { value: 3, label: "Major projects" },
  { value: 260, suffix: "+", label: "Study hours (max)" },
];

export const milestones: Milestone[] = [
  { id: "infosys", date: "2026-12-06", label: "Infosys assessment" },
  { id: "phase1", date: "2027-01-03", label: "End of Phase 1 · LLM engineering" },
  { id: "phase2", date: "2027-01-31", label: "End of Phase 2 · RAG engineering" },
  { id: "phase3", date: "2027-02-28", label: "End of Phase 3 · Agent engineering" },
  { id: "phase4", date: "2027-03-28", label: "End of Phase 4 · MCP & automation" },
  { id: "phase5", date: "2027-04-25", label: "End of Phase 5 · Production engineering" },
  { id: "phase6", date: "2027-05-09", label: "End of Phase 6 · Career sprint" },
];

export const portfolioRules: string[] = [
  "Every project must have a working demo.",
  "Architecture diagram.",
  "README with testing instructions.",
  "A clear explanation of engineering trade-offs.",
  "A beautiful UI alone is not evidence of AI engineering ability.",
];

export const portfolioRuleNote = "The third project can incorporate the first two rather than starting from zero. This is how we save time.";
