export const SITE_URL = "https://textytools.dev";

export const TOOL_CATALOG = [
  {
    slug: "text-counter",
    name: "Text Counter",
    description:
      "Count characters, words, lines, paragraphs, and estimated AI tokens in real time",
    metadataTitle: "Text Counter - Count words, characters, lines, and tokens",
    metadataDescription:
      "Count characters, words, lines, and paragraphs, and estimate AI tokens in real time with a free browser-based text analysis tool.",
    keywords: [
      "word counter",
      "character counter",
      "text counter",
      "token counter",
      "AI token counter",
      "gpt token counter",
      "token estimator",
      "paragraph counter",
      "line counter",
      "word count online",
      "character count",
    ],
  },
  {
    slug: "diff-viewer",
    name: "Diff Viewer",
    description:
      "Compare two text blocks with side-by-side diff highlighting and search",
    metadataTitle: "Diff Viewer - Compare text side-by-side with highlights",
    metadataDescription:
      "Compare two text blocks with side-by-side diff highlighting, search, and navigation. Helpful for code, documents, and prose diffing.",
    keywords: [
      "diff viewer",
      "compare text",
      "text diff",
      "side-by-side diff",
      "diff tool",
      "compare files",
      "code diff",
      "text comparison",
      "diff highlight",
      "online diff tool",
    ],
  },
  {
    slug: "case-converter",
    name: "Case Converter",
    description: "Transform text between different case formats instantly",
    metadataTitle: "Case Converter - Convert between 11 case formats quickly",
    metadataDescription:
      "Transform text between 11 different case formats instantly: UPPER, lower, Title, Sentence, camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, dot.case, and path/case. Free browser-based case conversion tool.",
    keywords: [
      "case converter",
      "convert case",
      "camelCase",
      "pascalCase",
      "snake_case",
      "kebab-case",
      "title case",
      "sentence case",
      "upper case",
      "lower case",
      "case conversion",
      "case converter online",
    ],
  },
  {
    slug: "text-sanitizer",
    name: "Text Sanitizer",
    description:
      "Clean and transform text with customizable sanitization options",
    metadataTitle: "Text Sanitizer - Clean, trim, and normalize text quickly",
    metadataDescription:
      "Clean text with 12 selectable operations for lines, whitespace, character removal, sorting, and reversal. Review the result beside the source in your browser.",
    keywords: [
      "text sanitizer",
      "clean text",
      "remove emojis",
      "remove punctuation",
      "strip numbers",
      "remove duplicates",
      "normalize whitespace",
      "trim lines",
      "sort lines",
      "text cleaning",
    ],
  },
  {
    slug: "json-wizard",
    name: "JSON Wizard",
    description: "Format, validate, and search JSON with real-time feedback",
    metadataTitle: "JSON Wizard - Validate, format, and edit JSON easily",
    metadataDescription:
      "Validate, format, search, and manipulate JSON data with advanced tooling. Features real-time validation, pretty print, minify, escape/unescape, search with match navigation, and sort keys. Free browser-based JSON formatter.",
    keywords: [
      "json formatter",
      "json validator",
      "pretty print json",
      "json beautifier",
      "json minify",
      "json editor",
      "json search",
      "validate json",
      "json parse",
      "json tools",
    ],
  },
  {
    slug: "csv-json-converter",
    name: "CSV / JSON Converter",
    description: "Convert CSV rows to JSON or JSON arrays to CSV",
    metadataTitle: "CSV / JSON Converter - Convert between CSV and JSON",
    metadataDescription:
      "Convert CSV rows to JSON or JSON arrays to CSV with inferred scalar values, dotted nested fields, configurable delimiters, and quoted-field escaping in your browser.",
    keywords: [
      "csv to json",
      "json to csv",
      "csv converter",
      "csv parser",
      "json parser",
      "data conversion",
      "csv import",
      "csv escape",
      "csv to json converter",
      "csv json tool",
      "spreadsheet to json",
    ],
  },
  {
    slug: "text-encoder",
    name: "Text Encoder",
    description: "Encode and decode text using Base64, URL, Hex, and more",
    metadataTitle: "Text Encoder - Encode, decode, and hash text formats",
    metadataDescription:
      "Encode, decode, or hash text with 17 available options, including Base64, URL encoding, hexadecimal, binary, Unicode escapes, ROT13, Morse code, MD5, SHA-1, SHA-256, and SHA-512.",
    keywords: [
      "text encoder",
      "base64 encode",
      "base64 decode",
      "url encode",
      "url decode",
      "hex encode",
      "hex decode",
      "rot13",
      "morse code",
      "encode decode",
      "hash generator",
      "md5 sha1 sha256",
      "binary converter",
    ],
  },
  {
    slug: "jwt-decoder",
    name: "JWT Decoder",
    description: "Decode and inspect JSON Web Token contents and time claims",
    metadataTitle: "JWT Decoder - Decode and inspect token claims",
    metadataDescription:
      "Decode and inspect JSON Web Tokens (JWT) in your browser with syntax highlighting and automatic claim checks. View header, payload, signature text, algorithm, expiration, and standard claims without signature verification.",
    keywords: [
      "jwt decoder",
      "decode jwt",
      "jwt inspector",
      "jwt validation",
      "jwt token",
      "inspect jwt",
      "jwt payload",
      "jwt header",
      "jwt verify",
      "jwt decode online",
    ],
  },
  {
    slug: "regex-tester",
    name: "Regex Tester",
    description:
      "Test JavaScript regular expressions with match highlighting and capture groups",
    metadataTitle: "Regex Tester - Test patterns and capture groups online",
    metadataDescription:
      "Test JavaScript regular expressions with match highlighting, capture group extraction, flags, and CSV conversion in your browser.",
    keywords: [
      "regex tester",
      "regular expression tester",
      "javascript regex",
      "regex capture groups",
      "regex match",
      "regex flags",
      "online regex tool",
      "regex to csv",
    ],
  },
] as const;

export type ToolSlug = (typeof TOOL_CATALOG)[number]["slug"];

export function getTool(slug: ToolSlug) {
  const tool = TOOL_CATALOG.find((candidate) => candidate.slug === slug);

  if (!tool) {
    throw new Error(`Unknown tool slug: ${slug}`);
  }

  return tool;
}
