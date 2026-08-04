# AshcrestHQ Website

The official website for **AshcrestHQ** - a distributed open-source collective building high-performance systems like the Janus microkernel and Aegis moderation protocol.

Built with Next.js 15, Tailwind CSS v4, and Framer Motion.

## 🚀 Getting Started Locally

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/AshcrestHQ/ashcresthq-site.git
cd ashcresthq-site
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Deploy on Cloudflare Pages

This project is configured as a static HTML export via `next.config.ts`, making it perfectly optimized for **Cloudflare Pages**.

To deploy using the Cloudflare Dashboard:
1. Go to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
2. Select this repository.
3. Use the following build settings:
   - **Framework preset**: `Next.js`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`

To deploy manually via Wrangler CLI:
```bash
npm run build
npx wrangler pages deploy out --project-name ashcresthq-site
```

## 📜 License
Released under the MIT License.
