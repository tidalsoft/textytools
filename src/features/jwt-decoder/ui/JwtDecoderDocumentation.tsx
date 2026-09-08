import {
  ToolDocumentation,
  type ToolDocumentationContent,
} from "@/shared/ui/tool-documentation";

const documentation = {
  eyebrow: "Ways to use JWT Decoder",
  title: "Decode and inspect JWT claims",
  introduction:
    "Decode a three-part JSON Web Token, inspect its header, payload, signature text, and time claims, and keep the compact token in view.",
  useCases: [
    {
      title: "Inspect token claims",
      description:
        "Read the decoded header and payload when debugging a token or an authentication flow.",
    },
    {
      title: "Check time claims",
      description:
        "See issued-at, expiration, and not-before values interpreted against the current device clock.",
    },
    {
      title: "Review decoded JSON",
      description:
        "Copy the decoded object or transfer it once to JSON Wizard for formatting and search.",
    },
  ],
  steps: [
    "Paste a compact three-part JWT into JWT Token.",
    "Inspect the decoded header, payload, signature text, and available time claims.",
    "Copy the decoded JSON or continue in JSON Wizard when you need a closer look.",
  ],
  detailsTitle: "What the decoder checks",
  details: [
    {
      title: "Header and payload",
      description:
        "The first two Base64url parts must decode to JSON before a result is shown.",
    },
    {
      title: "Signature text",
      description:
        "The third token part is displayed, but its cryptographic signature, issuer, audience, and trust chain are not verified.",
    },
    {
      title: "Time claims",
      description:
        "The exp, iat, and nbf claims are interpreted when present; expiration and not-before states use the current device clock.",
    },
    {
      title: "Invalid input",
      description:
        "Wrong part counts, invalid Base64url, and non-JSON headers or payloads produce an inline decode error.",
    },
  ],
  example: {
    sourceLabel: "Compact JWT",
    source: "eyJhbGciOiJub25lIn0.eyJzdWIiOiJmaXh0dXJlLXVzZXIifQ.synthetic",
    resultLabel: "Decoded claims",
    result: "alg: none · sub: fixture-user · signature: synthetic",
  },
  tips: [
    "Decoded does not mean valid, authentic, trusted, or safe to use.",
    "An expiration or not-before result describes the time claim, not the token signature.",
    "Avoid pasting production tokens containing sensitive data, and clear the token when using a shared device.",
  ],
} satisfies ToolDocumentationContent;

export const JWT_DECODER_DOCUMENTATION_FEATURES = documentation.useCases.map(
  (useCase) => `${useCase.title}: ${useCase.description}`,
);

export function JwtDecoderDocumentation() {
  return <ToolDocumentation documentation={documentation} slug="jwt-decoder" />;
}
