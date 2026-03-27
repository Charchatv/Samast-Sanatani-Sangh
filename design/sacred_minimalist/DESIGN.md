# Design System Document

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Modern Sanctuary."** This philosophy rejects the noisy, hyper-stimulating patterns of contemporary tech and instead embraces an editorial, museum-like experience. We aim to honor the ancient and the eternal through a lens of minimalist sophistication.

To move beyond "template" design, we utilize **intentional asymmetry**. Hero sections should not always be centered; instead, leverage high-contrast typography scales (e.g., a massive `display-lg` heading paired with generous `spacing-24` white space) to create a sense of rhythm and breath. The layout should feel like a premium printed monograph—stable, authoritative, and profoundly spacious.

---

## 2. Colors
Our palette is grounded in the earthy tones of sacred earth and the warmth of a ceremonial flame, set against the purity of off-white surfaces.

*   **Primary (`#9e3d00`):** Burnt Sienna. Use for core actions and primary brand moments.
*   **Secondary (`#745853`):** Muted Clay. Used for secondary UI elements and supporting accents.
*   **Surface Hierarchy:**
    *   **Background (`#faf9f6`):** The "Sacred Cream" base.
    *   **Surface-Container-Low (`#f4f3f1`):** Used for large, subtle sectioning.
    *   **Surface-Container-Highest (`#e3e2e0`):** Used for nested interactive elements.
*   **The "No-Line" Rule:** Explicitly prohibit 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `background` surface provides all the definition needed.
*   **The "Glass & Gradient" Rule:** For floating navigation or modal overlays, use a semi-transparent `surface` color with a `backdrop-blur` of 20px. Enhance hero CTAs with a subtle linear gradient from `primary` (`#9e3d00`) to `primary_container` (`#c64f00`) at a 135-degree angle to provide a luminous, high-end "glow."

---

## 3. Typography
The typography is a dialogue between the ancient and the modern.

*   **Headings (Newsreader):** An elegant, high-end serif with varied stroke widths. Use `display-lg` for impactful spiritual quotes or primary section headers. The serif conveys authority, tradition, and wisdom.
*   **Body (Manrope):** A clean, modern sans-serif that ensures legibility. Its geometric roots balance the organic nature of the serif headings.
*   **Identity via Scale:** Maintain a dramatic contrast between `display-sm` (sub-headings) and `body-md`. This gap creates "editorial tension" that signals a premium experience. Use `label-md` in all-caps with `0.1em` letter spacing for navigational breadcrumbs or metadata to mimic architectural inscriptions.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than artificial structures.

*   **The Layering Principle:** Treat the UI as stacked sheets of fine paper. A card (`surface_container_lowest`) placed on a section (`surface_container_low`) creates a natural lift.
*   **Ambient Shadows:** If a floating element (like a primary modal) requires a shadow, use an extra-diffused blur (30px+) at 5% opacity using the `on_surface` color. This mimics natural light falling on a physical object.
*   **The Ghost Border Fallback:** If a boundary is strictly required for accessibility (e.g., input fields), use the `outline_variant` at 20% opacity. Never use 100% opaque borders.
*   **Subtle Motifs:** Integrate simplified sacred geometry or mandalas using `surface_variant` at 15% opacity as fixed background elements. They should be discovered by the eye, not demand attention.

---

## 5. Components

### Buttons
*   **Primary:** `primary` background, `on_primary` text. Roundedness: `md` (0.375rem). No shadow; use a slight scale-up (1.02x) on hover.
*   **Secondary:** `surface_container_high` background. This creates a "button" feel through tonal difference alone.

### Cards & Lists
*   **Zero-Divider Policy:** Forbid the use of divider lines. Separate list items using `spacing-4` vertical gaps or alternating background shifts between `surface` and `surface_container_low`.
*   **Spiritual Timeline:** Use a vertical line in `outline_variant` at 30% opacity. The "nodes" on the timeline should be `primary` circles with no border, creating a clean, modern trail of events.

### Input Fields
*   **Style:** Minimalist underline using `outline_variant` (30% opacity) that transitions to `primary` (100% opacity) and 2px thickness on focus. Labels should use `label-md` and sit above the field, never inside as placeholder text.

### Chips
*   **Style:** Use `secondary_container` with `on_secondary_container` text. Use `full` roundedness for a pill shape, ensuring they feel organic and soft.

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme white space (`spacing-16` and `spacing-20`) to separate major thematic sections. 
*   **Do** use asymmetrical image placements to create a sense of organic growth.
*   **Do** ensure all "spiritual motifs" are SVG-based and mathematically perfect (Sacred Geometry).
*   **Do** use `Newsreader` for any text that is intended to be "inspirational" or "authoritative."

### Don't
*   **Don't** use pure black (`#000000`). Use `on_background` (`#1a1c1a`) for a softer, more sophisticated "charcoal" feel.
*   **Don't** use standard "Material Design" shadows. They are too aggressive for this aesthetic.
*   **Don't** use bright, neon oranges. Stick strictly to the burnt sienna and deep earthy oranges in the palette.
*   **Don't** crowd the interface. If a screen feels full, it is likely over-designed. Remove elements until only the essential remains.