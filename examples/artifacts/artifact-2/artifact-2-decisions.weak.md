# The Fellowship Companion - Artifact II: Decisions

*`(For demonstration purposes only)`*

## System Capability

**Support decision-making for the Fellowship.**

I chose this because decisions are important in the journey.

## Flow

`[Flow](/src/flow-1-decisions.mermaid.md)`

>For this example see [decisions.weak.mermaid.md](https://github.com/EstebanTheWhite/The-FellowShip-of-the-Code-2026/blob/main/examples/artifacts/artifact-1/src/decisions.weak.mermaid.md)

## Wireframe

`[Wireframe](/src/decisions.png)`

> For this example see [decisions.weak.png](/src/decisions.weak.png)

## Design Rationale

This design supports the intent because it helps the Fellowship make decisions. The flow is straightforward and easy to understand.

I did not include too many details because that would make it complicated. The system should stay simple.

**Assumption:** The user knows what decision they want to make.

---
---

## Why this is weak

- Capability is too vague (*"Support decision-making"* is not narrowed down)
  - What kind of decision?
  - Route?
  - Risk?
  - Resource allocation?
  - Timing?
    - *No concrete scenario = no meaningful slice.*
- Flow is superficial
  - No decision branches
  - No alternative paths
  - No error states
  - No real system logic
  - Could apply to any app in the world
    - *It shows steps, but not reasoning.*
- Wireframe is generic
  - No structure explained
  - No prioritization of information
  - No indication of constraints
  - No connection to the journey context
    - *It describes a page with a text field and button.*
- Design rationale lacks thinking
  - No reference to assignment 1 intent/value
  - No trade-offs discussed
  - *"Keep it simple"* is not a design argument
  - Assumptions are trivial and unexamined
- No visible narrowing of scope
  - Why this slice matters?
  - What was intentionally excluded?
  - How this prepares future implementation?

*`This example is not entirely wrong, but it is very generic and would be very hard to build on in later assignments.`*
