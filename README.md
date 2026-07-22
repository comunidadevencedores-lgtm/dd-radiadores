# DD Radiadores - Next.js Version

Estrutura completa em **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**.

## Como usar

1. Copie esta pasta inteira pro seu projeto ou monorepo da Bowl Digital
2. Rode `npm install` (ou pnpm/yarn)
3. `npm run dev`
4. Deploy na Vercel

## Estrutura

```
app/
  layout.tsx      → Metadata + SEO
  page.tsx        → Página principal
  globals.css     → Tailwind + theme
components/
  Header.tsx
  Hero.tsx
  About.tsx
  Services.tsx
  CTA.tsx
  Footer.tsx
  WhatsAppButton.tsx
lib/utils.ts
```

## Versão estática pronta

Se precisar subir AGORA enquanto o DNS propaga, use a pasta irmã `ddradiadores-static` (só o index.html).
