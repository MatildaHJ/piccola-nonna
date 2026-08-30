## Purpose

Present clear, distinct operational and menu information for the Pizza restaurant and Gnocchi Cafe under the Piccola Nonna domain.

## ADDED Requirements

### Requirement: Pizza location information
The root route SHALL identify the Pizza restaurant in Sodermalm, Stockholm and present its current static menu and opening-hours information. It SHALL make clear that seating and pizza dough are limited and that the restaurant operates first come, first served without reservations.

#### Scenario: Visitor checks Pizza hours
- **WHEN** a visitor opens the Pizza route
- **THEN** the visitor can find the Pizza restaurant's opening hours without leaving the site

#### Scenario: Visitor checks Pizza visit policy
- **WHEN** a visitor opens the Pizza route
- **THEN** the visitor can find that reservations are not accepted and that service is first come, first served

### Requirement: Cafe location information
The `/cafe` route SHALL identify the Gnocchi Cafe in Slakthusomradet, Stockholm and present its current static menu and opening-hours information.

#### Scenario: Visitor checks Cafe menu
- **WHEN** a visitor opens `/cafe`
- **THEN** the visitor can find the Cafe menu without navigating to the Pizza route

#### Scenario: Visitor checks Cafe hours
- **WHEN** a visitor opens `/cafe`
- **THEN** the visitor can find the Cafe opening hours without leaving the site

### Requirement: Distinct location identity
Each location route SHALL use its own supplied logo and location-specific imagery while retaining the shared Piccola Nonna page structure.

#### Scenario: Visitor compares locations
- **WHEN** a visitor visits both location routes
- **THEN** the Pizza and Cafe are visually distinguishable through their respective supplied brand assets and content

### Requirement: Usable static content
Location details, menus, opening hours, and supplied links SHALL be maintained as static site content and rendered as readable HTML without requiring a client-side content service.

#### Scenario: Visitor loads a page without client-side scripts
- **WHEN** a visitor views either location route before client-side scripts are available
- **THEN** the location's menu and operational details remain available in the rendered page content
