# Retro Design Migration Guide

## Global Changes Made

### Design System (globals.css)
- ✅ Reduced font size from 12px to 11px
- ✅ Changed spacing from 8px/12px/16px to 4px/8px/12px (50% reduction)
- ✅ Replaced `.card` with `.box` (boxed sections, not floating cards)
- ✅ Replaced `.card-header` with `.box-header` (gradient bars)
- ✅ Replaced `.card-body` with `.box-body`
- ✅ Replaced `.card-footer` with `.box-footer`
- ✅ Removed large border-radius (now 2-3px max)
- ✅ Removed large shadows (now subtle)
- ✅ Changed font to Tahoma/Verdana (old web fonts)

### Layout Components
- ✅ TopBar: Thick gradient bar (36px height), compact toolbar style
- ✅ Sidebar: Simple vertical list (180px width), grey background, tight spacing
- ✅ MainLayout: Reduced padding to 8px

## Class Name Changes

### Replace Everywhere:
```
card → box
card-header → box-header
card-body → box-body
card-footer → box-footer
panel-glossy → box (remove glossy class)
```

### Spacing Updates:
```
padding: 12px → padding: 8px
padding: 16px → padding: 8px
padding: 24px → padding: 12px
gap: 12px → gap: 8px
margin-bottom: 20px → margin-bottom: 8px
```

## Files That Need Updates

All page files need card→box replacement:
- home/page.tsx
- daily-page/page.tsx
- rooms/page.tsx
- rooms/[id]/page.tsx
- chat/page.tsx
- profile/[username]/page.tsx
- memory-box/page.tsx
- settings/page.tsx
- explore-moods/page.tsx
- register/page.tsx

## Quick Find & Replace

In each .tsx file:
1. `className="card` → `className="box`
2. `className="card-header` → `className="box-header`
3. `className="card-body` → `className="box-body`
4. `className="card-footer` → `className="box-footer`

In each .css file:
1. `.card {` → `.box {`
2. `.card-header {` → `.box-header {`
3. `.card-body {` → `.box-body {`
4. `.card-footer {` → `.box-footer {`
5. Reduce all padding/margin values by ~50%
6. Change border-radius to 2-3px max

## Result

The app will look like authentic 2008-2012 web design:
- Dense, compact layouts
- Boxed sections with borders
- Gradient header bars
- Small fonts (11px)
- Tight spacing
- No modern floating cards
- No excessive whitespace
