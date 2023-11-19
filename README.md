## About

Currently, I am working on a Fullstack project using Next.js, which aims to create a Single Page Application (SPA) for a hairdresser salon with a booking visit system. The project is named "HairdresserSPA" and is not intended for commercial purposes; it serves purely as a practice Next.js app using the router directory structure.

As of now, the project is in its development phase, and I am actively using Git issues as a dashboard to manage new feature ideas, track bugs, and plan improvements. While progress is being made, please note that not all comments have been removed from the code, and some components are yet to be clearly split into smaller, manageable parts.
You can check out my project dashboard here to see the current bugs I've already identified and the new features I'm planning to implement in the next steps.
https://github.com/users/rafal19987/projects/1/views/1?layout=board


I'm excited to announce that soon, the project will reach version 1.0.0, and it will be made available to the public. Stay tuned for updates on its release!

To check out the current Live version 0.1.0, you can visit: 
[https://hairderesser-page-2v4nxhyco-rafal19987.vercel.app/](https://hairderesser-page.vercel.app/)

## Getting Started

First, run the development server:

```bash
git clone https://github.com/rafal19987/hairderesser-page.git
cd hairderesser-page
npm i
npm run dev
```

For working with this project you have to setup all env variables:

```ts
API_KEY // for google places api
NEXT_PUBLIC_FETCH_API_URL = 'http://localhost:3000/api'
NEXT_PUBLIC_SUPABASE_URL // from supabase project
SUPABASE_SERVICE_ROLE_KEY // from supabase project
NEXT_PUBLIC_SUPABASE_ANON_KEY // from supabase project
GOOGLE_CLIENT_ID // from google provider acc
GOOGLE_CLIENT_SECRET // from google provider acc
SECRET // from google provider acc
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
