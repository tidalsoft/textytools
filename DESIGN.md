# Textytools product design contract

This document defines the public, product-owned design contract for Textytools.
It governs the information, interaction, visual, responsive, and accessibility
decisions shared by the public tool catalog. It is a delivery contract, not a
claim that every current screen already conforms.

## Contract status

- Contract version: 1
- Decision authority: Linear issue `TEXT-14`
- Established: 2026-09-07
- Source state reviewed:
  [`c9badef`](https://github.com/tidalsoft/textytools/commit/c9badef1fb98e8dbf7d78f27835767434b657ee0)
- Capability baseline: [`CAPABILITIES.md`](CAPABILITIES.md)
- Trust language: [`TRUST.md`](TRUST.md)
- Fixture boundary: [`FIXTURES.md`](FIXTURES.md)

This contract is derived from the public product, its owned source and language,
its current browser workflows, and its accessibility requirements. It does not
use a third-party template, a generated design-system default, or another
product's visual system as authority. OpenDesign is not required to interpret or
apply it.

Behavior remains authoritative in `CAPABILITIES.md`; certainty, safety,
processing, persistence, and recovery terms remain authoritative in `TRUST.md`.
This document defines how those facts should be organized and presented. A
design change does not authorize new behavior or turn a known capability gap
into a supported claim.

## Product point of view

Textytools helps a programmer or student turn text or structured data into a
useful, inspectable result without setup, an account, or an unnecessary server
round trip. The primary object is the person's content, not the application.

The product should feel like a quiet, precise workbench:

- immediate enough for a one-off task;
- explicit enough to inspect assumptions, limits, and loss;
- dense enough for realistic technical material without resembling a dashboard;
- restrained enough that source, result, and the next action carry the visual
  emphasis; and
- familiar enough that browser, keyboard, selection, copy, and navigation
  behavior do not need to be relearned.

The distinctive composition is a legible source-to-result relationship. A tool
may show a single changing value, paired editors, or a comparison, but it should
make the transformation direction and the retained source understandable. Do not
add ornamental gradients, decorative hero space, repeated card grids, or
dashboard chrome when they do not clarify that relationship.

The text-only `textytools.dev` wordmark and the current light/dark neutral palette
are the owned brand baseline. Technical content uses monospace type; interface
language uses sans serif type. Color is reserved for state and useful action
distinctions rather than decoration.

## One complete tool path

The narrowest complete path is:

1. **Orient.** Identify the tool and its concrete job.
2. **Understand handling.** See where content is processed and how long current
   work is kept before entering sensitive material.
3. **Provide source.** Paste, type, or receive content through a supported
   one-time handoff.
4. **Inspect the result.** Keep the source available and show the result,
   certainty, assumptions, and material limits together.
5. **Correct safely.** Change the source or relevant options without losing
   unaffected work.
6. **Continue.** Copy, export, or move a supported result to the next named tool.
7. **Learn when needed.** Use task-led documentation after the interactive path,
   without making documentation a prerequisite for first use.

The first meaningful view must expose steps 1 through 4. The interactive tool is
the primary page content. Documentation follows it and leads with current use
cases rather than product history or implementation detail.

## Information hierarchy

### Catalog page

The catalog page has three levels:

1. the product name and one-sentence promise;
2. the public tools, each named by job and described in one concrete sentence;
3. feedback, privacy, and company information.

Tool cards are navigation, not miniature feature summaries. Keep their titles and
descriptions comparable in length, make the complete card operable, and preserve
a logical source order when the grid changes columns.

### Tool page

A tool page orders information by the decision the person must make:

1. return navigation and feedback;
2. tool name and current job;
3. the shared processing and temporary-retention statement, unless equivalent
   information is already adjacent to the first input;
4. source input and the current transformation direction;
5. options that materially affect interpretation or output;
6. result, trust state, and applicable limits;
7. contextual result actions;
8. task-led documentation and examples; and
9. the shared footer.

Summary statistics may sit beside the heading on wide screens, but must follow
the heading in reading and focus order. They support the current result and must
not compete with the input for initial attention.

Do not use a card solely to place a border around every label or value. A surface
earns containment when it groups a coherent input, result, option set, disclosure,
or decision.

## Fast and advanced paths

First use must be possible with a useful default and no preliminary
configuration. Make the primary input the first task-specific keyboard stop; do
not make a person dismiss onboarding or choose options that have safe, honest
defaults.

Advanced controls use progressive disclosure when their meaning is contextual,
but a control must remain visible before it changes interpretation, discards
information, or makes a result lossy. Inferred and detected choices are always
inspectable and correctable. Hiding an assumption is not simplification.

For real-time tools, editing is the primary action and the result updates without
a redundant submit button. For work that can be slow, destructive, externally
visible, or expensive, use an explicit outcome-labelled action with progress and
completion feedback.

Defaults should produce the common supported result while remaining named in the
interface. Restored settings are not new defaults and must not be presented as if
the product chose them for the current input.

## Source, result, and provenance

- Keep the source and result as separately labelled regions whenever a transform
  changes representation, removes information, or needs verification.
- Never overwrite the only visible source with a derived result. A result is
  reversible only when its algorithm guarantees reversal; a retained source is a
  recovery path, not proof of reversibility.
- Show transformation direction in words or familiar notation, together with the
  detected, inferred, or selected format. Direction alone must not overstate how
  the source format was established.
- Keep material options and assumptions close to the relationship they change.
  A distant options panel must not be the only explanation of a result.
- Associate invalid, partial, ambiguous, and lossy states programmatically with
  the affected source, result, and action controls.
- Preserve selection, scrolling, and unaffected options while a person corrects
  input. Do not erase invalid source.
- A one-time handoff names both destination and value, removes the transfer value
  after consumption, and leaves a browser-standard route that supports back,
  forward, and reload as defined by the capability contract.
- State processing and persistence separately from result certainty. An exact
  result can still contain temporarily retained content.

On wide screens, paired source and result regions may appear side by side when
comparison is the job. When sequential transformation is the job, a stacked
source-then-result layout is preferred unless both panes remain comfortably
readable side by side. On narrow or zoomed screens, use the same source order and
stack the regions; never hide the source to make room for the result.

## Trust states and next actions

Use the exact vocabulary and required explanation order in `TRUST.md`. The
following presentation roles do not replace those words.

| Meaning | Presentation role | Required action treatment |
| --- | --- | --- |
| Exact or detected with no material caveat | Neutral result state with a text label and relevant evaluation boundary | Offer the next useful result action. |
| Estimated or inferred | Qualified result state; the basis or assumption stays adjacent | Offer verification or a way to change the basis or assumption. |
| Partial or ambiguous | Persistent caution before output actions; identify affected content | Offer review, selection, correction, or retry before unqualified copy/export. |
| Invalid | Inline problem associated with its source and, when needed, a summary link | Preserve input, identify the rule and location, and move to correction. |
| Lossy | Pre-action explanation or preview plus a qualified result state | Keep source visible; offer adjustment, explicit continuation, or cancellation. |
| Destructive | Specifically named control separated from frequent actions | Explain scope and recovery, then offer safe cancellation and proportional confirmation. |
| Temporary, saved, or recovered | Persistence or recovery statement near the affected work | Offer copy/export, review, retry, clear, or delete according to the actual lifecycle. |

Color and icons may reinforce these roles but never carry them alone. Use neutral
zinc for ordinary exact results, red for invalid or destructive conditions, and
amber for caution where the distinction is needed. Blue is a contextual
continuation action, not a generic success color. Green may confirm a completed
safe action, but the accompanying text must name what completed.

Result actions appear only when a usable result exists. Prefer this order:

1. the primary result action, normally `Copy [value]` or `Download [value]`;
2. a supported continuation, named `Continue in [tool]` or by its specific job;
3. correction, reset, or clear controls; and
4. feedback or navigation outside the work surface.

Use the action vocabulary in `TRUST.md`. Feedback says what happened—`Copied
JSON`, not `Success`—and supplies a recovery path when the action fails. A toast
may acknowledge a completed low-risk action, but errors, caveats, or information
needed for the next decision must remain in the page.

## Responsive behavior and density

Start with the essential task at the smallest realistic width, then add columns
when the content remains readable. Breakpoints respond to content failure rather
than a named device.

- Support a 320 CSS-pixel-wide viewport without page-level horizontal scrolling.
  A code or data region may scroll in the dimension inherent to its content when
  wrapping would change meaning.
- At 200% zoom, retain every control, label, trust state, and result action without
  overlap or clipping. At the 320 CSS-pixel reflow equivalent, stack the complete
  task rather than removing secondary-but-required information.
- Keep labels attached to their controls when actions wrap. Related actions may
  wrap as a group; do not allow a control to appear under the wrong pane.
- Use one column by default. Add a sidebar only when options remain usable without
  narrowing the working data below a practical reading width. A sidebar moves
  into the task sequence before the affected result when stacked.
- Let editors grow or scroll to keep the surrounding page stable. The current
  `17.5rem` editor height is a catalog baseline, not a universal fixed height.
- Use realistic long labels, error messages, Unicode, multiline data, and dense
  output to choose widths. Empty placeholder content is not layout evidence.
- Keep documentation prose to a readable measure; examples may use the wider tool
  measure when their structure requires it.

The existing maximum measures are the starting implementation values: `80rem`
for the widest tool frame, `64rem` for task documentation, and `56rem` for the
catalog. Change them only when representative content demonstrates a better
boundary.

## Keyboard, focus, and assistive technology

- Use native links, buttons, text areas, inputs, selects, checkboxes, headings,
  lists, tables, and disclosure controls before adding ARIA.
- The DOM order is the task order. CSS columns must not cause keyboard or screen
  reader users to encounter result actions before the source or assumptions that
  produced them.
- Every task, including changing options, correcting an error, copying a result,
  and continuing to another tool, must be operable with a keyboard.
- Show a visible focus indicator for every interactive element. Use a solid
  two-pixel ring or an equally visible treatment with at least 3:1 contrast
  against adjacent colors; do not rely on a subtle border-color change.
- Do not introduce product-wide shortcuts that conflict with browser or assistive
  technology commands. Document a shortcut at its control before depending on it.
- Associate labels, helper text, errors, character constraints, and trust states
  with their controls and regions. Announce new urgent errors with `alert`; use a
  polite status for non-urgent completion. Static explanations need no live
  region.
- When correction is outside the viewport, an error summary links to or focuses
  the invalid control. Do not move focus on every keystroke or real-time result
  update.
- A modal receives focus, contains the tab sequence, closes with Escape and an
  explicit close or cancel control, and restores focus to its trigger. A backdrop
  click may close it only when that cannot discard meaningful work.
- Interactive targets are at least 24 by 24 CSS pixels or have equivalent spacing
  under the applicable WCAG exceptions; prefer at least 44 by 44 CSS pixels for
  primary touch actions.

## Contrast, color scheme, zoom, and motion

Conform to the applicable WCAG AA requirements in both light and dark schemes.
Normal text requires at least 4.5:1 contrast, large text at least 3:1, and focus
indicators and meaningful non-text boundaries at least 3:1 against adjacent
colors. Test actual rendered color pairs; a Tailwind color name is not evidence.

Do not force a theme that contradicts the current browser preference until the
product offers an explicit, persistent theme control. Native form controls must
remain understandable in both schemes and under forced-color or high-contrast
settings.

Text can resize and reflow without loss of content or operation. Avoid fixed
pixel heights for prose and controls. Preserve browser zoom, text selection, and
copy/paste behavior.

Motion explains a change; it never communicates the only evidence that a change
occurred. Ordinary color and opacity feedback should finish in roughly 150–200
milliseconds. Honor `prefers-reduced-motion: reduce` by removing translation,
scale, parallax, and non-essential animated transitions. Do not make progress,
errors, or recovery depend on an auto-dismiss interval.

## Visual tokens

The shipped interface uses Tailwind utilities backed by these semantic roles.
New work reuses the role before adding a value. If implementation centralizes
tokens later, the token source and this table must change together; generated
token files must not become a competing authority.

### Color

| Role | Light | Dark | Use |
| --- | --- | --- | --- |
| Canvas | zinc 50 (`#fafafa`) | zinc 950 (`#09090b`) | Page background |
| Surface | white (`#ffffff`) | zinc 900 (`#18181b`) | Editors, coherent panels, cards |
| Muted surface | zinc 100 (`#f4f4f5`) | zinc 800 (`#27272a`) | Selected or supporting regions |
| Strong text | zinc 900 (`#18181b`) | zinc 50 (`#fafafa`) | Headings, values, primary labels |
| Body text | zinc 600 (`#52525b`) | zinc 400 (`#a1a1aa`) | Descriptions and supporting copy |
| Border | zinc 200 (`#e4e4e7`) | zinc 800 (`#27272a`) | Ordinary boundaries |
| Interactive border | zinc 300 (`#d4d4d8`) | zinc 700 (`#3f3f46`) | Hover or stronger separation |
| Primary action | zinc 50 on zinc 900 | zinc 900 on zinc 50 | Main explicit action |
| Continuation | blue 900 on blue 100 | blue 100 on blue 900 at 30% | Cross-tool continuation |
| Invalid/destructive text | red 600 | red 400 | Named error or destructive state |

Do not use muted zinc text combinations that fail the required contrast for
functional copy. Syntax colors, diff colors, and selection colors require the
same semantic label or non-color cue as the state they reinforce.

### Type

- Interface: Geist Sans with the current system sans-serif fallback.
- Code and data: Geist Mono with the current system monospace fallback.
- Page title: `2.25rem`, bold, tight tracking at the current wide layout; allow a
  fluid reduction when the title would wrap awkwardly.
- Section heading: `1.25rem` to `2.25rem`, semibold or bold according to level.
- Body: `1rem`; introductory copy may use `1.125rem`.
- Controls and data: `0.875rem` by default; use `0.75rem` only for a secondary
  label that is not required to operate or interpret the tool.
- Prose line height: at least 1.5; technical data may be tighter only when rows
  remain distinguishable at zoom.

Do not use monospace type merely to make an interface look technical. Use it for
content where character shape, spacing, or literal value matters.

### Space, shape, and elevation

- Base spacing unit: `0.25rem`.
- Primary gaps: `0.5rem`, `0.75rem`, `1rem`, `1.5rem`, `2rem`, and `3rem`.
- Page inset: `1.5rem` at the current catalog and tool layouts, reduced only when
  necessary to preserve the task at narrow widths.
- Radius: `0.25rem` for compact controls, `0.375rem` for buttons, and `0.5rem`
  for editors and coherent panels.
- Border: one pixel for ordinary grouping; use spacing or type hierarchy instead
  of nested borders when containment is already clear.
- Elevation: none for ordinary work surfaces. Reserve a strong shadow for a
  temporary overlay such as a modal or toast.

Arbitrary values require a demonstrated content or interaction need. Near-
duplicate values are not a new design primitive.

## Product primitives

The implementation source remains the authority for whether a primitive exists.
This table defines the intended shared roles and where the current implementation
lives.

| Primitive | Role and contract | Current source |
| --- | --- | --- |
| Tool frame | Shared page hierarchy, navigation, heading, processing disclosure, feedback, and width | `src/shared/ui/tool-frame/ToolFrame.tsx` |
| Text editor | Labelled, selectable source or result data with read-only, wrapping, line, highlight, and error support as applicable | `src/entities/editor/ui/TextEditor.tsx` |
| Tool documentation | Use cases, short steps, details, a realistic example, limitations, and privacy continuation after the tool | `src/shared/ui/tool-documentation/ToolDocumentation.tsx` |
| Tool card | Complete catalog navigation target with a concise title and description | `src/shared/ui/tool-card/ToolCard.tsx` |
| Search box | Labelled search, clear, match status, and navigation where supported | `src/shared/ui/search-box/SearchBox.tsx` |
| Modal | One short interrupting decision with focus containment, Escape, cancellation, and focus restoration | `src/shared/ui/modal/Modal.tsx` |
| Toast/status | Named acknowledgement for a completed low-risk action; not the sole location for errors or required decisions | `src/shared/ui/toast/Toast.tsx` |

A primitive must define rest, hover where available, focus, active, selected,
disabled, loading, success, caution, invalid, and destructive states that are
material to its role. Do not add a variant solely to reproduce a one-off color or
spacing value. When a tool needs a new semantic state, extend the nearest honest
primitive or keep the state local until more than one supported use demonstrates
a shared contract.

## Representative design fixtures

All design and usability fixtures follow the synthetic data and provenance rules
in `FIXTURES.md`. A fixture shown in a mockup, screenshot, test, or documentation
example is still product data and must not contain customer content, live tokens,
secrets, production logs, or company-confidential material.

Every materially changed tool path is exercised with the applicable set below:

| Fixture | What the design must prove |
| --- | --- |
| Empty | The primary input, expected form, and first useful action are understandable without decorative filler. |
| Successful small | A representative source produces a labelled, inspectable result and an obvious next action. |
| Successful dense | Long lines, Unicode, many rows, or many matches remain readable and bounded without hiding controls. |
| Invalid | The source remains intact; the failed rule, location when known, and correction path are associated and visible. |
| Partial | Usable and omitted portions are distinguished before result actions. |
| Ambiguous or inferred | Competing interpretations or assumptions are named and correctable. |
| Lossy or destructive | The lost distinctions or removed object, source preservation, recovery, confirmation, and cancellation are explicit. |
| Temporary or restored | Session lifetime, restored values, corrupt-state recovery, and clear behavior use the vocabulary in `TRUST.md`. |
| Interaction failure | Clipboard, handoff, feedback, or another boundary failure leaves a manual or retry path. |
| Responsive and accessible | Narrow, wide, 200% zoom, keyboard, visible focus, both color schemes, high contrast, and reduced motion retain the complete task. |

Use the tool-specific catalog in `FIXTURES.md` for content and oracles. A design
artifact does not convert a `decision_required` fixture into approved behavior.
Record each materialized fixture with the required identifier, version,
configuration, outcome, assertions, provenance, licence, and `sensitive_data`
fields before treating it as repeatable evidence.

## Contract validation: CSV / JSON Converter

The company design method and this contract were applied directly to the current
CSV / JSON Converter at the reviewed source revision. No OpenDesign artifact,
template, skill, plugin, or design system was used. The review examined the route,
converter state, paired editors, options, error, copy action, handoff, processing
disclosure, capability baseline, trust contract, and fixture catalog.

The current screen already establishes useful foundations: the job is named,
source and result remain separate, the processing disclosure precedes input, the
default path produces a result while typing, and delimiter/header controls remain
available. The contract turns the following observations into specific decisions
for later authorized implementation:

| Observation | Contract decision |
| --- | --- |
| Any input that fails JSON parsing is labelled `CSV → JSON`, even though failure to parse as JSON does not prove CSV. | Show `Detected JSON · JSON to CSV` only after a successful JSON parse. Otherwise name the CSV assumption and selected delimiter, and require a choice when fixtures show material ambiguity. |
| Options appear in a right sidebar after both editors in DOM order. On a stacked layout they can follow the result they already changed. | Keep the fast default, but place interpretation-changing options and assumptions before the affected result in reading and focus order. The wide layout may still use a sidebar if it preserves that order. |
| A conversion failure appears as `Error: …` below the output, without being associated with the source. | Name the state, such as `Invalid CSV`, preserve the complete source, identify the failed rule and location when known, associate the message with the input and output, and give a correction action. |
| Type inference, dotted-path expansion, flattening, and unsupported quoted newlines are not visible before output actions. | Qualify inferred values and lossy structure next to the result. Put persistent partial, ambiguous, invalid, or lossy explanations before Copy or continuation. Do not imply general CSV compliance. |
| The source action is labelled `Clear`, although it also removes the only current source and therefore its derived result. | Label it `Clear input`, state the scope when it may surprise, and apply proportional destructive confirmation only when the consequence is not already obvious or another recoverable copy does not exist. |
| Copy reports the generic `Copied to clipboard` and does not expose clipboard rejection. | Report `Copied JSON` or `Copied CSV`. On rejection, keep a persistent message: `Could not copy [value]. Select the output and copy it manually.` |
| `Format with JSON Wizard` is emphasized in blue beside Copy. | Treat the action as a contextual continuation and name the handoff, for example `Continue in JSON Wizard`. Explain that the result is transferred once and becomes temporary state in the destination when that lifecycle is material. |
| Compact controls use inconsistent focus treatments, including border-color-only focus on the delimiter. | Apply the shared visible focus treatment to the select, checkbox, editors, Clear, Copy, and continuation action; verify 3:1 focus contrast in both schemes. |
| The two editors and options rely on empty and short examples for layout. | Exercise quoted delimiters, inferred scalar values, nested objects, Unicode, long rows, uneven rows, ambiguous input, and unsupported multiline fields at wide, narrow, and 200% zoom layouts before changing the composition. |

These decisions are consistent because the shared design method identifies the
customer decisions and complete path, while this product contract supplies the
Textytools hierarchy, visual roles, source/result relationship, trust vocabulary,
and fixture boundary. The review does not implement those changes or settle the
open CSV behavior decisions listed in `FIXTURES.md`; each requires separately
authorized delivery and regression evidence.

## Change control

Review a design-contract change like code when it can influence every tool.
Update this document with changes to the product's shared hierarchy, interaction
language, tokens, primitives, accessibility requirements, or fixture expectations.
Update `TRUST.md` when a meaning changes, `CAPABILITIES.md` when behavior changes,
and `FIXTURES.md` when the scenario or data contract changes.

Keep prose, implementation tokens, primitives, fixtures, and public claims in
agreement. Record imported asset, font, template, component, and upstream design
provenance and licence terms before adoption. The reviewed product has no checked-
in visual asset catalog; it uses the text wordmark, inline interface icons, Geist
fonts loaded through Next.js, Tailwind CSS, and repository-owned components. The
dependencies retain the terms recorded by their packages, while repository-owned
work uses this repository's licence. Existing inline-icon provenance is not
recorded, so do not treat those paths as approved source material for new icon
work until it is verified. Do not add third-party visual material without
recording its source and permitted use.
