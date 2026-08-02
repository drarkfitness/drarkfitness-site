# CLAUDE.md — Dr. ARK Fitness website

Project notes for Claude Code. Read this before changing anything.

---

## What this is

A one-page marketing website for Dr. ARK Fitness, plus a private admin dashboard.
Owner: **Dr. Abdur Rehman Khan (Dr. ARK)**, MBBS, RMP, PMDC 829867-03-M. Based in Peshawar, Pakistan.

The business sells one program: **The 16-Week Rebuild with Dr. ARK**, PKR 80,000, capped at 8 clients per cohort.

The site has one job: turn Instagram followers into WhatsApp conversations.

---

## Files

| File | What it is |
|---|---|
| `index.html` | The whole website. All HTML, CSS and JS in one file. |
| `admin.html` | Private dashboard at `/admin.html`. Supabase Auth login. |
| `content.js` | Fallback content if Supabase is unreachable. Do not delete. |
| `privacy.html` | Privacy policy and terms. |
| `supabase-setup.sql` | Database schema. Already run. |
| `images/` | Uploaded photos (most now go to Supabase Storage instead). |

No build step. No framework. No npm. Plain HTML deployed on Vercel from GitHub.

---

## How content works

Content comes from **Supabase** first, `content.js` second.

Elements the site fills at runtime — do not hardcode over these:

- `#c-price`, `#c-price-note`, `#c-price-total` — price
- `#c-photo-hero`, `#c-photo-about` — Dr. ARK's photos
- `#c-results` — client before/after stories
- `#c-faq` — questions and answers

Supabase tables: `site_content` (key/value), `client_results`, `faqs`, `leads`, `page_views`.

If you add a new editable field, do all three:
1. Add the key to `site_content` or a table
2. Add an input for it in `admin.html`
3. Read it in the loader in `index.html`

Otherwise Dr. ARK cannot edit it himself, which defeats the point.

---

## Design system — follow this exactly

```
--navy   #0D1B3E   text, dark sections
--paper  #FBFAF8   page background (never pure white)
--white  #FFFFFF   cards
--gold   #C9A84C   accent only — thin rules, small marks, never large fills
--slate  #4A5468   secondary text
--green  #2E7D5B   positive change only
```

**Fonts**
- Cormorant Garamond — headlines only, 32px and up
- Outfit — all body text, 16px minimum
- JetBrains Mono — every number, and small uppercase labels

**Rules**
- Corner radius 4px. Near-square reads clinical; rounded reads consumer.
- Borders are 1px hairlines, no drop shadows.
- Gold is never used for text on light backgrounds — it fails contrast. Use `#9A7C22` on light, `#DCC377` on navy.
- Small text needs MORE contrast, not less. Nothing below 12px.
- `color-scheme: light only` is set deliberately. iOS auto-darkens pages otherwise and the site becomes unreadable. Do not remove it.
- Almost no animation. Fade-and-rise on scroll, and the marker lines. Nothing else.

**The marker row** (`.marker`) is the signature component — a compact single-line readout of a client's change for weight, waist or HbA1c: `LABEL — start → end unit — change`. It reads left (start) to right (end) as time. There is deliberately **no progress bar**: an earlier version drew a line whose dot positions did not map to the real numbers, which implied a scale that was not real. The numbers stand on their own. Units are per-measurement and editable (kg/lb for weight, in/cm for waist; HbA1c is always %), stored in `weight_unit` / `waist_unit`. It is what makes the site look clinical rather than like a gym page. Keep it compact and honest.

---

## Copy rules — these matter more than the code

**Simple English.** Dr. ARK asked for this specifically. A 14-year-old should understand every sentence. No "clinically appropriate", "individualised", "adherence", "progressive overload". Short sentences.

**Never invent numbers.** No fake statistics, star ratings, client counts, or success rates. Multiple reviewers have suggested adding these. The answer is always no — he is a licensed doctor publishing health claims.

**Never claim to cure or reverse.** Not insulin resistance, not diabetes, not fatty liver. Say "improve", "manage", "lower your risk".

**Fat loss is energy balance.** Do not write copy implying broken metabolism is why someone cannot lose weight. The honest framing, already used on the page: losing fat means eating less than your body uses; the hard part is *why* that has been difficult — sleep, stress, medicines, health problems, food environment.

**Cultural specificity is the differentiator.** Roti, rice, daal, chai, dawats, shaadis, Ramadan. Use real words, not "traditional foods".

**No supplement claims, no prescribing claims.** He supports clients whose own doctor prescribes GLP-1s. He does not prescribe for coaching clients.

---

## Things deliberately NOT built — do not add without asking

- A quiz or assessment as a second CTA (splits the primary conversion; planned for later)
- App or dashboard screenshots (the app does not exist yet)
- Star ratings or review widgets (no reviews yet)
- Chatbot
- localStorage or sessionStorage anywhere
- Any framework, build step, or npm dependency

---

## Conversion architecture — do not change without discussion

- **One CTA everywhere: "Get Started".** No competing buttons.
- The form is 6 questions and sits on the page, not behind a click.
- On submit: save the lead to Supabase **first**, then open WhatsApp pre-filled. The save must happen even if WhatsApp fails, or the lead is lost.
- WhatsApp number: `923329999875`
- Section order was chosen carefully: problem → why plans fail → root cause → behaviour → what you get → price → why it is worth it → compare → how it works → results → GLP-1 → who it is for → about → form → FAQ.

---

## Mobile first, always

Most traffic is Instagram on Android over mobile data in Pakistan.

- Design and test at phone width first
- Keep the page fast — no heavy libraries, compress images, lazy load below the fold
- Tap targets 44px minimum
- The mobile menu is capped at 90vh with scroll

---

## Roadmap — where this is going

Current phase: **get the first 8 clients.**

Next, in order: save every lead (done) → collect 8 real transformations → separate Results page with filtering → 2–3 deep SEO articles (insulin resistance, prediabetes, PCOS) → interactive tools (waist risk checker, protein calculator) → group program → resource library → ARK OS platform.

The rule: **build a feature when something real is being lost without it, not on a schedule.**

---

## When in doubt

- Prefer removing something over adding something.
- Prefer plain text over a clever component.
- If a change would make the site slower, it needs a good reason.
- If a change makes a claim Dr. ARK cannot defend as a doctor, do not make it.


---

## Long-term direction — read before making structural choices

Dr. ARK is moving to a MacBook and wants automated content generation with his approval: articles, tools, lead magnets, programs.

**Architecture principle: the front end is disposable, the database is permanent.**

See `ARCHITECTURE.md` for the full plan. The rules that matter when changing anything:

1. **Never hardcode content that might be generated or edited.** It goes in Supabase.
2. **Anything publishable needs a status**, not a boolean: `draft / pending / approved / published / archived`.
3. **Store markdown, never HTML.** Stored HTML locks content to today's CSS.
4. **Every article and page needs a slug** from the moment it is created.
5. **Nothing goes live without Dr. ARK approving it.** Same rule as his client plans.

The `content`, `programs`, `subscribers` and `automation_log` tables already exist (see `supabase-future-schema.sql`). Use them rather than inventing new ones.

**Never automate:** client results, testimonials, medical claims, or replies to leads.

When the front end is rebuilt in Next.js, it should use templates — one article template, one tool template, one program template — so new content needs no new code.
