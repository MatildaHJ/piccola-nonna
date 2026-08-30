## Purpose

Provide a consistent, accessible site frame and immediate location choice for visitors to Piccola Nonna's two Stockholm locations.

## ADDED Requirements

### Requirement: Shared site frame
The site SHALL present a shared header, footer, and Instagram section across the Pizza and Cafe location pages. The Instagram section SHALL show current posts from the distinct configured Instagram account for the active location. The shared frame SHALL adapt to the visitor's viewport and remain usable with keyboard and touch input.

#### Scenario: Visitor navigates between locations
- **WHEN** a visitor opens the Pizza route and then the Cafe route
- **THEN** both pages present the same shared site-frame regions while showing their respective location content

#### Scenario: Visitor uses a small viewport
- **WHEN** a visitor views either location page on a narrow viewport
- **THEN** the shared frame and its navigation controls remain visible, readable, and operable without horizontal scrolling

#### Scenario: Visitor views a location's Instagram section
- **WHEN** a visitor opens a location page with an available Instagram feed
- **THEN** the Instagram section displays posts from that location's configured Instagram account rather than the other location's account

### Requirement: Immediate location selection
The root experience SHALL present the supplied Piccola Nonna animated logo and immediate choices for the Pizza location and the Cafe location. The location choices SHALL be available without a timed delay or an animation that prevents selection.

#### Scenario: Visitor selects Pizza
- **WHEN** a visitor chooses Pizza from the location selection
- **THEN** the visitor is taken to the Pizza location content at the root route

#### Scenario: Visitor selects Cafe
- **WHEN** a visitor chooses Cafe from the location selection
- **THEN** the visitor is taken to the Cafe location content at `/cafe`

### Requirement: Motion preference support
The site SHALL preserve essential navigation and content access when a visitor requests reduced motion. Decorative movement SHALL be reduced or removed for visitors with that preference.

#### Scenario: Visitor requests reduced motion
- **WHEN** the visitor's device indicates a reduced-motion preference
- **THEN** the visitor can access location choices, navigation, and all content without relying on decorative animation
