# Practical 8 Screenshot Checklist — Ayush Kanani (24CS037)

The supplied practical says baseline screenshots are required evidence and cannot be reconstructed afterward.

## BEFORE optimization

### Screenshot 1
**Show:** `npm run build` terminal output.

**Caption:** Figure 1: Baseline Vite build output before code splitting.

### Screenshot 2
**Show:** Browser + DevTools Network → JS after loading `/`.

**Caption:** Figure 2: Baseline JavaScript resources loaded on initial page visit.

### Screenshot 3
**Show:** Network timing/transfer information for the baseline initial load.

**Caption:** Figure 3: Baseline network loading time before lazy loading.

## AFTER optimization

### Screenshot 4
**Show:** `client` → `npm run build` output with multiple JavaScript chunks.

**Caption:** Figure 4: Optimized Vite build output showing separate JavaScript chunks.

### Screenshot 5
**Show:** Network → JS after loading `/`. The route-specific chunks should not be requested yet.

**Caption:** Figure 5: Optimized initial page load with route chunks deferred.

### Screenshot 6
**Show:** Navigate to `/projects` while Network is open and show the new JS request.

**Caption:** Figure 6: Projects route loading its JavaScript chunk on demand.

### Screenshot 7
**Show:** Navigate to `/contact` and show the new JS request.

**Caption:** Figure 7: Contact route loading its JavaScript chunk on demand.

### Screenshot 8
**Show:** Network throttled to Slow 3G + the custom fallback visible during navigation.

**Caption:** Figure 8: Suspense fallback displayed during a slow lazy-loaded route request.

### Screenshot 9
**Show:** `/insights` route + its separate chunk request.

**Caption:** Figure 9: Additional Insights module loaded only when its route is visited.

### Screenshot 10
**Show:** Final application UI.

**Caption:** Figure 10: Final React application after performance optimization.

## Optional but useful

### Screenshot 11
React DevTools Profiler showing one unnecessary re-render that you identify.

**Caption:** Figure 11: React DevTools Profiler observation for an unnecessary re-render.

Do not fabricate a profiler finding. Only include this screenshot if you actually observe and can explain the re-render.
