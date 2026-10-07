# AWDF Practical 8 — Ayush Kanani (24CS037)

## Performance Optimization and Lazy Loading in React

This practical demonstrates route-based code splitting with `React.lazy()` and `Suspense`, plus a separately lazy-loaded Insights module.

### Student
**Ayush Kanani — 24CS037**

### What this project demonstrates

- React route-based lazy loading
- `React.lazy()` and `Suspense`
- Meaningful loading fallback
- Lazy-loaded Projects route
- Lazy-loaded Contact route
- Additional lazy-loaded Insights module
- Network chunk verification
- Slow 3G fallback testing
- Before/after build comparison
- Responsive task-management style UI
- GitHub-ready project structure

---

## 1. Requirements

- Node.js 18+
- npm
- Chrome/Edge browser
- VS Code

No backend or MongoDB is required for this practical itself; the task is specifically focused on React frontend performance.

---

## 2. Run the optimized application

```bash
cd client
npm install
npm run dev
```

Open the URL printed by Vite, normally:

```text
http://localhost:5173
```

Routes:

```text
/
 /projects
 /contact
 /insights
```

---

## 3. Verify the optimized build

```bash
cd client
npm run build
```

The Vite output should contain more than one JavaScript chunk because Projects, Contact and Insights are loaded dynamically.

Do not compare exact byte values with another computer. Record the values printed by your own build.

---

## 4. Baseline evidence

The practical specifically requires baseline evidence before optimization. A ready-to-run baseline copy is included in:

```text
baseline-before/
```

Run it in a separate terminal:

```bash
cd baseline-before
npm install
npm run build
npm run dev
```

This version intentionally uses normal route imports so the route components are part of the initial bundle.

### Baseline screenshots to take

1. **Baseline build output**
   - Terminal after `npm run build`
   - Caption: **Figure 1: Baseline Vite build output before code splitting**

2. **Baseline Network tab**
   - Open `/`
   - DevTools → Network → JS
   - Reload
   - Caption: **Figure 2: Baseline JavaScript resources loaded on initial page visit**

3. **Baseline performance timing**
   - DevTools Network → reload
   - Capture the transfer/load figures visible in the Network panel
   - Caption: **Figure 3: Baseline network loading time before lazy loading**

After these screenshots, close the baseline server.

---

## 5. Final optimized evidence

Run the main `client` project:

```bash
cd client
npm install
npm run dev
```

### Required screenshots

4. **Optimized build output**
   - `npm run build`
   - Caption: **Figure 4: Optimized Vite build output showing separate JavaScript chunks**

5. **Initial page Network**
   - DevTools → Network → JS
   - Reload `/`
   - Caption: **Figure 5: Optimized initial page load with route chunks deferred**

6. **Projects chunk**
   - Keep Network open
   - Visit `/projects`
   - Show the newly requested JavaScript chunk
   - Caption: **Figure 6: Projects route loading its JavaScript chunk on demand**

7. **Contact chunk**
   - Visit `/contact`
   - Show its chunk request
   - Caption: **Figure 7: Contact route loading its JavaScript chunk on demand**

8. **Slow 3G fallback**
   - Network → Throttling → Slow 3G
   - Reload and/or navigate to a lazy route
   - The custom loading screen should appear before the chunk finishes
   - Caption: **Figure 8: Suspense fallback displayed during a slow lazy-loaded route request**

9. **Insights lazy module**
   - Visit `/insights`
   - Show the extra chunk request
   - Caption: **Figure 9: Additional Insights module loaded only when its route is visited**

10. **Final application**
   - Show the polished dashboard
   - Caption: **Figure 10: Final React application after performance optimization**

---

## 6. Before/after comparison

Record your own terminal and Network values in:

```text
docs/performance-comparison.md
```

Do not invent numbers.

Suggested table:

| Metric | Before | After |
|---|---:|---:|
| Initial JS bundle | fill from your baseline build | fill from optimized build |
| Initial JS transferred | fill from Network | fill from Network |
| Initial load time | fill from Network | fill from Network |
| Route chunk loaded on `/projects` | No | Yes |
| Route chunk loaded on `/contact` | No | Yes |
| Route chunk loaded on `/insights` | No | Yes |

The practical asks for a before/after comparison; the exact numbers depend on your machine, browser, cache state and build environment.

---

## 7. React implementation

The optimized project uses the required pattern:

```js
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
```

and wraps only the route area in `Suspense`.

The additional Insights route is also lazy-loaded.

---

## 8. GitHub deliverable

The supplied Practical 8 brief explicitly requires:

- Same repository as Practical 6/7, updated with new commits
- At least 2 route-based lazy-loaded components
- Suspense fallback
- Before/after screenshots or recorded metrics in README or docs
- At least one performance-optimization commit

Suggested commit:

```text
feat: add route-based lazy loading and performance profiling
```

### Is deployment compulsory?

**No.** The Practical 8 sheet you supplied does **not explicitly require deployment**.

It explicitly asks for the GitHub repository contents and performance evidence. A GitHub repository is required by the listed "GitHub Deliverables"; deployment to Vercel/Netlify/GitHub Pages is not listed as a requirement.

---

## 9. Important testing note

For a convincing comparison:

- Use the same browser for before and after.
- Use the same machine.
- Prefer an incognito/private window or clear the relevant cache before each measurement.
- Keep DevTools open in the same configuration.
- Use Slow 3G for the fallback screenshot.
- Do not claim that total application JavaScript disappears; lazy loading changes **when** route code is downloaded.
