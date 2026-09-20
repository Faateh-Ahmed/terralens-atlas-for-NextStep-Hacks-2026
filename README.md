# TerraLens Atlas

Build the complete TerraLens web application from end to end.

TerraLens is an interactive environmental atlas that lets users explore Earth, discover environmental problems, understand their causes and impacts, compare locations, and explore possible solutions.

The goal is not to create a prototype, static mockup, or simplified MVP. Build the full working product, including the frontend, backend, database, data architecture, interactions, visualizations, responsive design, and all core features described below.

1. PRODUCT IDENTITY

Name: TerraLens

Tagline:
“Explore Earth. Understand the change. Move it forward.”

Core journey:

EXPLORE → DISCOVER → UNDERSTAND → COMPARE → EXPLORE SOLUTIONS

TerraLens should feel like:

Google Earth × Apple editorial design × modern environmental science platform

It should feel premium, sophisticated, calm, scientific, and highly polished.

Avoid:

childish environmental graphics

cartoon Earth illustrations

excessive bright green

excessive gradients

generic SaaS dashboard styling

clutter

cheesy “save the planet” messaging

2. VISUAL DESIGN

Use a premium dark editorial aesthetic.

Colors

Near-black / charcoal background

White primary typography

Soft-gray secondary typography

Restrained muted environmental green as an accent

Subtle translucent dark/glass panels

Thin low-contrast borders

Design principles

Large editorial typography

Generous whitespace

Strong visual hierarchy

Minimal but sophisticated UI

Smooth restrained animations

High-quality hover states

Smooth page transitions

Subtle glass effects where appropriate

The globe should remain the visual centerpiece

Do not turn the application into a conventional dashboard.

3. COMPLETE FULL-STACK ARCHITECTURE

Build the entire application, including:

Frontend

Backend

Persistent database

Data relationships

API/data access layer

Routing

Loading states

Error states

Empty states

Form validation where necessary

Responsive behavior

Accessibility

Performance optimization

The application should be structured cleanly and modularly so it can later be maintained and extended through GitHub/Cursor.

Do not hardcode the entire application into static frontend components.

Environmental data should come from the database/data layer.

4. DATABASE / DATA MODEL

Create a proper persistent data architecture.

Locations

Fields should include:

id

name

country

countryCode

type

latitude

longitude

summary

featured

createdAt

updatedAt

Types:

country

city

region

global

Categories

Fields:

id

name

slug

description

Categories:

AIR

WATER

CLIMATE

NATURE

OCEANS

WASTE

ENERGY

Environmental Issues

Fields:

id

locationId

categoryId

title

severity

summary

description

createdAt

updatedAt

Severity:

low

moderate

high

critical

Causes

id

issueId

title

description

Impacts

id

issueId

title

description

Solutions

id

issueId

title

description

expectedImpact

Indicators

id

issueId

name

value

unit

year

description

Sources

id

issueId

title

organization

url

publicationDate

accessedDate

Relationships:

Location → many Environmental Issues

Environmental Issue → one Location

Environmental Issue → one Category

Environmental Issue → many Causes

Environmental Issue → many Impacts

Environmental Issue → many Solutions

Environmental Issue → many Indicators

Environmental Issue → many Sources

5. REAL INTERACTIVE 3D GLOBE

Use an actual interactive 3D globe.

Use:

react-globe.gl / Globe.gl

Do NOT create:

a fake globe

a static image

a CSS sphere pretending to be a globe

a simplified placeholder

The globe should support:

rotation

zoom

pan/orbit controls

location markers

hover states

clickable locations

smooth camera transitions

country/location highlighting where practical

environmental visualization layers where appropriate

responsive behavior

The globe must be integrated with the actual location database.

When a user clicks a location marker, open the appropriate location information interface.

The globe should remain performant and visually elegant.

6. MAIN NAVIGATION

Create a clean navigation system:

TERRALENS

EXPLORE

PULSE

COMPARE

WHAT-IF

Keep navigation minimal and premium.

7. LANDING PAGE

Create a polished landing page.

Hero:

TERRALENS

EXPLORE EARTH.
UNDERSTAND THE CHANGE.
MOVE IT FORWARD.

Supporting text:

“An interactive atlas of environmental change, causes, impacts, and solutions.”

Primary CTA:

EXPLORE EARTH

The hero should prominently feature the 3D globe.

The landing page should communicate what TerraLens does without becoming text-heavy.

8. EXPLORE

Build the complete Explore experience.

The globe should be the main visual element.

Include:

Search

Location markers

Location discovery

Category filtering

Severity filtering where appropriate

Smooth globe navigation

Location information panels

Search placeholder:

“Search a country, city, or region…”

Users should be able to find locations and navigate directly to them.

9. LOCATION EXPERIENCE

When a user selects a location, show a sophisticated location panel/page containing:

Location name

Country/region

Summary

Environmental issues

Categories

Severity

Relevant indicators

Navigation into individual issues

The interface should feel like an editorial environmental case study rather than a dashboard.

10. ENVIRONMENTAL ISSUE EXPERIENCE

Each environmental issue should have a dedicated detailed experience.

Structure:

THE PROBLEM

Explain the environmental issue clearly.

CAUSES

Explain major contributing causes.

IMPACTS

Explain environmental, social, ecological, or infrastructure impacts where appropriate.

SOLUTIONS

Show realistic responses/interventions.

KEY INDICATORS

Show available data with:

value

unit

year

description

Do not fabricate statistics.

SOURCES

Every quantitative or externally sourced claim should have an appropriate credible source.

Sources should be presented clearly and linked where possible.

11. INITIAL DATA

Seed the database with a meaningful initial dataset.

At minimum include these featured locations:

Lahore — Pakistan

Karachi — Pakistan

Jakarta — Indonesia

Cape Town — South Africa

Dubai — UAE

Miami — United States

Manaus / Amazon — Brazil

Singapore

Delhi — India

Rotterdam — Netherlands

Build the architecture so additional countries, cities, and regions can easily be added later.

Use qualitative information when reliable quantitative data is unavailable.

Never invent environmental statistics.

12. ENVIRONMENTAL PULSE

Build the complete Pulse experience.

Purpose:

Allow users to understand environmental patterns at a global level.

Include:

Category selection

Global environmental visualization

Interactive globe visualization

Relevant location/region highlighting

Clear legends

Useful contextual information

Smooth transitions between categories

Categories should include:

Air

Water

Climate

Nature

Oceans

Waste

Energy

The visualization should be data-driven rather than a fake decorative heatmap.

13. COMPARE

Build a complete comparison experience.

Users should be able to select two locations.

Compare relevant information such as:

Environmental categories

Issues

Severity

Indicators where available

Causes

Impacts

Solutions

Include a section:

LEARNING ACROSS LOCATIONS

The comparison should help users understand how environmental challenges differ between places.

Do NOT present the comparison as a simplistic “winner.”

Do not create arbitrary overall scores unless scientifically justified by the available data.

14. WHAT-IF / SCENARIO EXPLORER

Build a complete What-If experience.

Users should be able to select:

Location

Environmental issue

Intervention

Intervention intensity

Then display an illustrative scenario showing how relevant indicators or environmental conditions could change.

Important:

These scenarios must be clearly labeled as:

Illustrative scenario — not a scientific prediction.

Do not fabricate scientific certainty.

Use a flexible architecture so scenario logic can be expanded later.

15. SEARCH

Implement global search.

Users should be able to search for:

Countries

Cities

Regions

Environmental issues

Search results should clearly identify the result type.

Selecting a result should navigate to the appropriate location or issue experience and/or move the globe to that location.

16. RESPONSIVE DESIGN

The entire application must work well on:

Desktop

Laptop

Tablet

Mobile

On desktop, use larger side panels where appropriate.

On mobile, convert appropriate panels into bottom sheets or mobile-friendly layouts.

The globe must remain usable on touch devices.

17. ANIMATION AND INTERACTION

Use polished but restrained animation.

Examples:

Smooth globe camera movement

Marker hover effects

Panel transitions

Page transitions

Category transitions

Subtle button interactions

Smooth data visualization transitions

Avoid excessive animation.

The interface should feel premium and fast.

18. PERFORMANCE

Optimize the application for performance.

Pay particular attention to:

3D globe rendering

Large datasets

Database queries

Image loading

Component rendering

Mobile performance

Avoid unnecessary re-renders.

Lazy-load expensive components where appropriate.

Do not sacrifice the actual globe or core functionality merely to make implementation easier.

19. ACCESSIBILITY

Implement reasonable accessibility throughout:

Keyboard navigation

Visible focus states

Semantic elements

Accessible buttons

Accessible form controls

Appropriate contrast

Screen-reader-friendly labels where appropriate

20. ERROR / LOADING / EMPTY STATES

Build proper states for:

Loading locations

Loading issues

Database errors

Search with no results

Missing environmental data

Missing indicators

Missing sources

Never leave users staring at a blank screen.

21. DATA QUALITY

Environmental information is central to TerraLens.

Do not fabricate:

statistics

measurements

environmental rankings

scientific claims

sources

If reliable quantitative information is unavailable, use qualitative descriptions instead.

Clearly distinguish:

documented information

indicators

illustrative scenarios

Use credible organizations and sources wherever possible.

22. CODE QUALITY

Create a clean, maintainable architecture.

Use:

reusable components

modular pages

reusable data-access functions

reusable visualization components

clear naming

sensible folder structure

environment variables for secrets

clean separation of frontend/database logic

Avoid creating one giant component containing the entire application.

Make it easy to continue development through GitHub and Cursor.

23. DO NOT BUILD THESE YET

Do NOT add an AI Environmental Assistant in the initial implementation.

The AI assistant can be added after the core TerraLens product is stable.

Do not sacrifice core functionality for AI.

24. CORE PRODUCT PRIORITY

If implementation complexity requires prioritization, preserve the following in this order:

Working full-stack architecture

Real interactive 3D globe

Explore experience

Location and environmental issue system

Causes / impacts / solutions

Credible sources and indicators

Pulse

Compare

What-If

Visual polish and advanced interactions

Do not replace major features with static placeholders if they can reasonably be implemented.

25. FINAL REQUIREMENT

Build TerraLens as a complete, functional, polished web application, not a concept, mockup, or partial prototype.

The goal is for the first generated version to contain the entire core TerraLens product:

A real 3D Earth → real searchable locations → real environmental issue architecture → causes → impacts → solutions → indicators → sources → global Pulse → location comparison → illustrative What-If scenarios.

Use the database as the source of truth for environmental content.

Make the entire experience feel like a serious, premium environmental intelligence platform rather than a generic hackathon dashboard.

Build the complete full-stack TerraLens application now.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/28996017-747d-495c-9573-ee9a32a76268).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

---

## Development notes (implementation)

**Stack:** TanStack Start (React 19, SSR) · Vite · Tailwind 4 · react-globe.gl / three.js · Supabase · TanStack Query.

**Routes** (`src/routes`): `/`, `/explore`, `/locations/$locationId`, `/issues/$issueId`, `/pulse`, `/compare`, `/what-if`. Selection state lives in URL search params, so every view can be linked to.

**Data flow**

- `src/data/seed/`: the curated dataset (62 locations, 70 issues, with causes, impacts, solutions, indicators and sources). It has no dependencies, so Node can run it directly.
- `src/lib/data/`: `getBundledAtlas()` renders immediately (also during SSR). In the browser, `useAtlas()` then loads the normalized Supabase schema and overlays it by slug. If Supabase can't be reached, the bundled data stays and the footer status says so.
- `supabase/migrations/20260917090000_seed_terralens_atlas.sql` is generated with `npm run db:seed-sql`. Running it more than once is safe: existing rows are left alone, and it also fixes source links that no longer resolve. After you change the seed files, regenerate it.

**Data integrity:** severity is descriptive metadata and is never turned into a score. Indicators appear only where a source supports them. What-If output is labelled as illustrative and contains no modelled numbers.

**Scripts:** `npm run typecheck`, `npm run lint`, `npm run build`, `npm run db:seed-sql`.

**Known local issue:** a `#` in the project folder path (for example `terralens-atlas-main#1`) breaks `vite build` and `vite dev`, because the bundler treats `#` as a URL fragment. Either rename the folder or build from a mapped drive (`subst T: "<path>"`).
