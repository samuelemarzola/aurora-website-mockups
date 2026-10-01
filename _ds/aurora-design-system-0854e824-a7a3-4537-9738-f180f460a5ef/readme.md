# Aurora Design System

**Aurora Talent Agency** — "la nuova talent agency Creator-centrica". Aurora supports talent (content creators, video creators, comedians, digital creators) and builds projects with brands, putting the talents' content at the centre of the work. Three pillars: **UNICITÀ · TRASPARENZA · PERFORMANCE**. Market: Italy (Milano). Language: Italian, with occasional English taglines ("Quality over quantity").

## Sources
Everything here was derived from files uploaded to this project (`uploads/`):
- Fonts: Sharp Grotesk (full family, widths 05–25, all weights) + Poppins (OFL).
- Logos: `Logo_Aurora_{Orizzontale,Verticale}_{Nero,Bianco}.png`.
- Brand mockups: `Autora_Social.png` (Instagram stories), `Banner_metro.png` + `Metro_poster_Aurora.png` (OOH), `Business_card_Aurora.png`, `BC_Aurora.png`, `Folder_Aurora.png`, `Paper_Aurora.png` (letterhead), `Bandiera_Aurora.png` (flag), `Tablet_Aurora.png`, plus hat, bag, sign, vinyl, stamp, LR mockups.
- Texture: `Sfondo_viola.png` (grainy periwinkle background).
- Photography: `Foto_esempio*.png|jpg` (B&W talent cut-outs + 2 full-bleed shots).
- **Referenced but not present:** `VIG_Aurora.pdf` (brand guidelines) and `Social_mockup.pdf` were listed but never reached the project. All values below are sampled from the PNG mockups — re-upload the VIG to confirm.

There is no website, app or codebase in the source material; the only "screen" surfaces are social stories and OOH.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css` (`.aurora-grain`, `.aurora-texture-viola` helpers).
- `fonts/` — Sharp Grotesk 25 & 20 (subset of weights), Poppins 300–700.
- `assets/logo/` — horizontal, vertical, symbol × black/white (transparent PNG).
- `assets/photos/` — `cutout-02…07,10.png` (transparent B&W talent cut-outs), `talent-08.jpg`, `talent-09.jpg` (full-bleed).
- `assets/textures/` — `sfondo-viola.jpg`, `grain.png` (tile derived from the Sfondo viola).
- `assets/mockups/` — reference mockups (banner, stories, business cards, folder, flag).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand, Imagery).
- `components/` — React primitives (see below) + `palette.js` shared colour map.
- `ui_kits/social/` — Sponsored stories + metro banner recreation.
- `SKILL.md` — Agent-Skill entry point.

## Components
- **brand/** — `Logo`, `WordmarkPattern`, `OrbitRing`
- **core/** — `Button`, `IconButton`, `Icon`, `Tag`, `Badge`, `Avatar`, `CategoryLabel`
- **cards/** — `TalentCard` (signature notched card), `Card`
- **forms/** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- **navigation/** — `Tabs`, `StoryProgress`
- **feedback/** — `Dialog`, `Toast`, `Tooltip`

No component library exists in the source, so this is an authored standard set sized to the brand. Directly derived from mockups: Logo, WordmarkPattern, OrbitRing, IconButton (story arrows), CategoryLabel, Avatar (account disc), TalentCard, StoryProgress. **Intentional additions** (no counterpart in source, extrapolated from the visual language): Button, Tag, Badge, Card, all forms, Tabs, Dialog, Toast, Tooltip; `Icon` wraps Lucide because the identity ships no icon set.

## UI kits
- `ui_kits/social/index.html` — interactive sponsored-story player (5 stories, auto-advance, tap zones) + OOH metro banner view.

---

## CONTENT FUNDAMENTALS
- **Language:** Italian first. English only for short brand slogans ("QUALITY OVER QUANTITY").
- **Voice:** "noi" (we, the agency) speaking to brands and creators. Confident, concise, no hype adjectives: *"Supportiamo talent, costruiamo progetti con i brand, rendendo i contenuti dei nostri talenti il fulcro del nostro lavoro."*
- **Casing:** Display type and category labels are **ALL CAPS** (AURORA, TALENTI, BRAND, UNICITÀ). Names and roles are Title/sentence case ("Sofia Maresca", "Creator digitale", "CEO Outsideloop", "CEO & Founder").
- **Structure:** the three-line caption — CATEGORY / Name / Role — is the core copy unit. Headlines are 1–3 words; pillars are single nouns.
- **Platform copy** stays native: "Aurora Talent Agency · Sponsorizzato".
- **Contact formatting:** `(+39) 3469742330`, `nome.cognome@aurora.it`, `www.auroratalentagency.it`, "Aurora Talent Agency s.r.l · Via Roma 1, Milano (Italy) · P.IVA …".
- **No emoji**, no exclamation marks, no hashtags in brand layouts.

## VISUAL FOUNDATIONS
- **Colour:** a Nero (#191919) base with five flat, saturated accents — Viola #8888D3 (primary, folder/texture), Rosso #FF5560 (business cards), Lime #D6FA6E, Arancio #FF915A, Menta #A8DCC8. Accents rotate in sequence (viola → rosso → lime → arancio) across card rows; never more than one accent per surface plus Nero/Bianco. Lime is the only accent that takes Nero text.
- **Gradients:** only in social/flag — vertical, top→bottom, blending adjacent brand hues (blu notte, lilla, magenta, rosso, pesca) and **always fading into Nero** at the bottom. Always paired with grain. No diagonal or multi-stop rainbow UI gradients.
- **Texture:** fine film/paper grain over every colour field (Sfondo viola, cards, stories). Print pieces use textured stock; letterhead mockups add cling-film wrinkles.
- **Imagery:** strictly **black & white** portraits, high contrast, studio-lit, cut out from the background and dropped onto flat colour or gradient. Subject is centred, cropped at chest/waist, looking off-frame. Full-bleed B&W editorial shots for mood.
- **Type:** Sharp Grotesk 25 (wide) for the wordmark-style display — uppercase, Book/Light weight, +0.06em tracking. Sharp Grotesk 20 for text/contact details (Bold for names, Book Italic for roles). Poppins only for social platform chrome.
- **Motifs:** (1) the **orbit ring** — a 1px white hairline circle crossing the portrait, echoing the logo's two orbs; (2) the **AURORAURORA** repeat band with one run highlighted in an accent; (3) the **notched card** — top-left tab cut out holding two accent dots; (4) wireframe globe line-art on dark print (not supplied as an asset).
- **Layout:** generous dark negative space; logo centred; captions pinned top-right of cards; wordmark band pinned to the bottom. Cards sit in a tight equal-gap row.
- **Corners:** soft — 18px cards, 40–44px device frames, pill buttons/inputs. Dots/avatars/radios are perfect circles.
- **Borders & lines:** 1–1.5px hairlines (white 55% on dark, device outlines in accent colour). No heavy strokes.
- **Shadows:** none in UI; a soft drop shadow only on photographed print mockups (`--shadow-print`). Toasts get a subtle float.
- **Transparency & blur:** white at 72/48% for secondary text on dark; blurred Nero scrim behind dialogs only.
- **Motion:** calm and editorial — fades and short eased slides (`cubic-bezier(.22,1,.36,1)`, 140–480ms); story progress is linear. No bounces.
- **Hover/press:** outline controls fill with their colour on hover; solid buttons brighten ~8%; press scales to 0.97. Ghost buttons underline.
- **Focus:** Lime ring/border on dark, Nero on light.

## ICONOGRAPHY
- The identity has **no icon set**. The only icons in the mockups are thin circled ‹ › arrows and the ⋮ "more" glyph in Instagram chrome.
- Substitute: **Lucide** (via `lucide-static@0.460.0` on unpkg), rendered through the `Icon` component as a CSS mask so it takes `currentColor`. Arrows sit inside a 1.5px circular `IconButton`. ⚠️ Substitution — confirm or supply the original set.
- No emoji, no unicode-as-icon (except × in Tag remove).
- The **logo symbol** (figure balancing two orbs) doubles as the avatar mark on colour discs — `assets/logo/aurora-symbol-{black,white}.png`. Never redraw it.

## Font notes
Sharp Grotesk and Poppins were supplied as real files — no substitution. Only widths 25 and 20 are wired up; the other widths (05/10/15) remain in `uploads/` if a condensed cut is ever needed.
