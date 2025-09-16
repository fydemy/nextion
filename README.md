# Nextion

A starter-kit for a dynamic landing page or personal website with Next.js and Notion as CMS (Content Management System). Simplify web routing with synchronization of Notion and Next root files.

![demo](https://github.com/fydemy/nextion/blob/main/demo.gif)

```
CMS/
├── home
├── about
├── blog
	├── will-developer-be-replaced-by-ai
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
   WORKSPACE_ID= // the parent id can be found in the url *in the square bracket (https://www.notion.so/fydemy/CMS-[2684e315713a80ae8eb0c39934603184])
   ROOT_FALLBACK= // the name of notion page for the / or root route
   ```

5. Get started by adding a _Page and Subpages_ on the `Assosiated workspace` that you have chosen earlier. (\*with lowercase and **URL/slug** rule)

   ```
   CMS [Workspace]/
   ├── home [Page]
   ├── about [Page]
   ├── blog [Page]
   ├── will-developer-be-replaced by-ai [SubPage]
   └── fullstack-roadmap-2025 [SubPage]
   ```

6. Change your essential assets such as `Logo` and `Favicon` in the _public_ folder with the same file name
7. Any changes on the style, link, etc. can be added technically within the _app_ folder

## ✨ Features

1. Sync between next.js and notion file routing
2. Add YAML configuration block code at the begining of the page content on Notion to configure the title and description metadata
   ```yaml
   title: "Home"
   description: "We are a community-driven initiative focused on open-source software engineering and e-learning."
   ```
3. Responsive in any devices
4. Provided plain-styled design with `TailwindCSS` and `Lucide-react` which make it easy to modify and improve based on your needs.

## ✅ Upcoming features

- [x] Synchronize Next and Notion directory structure routing

- [x] Metadata fetching and setup per page

- [x] Blog feature

- [x] Caching and ISR

- [x] Provide stying templates (1)

- [ ] Bash scripting for configuration and setup

## ❌ Issues

- [ ] No clickable link/UI subpage list in the page

## ✨ Community & Contribute

Visit our github profile and seek for a Discord link at [fydemy.com](https://fydemy.com).
