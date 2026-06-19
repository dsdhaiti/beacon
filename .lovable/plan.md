## Add Dark Mode with Settings Toggle

Dark theme tokens already exist in `src/styles.css` under `.dark`. We just need a way to apply that class and a UI to control it.

### 1. Theme provider
Create `src/components/theme-provider.tsx`:
- React context exposing `theme` ("light" | "dark" | "system") and `setTheme`.
- Persists choice in `localStorage` (`feedbackflow-theme`).
- Applies/removes `.dark` on `document.documentElement`, respecting system preference when set to "system".
- SSR-safe (guards `window`/`document`, runs effect on mount).
- Export `useTheme()` hook.

### 2. Wire provider into the app
In `src/routes/__root.tsx`, wrap the `<Outlet />` inside `RootComponent` with `<ThemeProvider>` so every route gets it.

Add a tiny inline script in the `<head>` of `RootShell` that reads `localStorage` and sets `.dark` on `<html>` before React hydrates — prevents a light-mode flash on first paint.

### 3. Settings toggle
In `src/routes/_app.settings.tsx`, add a new "Appearance" card above the existing sections:
- Label: "Dark mode"
- Description: "Switch between light and dark themes."
- shadcn `Switch` bound to `useTheme()` — on = dark, off = light.

Scope stays purely presentational; no other files change.
