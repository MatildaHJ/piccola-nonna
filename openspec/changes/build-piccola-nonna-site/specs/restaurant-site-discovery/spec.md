## Purpose

Make Piccola Nonna's location pages understandable, shareable, and discoverable by search engines and social platforms.

## ADDED Requirements

### Requirement: Location-specific page metadata
Each public location route SHALL publish a descriptive document title, meta description, canonical URL, and social-sharing metadata that identifies the corresponding Pizza or Cafe location.

#### Scenario: Search engine indexes Pizza
- **WHEN** a search engine retrieves the root route
- **THEN** the page exposes metadata identifying the Pizza restaurant and its location

#### Scenario: Visitor shares Cafe
- **WHEN** a social platform retrieves `/cafe` for a shared link preview
- **THEN** it receives metadata that identifies the Cafe location and its share image when one is supplied

### Requirement: Restaurant structured data
Each location route SHALL expose structured restaurant information that identifies its name, address, opening hours, and public website URL when those details are available.

#### Scenario: Search engine retrieves a location page
- **WHEN** a search engine parses a public location route
- **THEN** it can obtain the location's available restaurant details from structured data as well as visible page content

### Requirement: Crawlable location content
The Pizza location at the root route and the Cafe location at `/cafe` SHALL be independently addressable and expose their essential content in the initial HTML response.

#### Scenario: Crawler retrieves Cafe directly
- **WHEN** a crawler requests `/cafe` directly
- **THEN** it receives the Cafe's title, operational information, and location content without requiring a prior visit to the root route
