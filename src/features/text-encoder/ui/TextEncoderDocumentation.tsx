import {
  ToolDocumentation,
  type ToolDocumentationContent,
} from "@/shared/ui/tool-documentation";

const documentation = {
  eyebrow: "Ways to use Text Encoder",
  title: "Encode, decode, or hash a text value",
  introduction:
    "Choose one of 17 text formats and hash functions, inspect the result beside the source, and copy the value you need.",
  useCases: [
    {
      title: "Prepare an encoded value",
      description:
        "Encode text as Base64, URL encoding, hexadecimal, binary, Unicode escapes, or another available representation.",
    },
    {
      title: "Read encoded text",
      description:
        "Switch to Decode to inspect a supported encoded value without replacing the source.",
    },
    {
      title: "Create a text hash",
      description:
        "Generate an MD5, SHA-1, SHA-256, or SHA-512 digest for the current text.",
    },
  ],
  steps: [
    "Choose Encode or Decode for the task you need.",
    "Select the exact format, then paste or type the source value.",
    "Review the output and copy it when it matches the destination you are preparing it for.",
  ],
  detailsTitle: "Choose the right operation",
  details: [
    {
      title: "Base encodings",
      description: "Base64, Base58, Base91, ASCII85, and Z85.",
    },
    {
      title: "Text representations",
      description:
        "URL encoding, HTML entities, hexadecimal, binary, Unicode escapes, quoted-printable, ROT13, and Morse code.",
    },
    {
      title: "One-way hashes",
      description:
        "MD5, SHA-1, SHA-256, and SHA-512 create digests and cannot be decoded back to the source.",
    },
  ],
  example: {
    sourceLabel: "Plain Text",
    source: "Hello",
    resultLabel: "Base64",
    result: "SGVsbG8=",
  },
  tips: [
    "Choose the exact format expected by the destination; similarly named encodings are not interchangeable.",
    "Decode is unavailable for the four hash functions because a digest does not contain a reversible copy of the source.",
    "Malformed encoded input appears as an Error result so you can correct the source or format.",
  ],
} satisfies ToolDocumentationContent;

export const TEXT_ENCODER_DOCUMENTATION_FEATURES = documentation.useCases.map(
  (useCase) => `${useCase.title}: ${useCase.description}`,
);

export function TextEncoderDocumentation() {
  return (
    <ToolDocumentation documentation={documentation} slug="text-encoder" />
  );
}
