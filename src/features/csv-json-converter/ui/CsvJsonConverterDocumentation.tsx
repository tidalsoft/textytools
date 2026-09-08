import {
  ToolDocumentation,
  type ToolDocumentationContent,
} from "@/shared/ui/tool-documentation";

const documentation = {
  eyebrow: "Ways to use CSV / JSON Converter",
  title: "Move tabular data between CSV and JSON",
  introduction:
    "Convert a CSV table to a JSON array or a JSON array of objects to CSV, with the original input kept beside the result.",
  useCases: [
    {
      title: "Turn CSV rows into JSON",
      description:
        "Convert labelled spreadsheet-style rows into a JSON array with inferred scalar values.",
    },
    {
      title: "Export JSON as CSV",
      description:
        "Flatten an array of JSON objects into delimited rows for a spreadsheet or another tabular tool.",
    },
    {
      title: "Review converted JSON",
      description:
        "Send a successful CSV-to-JSON result to JSON Wizard for formatting, searching, or closer inspection.",
    },
  ],
  steps: [
    "Paste CSV or JSON into Input and check the displayed conversion direction.",
    "Choose the delimiter and whether the CSV has or should include headers.",
    "Review Output, then copy it or continue a JSON result in JSON Wizard.",
  ],
  detailsTitle: "How conversion is interpreted",
  details: [
    {
      title: "Conversion direction",
      description:
        "Input beginning with { or [ is treated as JSON. Other valid JSON is also recognized; the rest is treated as CSV using your selected options.",
    },
    {
      title: "Delimiters",
      description: "Choose comma, semicolon, tab, or pipe-separated CSV.",
    },
    {
      title: "Headers and values",
      description:
        "Headers can become JSON property names, and CSV values can be inferred as numbers, booleans, null, or strings.",
    },
    {
      title: "Nested objects",
      description:
        "JSON objects are flattened to dotted columns; dotted CSV headers can create nested JSON objects.",
    },
  ],
  example: {
    sourceLabel: "JSON",
    source: '[{"name":"Alpha Example","count":2}]',
    resultLabel: "CSV",
    result: "name,count\nAlpha Example,2",
  },
  tips: [
    "Check the shown direction before using the result because input not recognized as JSON is treated as CSV.",
    "Type inference and dotted paths can change the representation, so keep the source and review converted values.",
    "Quoted delimiters and quotes are supported, but quoted fields containing line breaks are not.",
  ],
} satisfies ToolDocumentationContent;

export const CSV_JSON_CONVERTER_DOCUMENTATION_FEATURES =
  documentation.useCases.map(
    (useCase) => `${useCase.title}: ${useCase.description}`,
  );

export function CsvJsonConverterDocumentation() {
  return (
    <ToolDocumentation
      documentation={documentation}
      slug="csv-json-converter"
    />
  );
}
