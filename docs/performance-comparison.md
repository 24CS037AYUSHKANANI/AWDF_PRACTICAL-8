# Practical 8 — Performance Comparison

**Student:** Ayush Kanani  
**Roll No.:** 24CS037

> Fill the values from your own terminal and browser screenshots. Do not enter estimated values.

| Metric | Before Optimization | After Optimization |
|---|---:|---:|
| Initial JS bundle | __________ | __________ |
| Initial JS transferred | __________ | __________ |
| Initial load time | __________ | __________ |
| Projects code loaded initially | Yes | No |
| Projects chunk requested on route visit | No | Yes |
| Contact code loaded initially | Yes | No |
| Contact chunk requested on route visit | No | Yes |
| Insights module loaded initially | Yes | No |
| Insights chunk requested on route visit | No | Yes |

## Observation

Before optimization, route components are included in the initial JavaScript bundle.

After optimization, route components are split into separate chunks and requested when their routes are visited. This reduces the amount of route-specific code required during the initial page load.

The complete session may eventually download a similar total amount of application code; the main improvement is that non-essential route code is delayed until needed.
