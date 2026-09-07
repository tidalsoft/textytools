# textytools

A collection of lightweight, browser-based productivity tools for programmers and students. This hub provides fast, friction-free utilities for common text and data manipulation tasks.

https://textytools.dev

Development and deployment follow the worktree → staging → production process in
[`DEVELOPMENT.md`](DEVELOPMENT.md).

The verified behavior and boundaries of the nine public tools are recorded in
[`CAPABILITIES.md`](CAPABILITIES.md).

Result certainty, safety, processing, persistence, and recovery language is
defined in [`TRUST.md`](TRUST.md).

The product-owned information, interaction, visual, responsive, accessibility,
token, primitive, and design-fixture contract is defined in
[`DESIGN.md`](DESIGN.md).

The synthetic test-data boundary and required scenario catalog are defined in
[`FIXTURES.md`](FIXTURES.md).

The active test layers, supported browser matrix, local commands, and regression
policy are defined in [`TESTING.md`](TESTING.md).

Approved product surfaces and the disposition of historical experiments are
recorded in [`PRODUCT_BOUNDARIES.md`](PRODUCT_BOUNDARIES.md).

## Setup

After cloning the repository, configure git hooks:

```bash
git config core.hooksPath .githooks
```

### Google Analytics

The approved content-free event and parameter boundary is defined in
[`analytics/ANALYTICS.md`](analytics/ANALYTICS.md). The events listed below describe
the current production baseline; they are not all approved outcome events under
that contract. Baseline sufficiency and promotion-gate rules are defined in
[`analytics/MEASUREMENT.md`](analytics/MEASUREMENT.md).

Set `NEXT_PUBLIC_GOOGLE_TAG_ID` to the Google tag ID installed for the site
(for example, `GT-WV3GVH8P`). Textytools deliberately uses the `gtag/js`
installation path and does not mount a Google Tag Manager (`gtm.js`) container.
Configure the production property in Vercel's Production environment only.
Vercel Preview deployments, including `staging.textytools.dev`, do not load or
emit analytics even though their builds use `NODE_ENV=production`.

To test a separate non-production property, configure its tag ID and set
`NEXT_PUBLIC_ENABLE_ANALYTICS=true` only in the intended Preview environment.

For older deployments, `NEXT_PUBLIC_GOOGLE_ID` remains a temporary fallback.
Do not configure both variables; migrate the Production value to
`NEXT_PUBLIC_GOOGLE_TAG_ID`, then remove the old variable from both Production
and Preview scopes after deployment.

The application emits these acquisition events in addition to GA4's automatic
events:

- `tool_view`: a public tool page was opened
- `tool_activation`: the visitor first interacted with a tool input
- `copy_button_click`, `tool_conversion`, `clear_button_click`
- `feedback_open`, `feedback_submit`, `toggle_all_click`

Custom event parameters such as `tool_name`, `source_tool`, and
`destination_tool` must be registered as event-scoped custom dimensions in GA4
before they appear in standard reports.

## Live Utilities

### Text Counter

Count characters, words, lines, paragraphs, and estimated AI tokens in real
time. Useful for writing to a limit, editing drafts, and planning prompt length.

- **Location**: [/text-counter](app/text-counter/page.tsx)
- **Features**: Character, word, line, paragraph, and token counting
- **Dependencies**: `tiktoken` for GPT-4 token estimation

### Case Converter

Transform text between 11 different case formats instantly, including programming conventions like camelCase, snake_case, and kebab-case.

- **Location**: [/case-converter](app/case-converter/page.tsx)
- **Features**: UPPER, lower, Title, Sentence, camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, dot.case, path/case
- **Implementation**: Pure client-side conversion with intelligent word boundary detection

### Text Sanitizer

Clean and transform text with 12 customizable sanitization options. Enable multiple filters simultaneously to process text in sequence.

- **Location**: [/text-sanitizer](app/text-sanitizer/page.tsx)
- **Features**: Trim lines, remove empty/duplicate lines, strip emoji/punctuation/numbers, normalize whitespace, sort/reverse lines
- **Pattern**: Sequential filter application with real-time preview

### JSON Wizard

Validate, format, search, and manipulate JSON data with advanced tooling.

- **Location**: [/json-wizard](app/json-wizard/page.tsx)
- **Features**:
  - Real-time validation with line/column error reporting
  - Pretty print, minify, escape/unescape JSON
  - Search with case sensitivity and match navigation
  - Synchronized scrolling between input and output
  - JSON statistics (keys, depth, size)
  - Sort keys alphabetically
  - Customizable indentation (2-8 spaces)

### CSV / JSON Converter

Bidirectional converter between CSV and JSON formats with proper data type parsing and nested object support.

- **Location**: [/csv-json-converter](app/csv-json-converter/page.tsx)
- **Features**:
  - JSON to CSV: Flattens nested objects with dot notation, handles arrays
  - CSV to JSON: Auto-detects types (numbers, booleans, null), creates nested objects from dot notation
  - Configurable delimiters (comma, semicolon, tab, pipe)
  - Optional header row handling
  - Proper CSV escaping (quotes, delimiters, newlines)
  - Real-time validation and error reporting

### Text Encoder

Encode and decode text using 17 different encoding formats with support for common web, programming, and cryptographic standards.

- **Location**: [/text-encoder](app/text-encoder/page.tsx)
- **Features**:
  - **Base Encodings**: Base64, Base58 (Bitcoin), Base91, ASCII85 (Adobe), Z85 (ZeroMQ)
  - **Web Encodings**: URL encoding, HTML entities, Quoted-Printable (MIME)
  - **Data Formats**: Hexadecimal, Binary, Unicode escape sequences
  - **Ciphers**: ROT13, Morse code
  - **Cryptographic Hashes**: MD5, SHA-1, SHA-256, SHA-512 (one-way only)
- **Implementation**: Bidirectional encoding/decoding with toggle between modes, async hash function support, comprehensive error handling

### JWT Decoder

Decode and inspect JSON Web Tokens (JWT) with syntax highlighting and automatic validation of standard claims.

- **Location**: [/jwt-decoder](app/jwt-decoder/page.tsx)
- **Features**:
  - Decode JWT header, payload, and signature with color-coded highlighting
  - Automatic validation of standard claims (exp, iat, nbf)
  - Visual indicators for expired or not-yet-valid tokens
  - Display algorithm, issued date, expiration date, and not-before date
  - Toggle between formatted and raw JSON output
  - Real-time decoding with error messages
  - Copy decoded output to clipboard
- **Implementation**: Client-side base64url decoding and RFC 7519 claim inspection without signature verification. Tokens are not sent to a server for decoding.

### Regex Tester

Test regular expressions with real-time match highlighting and capture group extraction.

- **Location**: [/regex-tester](app/regex-tester/page.tsx)
- **Features**:
  - Real-time regex pattern testing with match highlighting
  - Support for all JavaScript regex flags (g, i, m, s, u, y)
  - Interactive flag toggles with descriptions
  - Match details table showing full matches, indices, and capture groups
  - Named capture group support with automatic CSV header generation
  - Visual match highlighting in output with current match navigation
  - Error messages for invalid regex patterns
  - Copy all matches to clipboard
  - Convert capture groups to CSV (only shown when groups are present)
  - Match count display
- **Implementation**: Client-side regex execution with comprehensive error handling, useMemo for performance optimization
- **CSV Conversion**: When matches contain capture groups, a "Convert to CSV" button appears that:
  - Extracts capture groups from each match as CSV rows
  - Uses named group names as column headers (e.g., `(?<name>...)` becomes "name" header)
  - Omits headers when groups are unnamed (since "Group 1", "Group 2" isn't helpful)
  - Properly escapes CSV values containing commas, quotes, or newlines
  - Integrates with CSV/JSON Converter tool for further processing

**Example test data for CSV conversion:**

Pattern with named groups:

```
(?<name>[A-Z][a-z]+)\s+(?<age>\d+)\s+(?<city>[A-Z][a-z]+)
```

Test string:

```
Alice 30 Seattle
Bob 25 Portland
Charlie 35 Denver
Diana 28 Austin
```

This will produce CSV with headers:

```
name,age,city
Alice,30,Seattle
Bob,25,Portland
Charlie,35,Denver
Diana,28,Austin
```

## Architecture

This project follows **[Feature-Sliced Design (FSD)](https://feature-sliced.design/)** principles to organize code by business value and maintain clear separation of concerns.

### FSD Layer Structure

```
textytools/
├── app/                      # Next.js routing (thin composition layer)
│   ├── layout.tsx
│   ├── page.tsx             # Home page with tool grid
│   ├── diff-viewer/
│   │   └── page.tsx         # Composes DiffViewerProvider + components
│   └── [other-tools]/
│       └── page.tsx
├── src/
│   ├── features/            # Tool implementations (one per utility)
│   │   ├── diff-viewer/
│   │   │   ├── ui/          # Presentational components
│   │   │   ├── model/       # State management (hooks, context, types)
│   │   │   ├── lib/         # Feature-specific utilities
│   │   │   └── index.ts     # Public API exports
│   │   └── [other-tools]/
│   ├── entities/            # Domain logic (CSV parsing, JSON validation, etc.)
│   │   ├── csv/
│   │   └── json/
│   └── shared/              # Reusable infrastructure
│       ├── ui/              # UI components (ToolFrame, TextEditor, Modal, etc.)
│       ├── lib/             # Utilities (analytics, constants)
│       └── hooks/           # Shared hooks
├── package.json
├── tsconfig.json
└── next.config.ts
```

### FSD Import Rules

- **Layer hierarchy**: `app` → `features` → `entities` → `shared`
- Features can import from `entities` and `shared`, but not from other features
- All imports from a slice must use its public API (`index.ts`)
- Pages import only from feature roots, never from internal segments

### Context Provider Pattern

Modern features use React Context to avoid prop drilling and keep pages minimal:

**Example: diff-viewer**

```tsx
// app/diff-viewer/page.tsx (composition only)
<DiffViewerProvider>
  <ToolFrame headerRight={<DiffViewerHeader />}>
    <DiffViewerShell />
  </ToolFrame>
</DiffViewerProvider>;

// src/features/diff-viewer/model/DiffViewerProvider.tsx
export function DiffViewerProvider({ children }) {
  const value = useDiffViewer(); // Hook with all state
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// Components consume via context
const { stats } = useDiffViewerContext();
```

**Benefits**:

- Pages stay thin (just composition)
- No prop drilling through `ToolFrame`
- Components access only what they need
- State management isolated in `model/` layer

### Feature Structure

Each tool is organized into standard segments:

- **`ui/`** - Presentational components (Shell, Header)
- **`model/`** - Business logic, hooks, context providers, types
- **`lib/`** - Feature-specific utilities (algorithms, converters)
- **`index.ts`** - Public API (only export what pages need)

See [diff-viewer README](src/features/diff-viewer/README.md) for a complete implementation example.

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.0
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript 5
- **Fonts**: Geist Sans & Geist Mono
- **Special Dependencies**: tiktoken (for AI token counting)

## Design System & Patterns

[`DESIGN.md`](DESIGN.md) is the authority for the Textytools information
hierarchy, source/result relationships, interaction states, responsive behavior,
accessibility, tokens, shared primitives, and representative design fixtures.
Use the capability and trust contracts with it; an existing screen is evidence,
not automatic design precedent.

The current shared implementation includes `ToolFrame`, `TextEditor`,
`ToolDocumentation`, `ToolCard`, `SearchBox`, `Modal`, and `Toast`. Reuse an
existing product primitive when its contract fits, and extend it only for a new
semantic need rather than a one-off visual value.

## Adding New Utilities

To add a new utility following FSD principles:

### 1. Create the Feature Slice

Create the feature directory structure under `src/features/`:

```bash
mkdir -p src/features/your-utility/{ui,model,lib}
touch src/features/your-utility/{index.ts,ui/YourUtilityShell.tsx,model/useYourUtility.ts}
```

### 2. Implement the Hook (Model Layer)

Create state management in `model/useYourUtility.ts`:

```tsx
"use client";
import { useState, useMemo } from "react";

export function useYourUtility() {
  const [input, setInput] = useState("");

  const output = useMemo(() => {
    // Your transformation logic
    return input.toUpperCase();
  }, [input]);

  return { input, setInput, output };
}
```

### 3. Create the Provider (Optional, for Complex State)

For features with multiple components, use a context provider:

```tsx
// model/YourUtilityProvider.tsx
"use client";
import { createContext, useContext } from "react";
import { useYourUtility } from "./useYourUtility";

const Context = createContext(null);

export function YourUtilityProvider({ children }) {
  const value = useYourUtility();
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useYourUtilityContext() {
  const context = useContext(Context);
  if (!context) throw new Error("Must be used within YourUtilityProvider");
  return context;
}
```

### 4. Build the UI Component

Create `ui/YourUtilityShell.tsx`:

```tsx
"use client";
import { useYourUtilityContext } from "../model/YourUtilityProvider";
import { TextEditor } from "@/entities/editor";

export function YourUtilityShell() {
  const { input, setInput, output } = useYourUtilityContext();

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <TextEditor
        value={input}
        onChange={setInput}
        placeholder="Enter your text here..."
        height="h-96"
      />
      <TextEditor
        value={output}
        readOnly
        placeholder="Results will appear here..."
        height="h-96"
      />
    </div>
  );
}
```

### 5. Export Public API

Create `index.ts` to expose only what the page needs:

```tsx
export { YourUtilityProvider } from "./model/YourUtilityProvider";
export { YourUtilityShell } from "./ui/YourUtilityShell";
```

### 6. Create the Page (Composition Layer)

Create `app/your-utility/page.tsx`:

```tsx
"use client";
import { YourUtilityProvider, YourUtilityShell } from "@/features/your-utility";
import { ToolFrame } from "@/shared/ui/tool-frame/ToolFrame";
import { TOOL_NAMES } from "@/shared/lib/constants";

export default function YourUtility() {
  return (
    <YourUtilityProvider>
      <ToolFrame
        title="Your Utility Name"
        description="Brief description of what this utility does"
        toolName={TOOL_NAMES.YOUR_UTILITY}
        maxWidth="7xl"
      >
        <YourUtilityShell />
      </ToolFrame>
    </YourUtilityProvider>
  );
}
```

### 7. Add Tool Name Constant

Add your tool name to [src/shared/lib/constants.ts](src/shared/lib/constants.ts):

```tsx
export const TOOL_NAMES = {
  // ... existing tools
  YOUR_UTILITY: "your-utility",
} as const;
```

### 8. Add to Home Page

Edit [app/page.tsx](app/page.tsx) to add your utility using the `ToolCard` component:

```tsx
<ToolCard
  href="/your-utility"
  title="Your Utility"
  description="Brief description for the home page"
/>
```

### 9. Design Considerations

Apply [`DESIGN.md`](DESIGN.md), [`TRUST.md`](TRUST.md), and the relevant
[`FIXTURES.md`](FIXTURES.md) scenarios. Preserve the immediate browser-local
path, keep source and result relationships honest, expose assumptions and loss,
and verify the complete task across keyboard, focus, zoom, color schemes,
reduced motion, realistic density, and recovery states.

### 10. Common Patterns to Reuse

- [TextEditor](src/entities/editor/ui/TextEditor.tsx) for source and result data
- [ToolFrame](src/shared/ui/tool-frame/ToolFrame.tsx) for the shared tool-page hierarchy
- [ToolDocumentation](src/shared/ui/tool-documentation/ToolDocumentation.tsx) for task-led guides
- [SearchBox](src/shared/ui/search-box/SearchBox.tsx) for search and match navigation
- [Case Converter](src/features/case-converter/ui/CaseConverterShell.tsx) for exclusive option selection
- [Text Sanitizer](src/features/text-sanitizer/ui/TextSanitizerShell.tsx) for multiple cleanup options

## Development

### Getting Started

```bash
# Install dependencies
npm ci

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Run the complete Jest suite
npm test -- --runInBand

# Build and exercise the production app in Chromium
npm run test:e2e

# Format code
npm run format
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Code Quality

- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier
- **Type Safety**: Strict TypeScript mode enabled

### Browser Compatibility

The nine catalogued utilities perform their primary transformations in the browser.
The separate analytics and feedback paths use network services as documented in the
[privacy policy](app/privacy/page.tsx). Modern browser features used:

- ES2017+ JavaScript
- CSS Grid & Flexbox
- Dark mode via `prefers-color-scheme`
- Clipboard API for copy functionality

## Future Utility Ideas

Potential additions to consider:

- **Markdown Previewer**: Live markdown rendering
- **Color Converter**: HEX, RGB, HSL conversions
- **UUID Generator**: Generate UUIDs with various versions
