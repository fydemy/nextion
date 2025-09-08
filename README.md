# Nextion

A starter-kit for a dynamic landing page or personal website with Next.js and Notion as CMS (Content Management System). Simplify web routing with synchronization of Notion and Next root files.

```
CMS/
├── home
├── about
├── blog
	├── will-developer-be-replaced by-ai
	└── fullstack-roadmap-2025
```

## 🚀 Installation

1. Make sure you have `git` and `pnpm` installed on your machine.
   ```shell
   git clone https://github.com/fydemy/nextion .
   pnpm install
   ```
2. Go to [Notion Integrations](https://www.notion.so/my-integrations) and click on the `New integration` button.
3. Fill down the `Integration Name`, `Assosiated workspace`, and leave the type to `Internal` since we just need the API integration only.
4. Copy the `Internal Integration Secret` and paste into the `.env.local`
   ```
   NOTION_TOKEN=ntn_XXX
   ```
5. Get started by adding a **Page, Subpages, and Database** on the `Assosiated workspace` that you have chosen earlier. (\*with lowercase and URL rule)
   ```
   CMS [Page]/
   ├── home [Subpage]
   ├── about [Subpage]
   ├── blog [DB]
   	├── will-developer-be-replaced by-ai [SubDB]
   	└── fullstack-roadmap-2025 [SubDB]
   ```

## ✅ Upcoming features

- [x] Synchronize Next and Notion directory structure routing
- [ ] Metadata fetching and setup per page
- [ ] Blog feature
- [ ] Provide stying templates

## ✨ Community & Contribute

Visit our github profile and seek for a Discord link at [fydemy.com](https://fydemy.com).
