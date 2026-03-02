# The Fellowship Companion - Artifact IV: Logic & State

*`(For demonstration purposes only)`*

## System Capability

**Track the Fellowship's current quest step.**

Track the Fellowship's progress through the quest.

## Static Interface Implementation

`[Static Interface](/src/interface.html)`

> For this example see [interface.weak.html](/src/interface.weak.html) *(**logic implementation:** [logic.weak.js](/src/logic.weak.js))*

## Design Rationale

This logic supports the intent because when the user clicks the button, the quest step changes. The JavaScript follows the interface and updates what the user sees. I did not add advanced logic because this is a simple example.

**Assumption:** The Fellowship understands what the current quest step means.

---
---

## Why this is weak

- **Capability is too vague:** *"Track the current quest step"* is not a clearly scoped capability.
- **No concrete context:** No reference to why the step changes, who triggers it, or what constraints apply.
- **Logic & State issues:**
  - No explicit state model:
    - There is no variable that represents the quest state
    - The system has no internal understanding of progress
  - UI text is treated as state:
    - Logic depends on reading and comparing visible text
    - Changing copy would silently break behavior
  - No single source of truth:
    - Progress rules are scattered across conditionals
    - The system does not "know"”" where it is in the journey
  - Fallback logic hides errors:
    - Invalid states reset silently
    - The user is never informed when limits are reached
- **Flow & Consistency issues:**
  - Flow from Assignment 2 is not represented
  - Behavior is linear by accident, not by design
  - Logic is event-driven, not system-driven:
- **Conceptual issues:**
  - State and behavior are conflated: The interface is the logic
  - Could belong to any app, not this system
  - The Logic does not express intent - it merely updates text
- **Design rationale is superficial:** Restates the assignment constraints instead of reflecting on decisions.
- **Assumptions are not examined:** *"he Fellowship understands the quest step"* avoids responsibility instead of reasoning.
- **No linkage:** Weak or missing connection to Assignment 1 (intent/value) and Assignment 2 (wireframe) and Assignment 3 (representation).

*`This example technically works and shows interaction, but it has no stable state model and would be very difficult to extend, debug, or reason about in later assignments.`*
