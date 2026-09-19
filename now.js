/* ─────────────────────────────────────────────────────────────
   "Currently" section content.
   Edit this file to update it — nothing else needs touching.
   Remember to bump `updated` whenever you change the entries.

   Each item:
     image  – optional path, e.g. "assets/imgs/book-ai-engineering.jpg"
              (falls back to `icon` if the file is missing or omitted)
     icon   – themify class, used when there's no image
     title · meta · note · links[]
   ───────────────────────────────────────────────────────────── */

window.NOW = {
  updated: "September 2026",

  reading: [
    {
      image: "assets/imgs/book-ai-engineering.jpg",
      icon: "ti-book",
      title: "AI Engineering",
      meta: "Chip Huyen · O'Reilly",
      note: "Building applications on foundation models — evaluation, context windows, and what actually breaks in production.",
      links: [
        { label: "O'Reilly", url: "https://www.oreilly.com/library/view/ai-engineering/9781098166298/" }
      ]
    },
    {
      image: "assets/imgs/book-prompt-engineering.jpg",
      icon: "ti-book",
      title: "Prompt Engineering for LLMs",
      meta: "John Berryman & Albert Ziegler · O'Reilly",
      note: "Written by two founding engineers on GitHub Copilot — the mechanics underneath AI-assisted tooling rather than the folklore around it.",
      links: [
        { label: "O'Reilly", url: "https://www.oreilly.com/library/view/prompt-engineering-for/9781098156145/" }
      ]
    }
  ],

  exploring: [
    {
      image: "assets/imgs/apple-logo.png",
      icon: "ti-apple",
      title: "Adapting to iPhone Duo",
      meta: "Apple Tech Talks · September 2026",
      note: "Size classes instead of fixed breakpoints, state continuity across a fold, navigation and toolbar overflow, multi-window scenes, and the dual-camera model. Working through Apple's full session series.",
      links: [
        { label: "Prepare your app", url: "https://developer.apple.com/videos/play/tech-talks/111461/" },
        { label: "Design for iPhone Duo", url: "https://developer.apple.com/videos/play/tech-talks/111466/" },
        { label: "Adaptive layouts", url: "https://developer.apple.com/videos/play/tech-talks/111463/" },
        { label: "Raise the bar", url: "https://developer.apple.com/videos/play/tech-talks/111462/" },
        { label: "Displays & scenes", url: "https://developer.apple.com/videos/play/tech-talks/111464/" },
        { label: "Camera experience", url: "https://developer.apple.com/videos/play/tech-talks/111465/" }
      ]
    },
    {
      image: "assets/imgs/flutter-logo.png",
      icon: "ti-package",
      title: "Platform-adaptive UI in Flutter",
      meta: "adaptive_platform_ui",
      note: "Rendering native iOS surfaces and Material from a single component layer — the same problem a design system solves, pushed down to the platform boundary.",
      links: [
        { label: "pub.dev", url: "https://pub.dev/packages/adaptive_platform_ui" }
      ]
    }
  ]
};
