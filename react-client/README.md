This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


react-client/
│
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── (auth)/                # Auth pages
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── signup/
│   │   │   │   └── page.tsx
│   │   │   ├── forgot-password/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx         # Layout for auth pages (container, centered form)
│   │   │
│   │   ├── dashboard/             # Dashboard pages
│   │   │   ├── layout.tsx         # Sidebar, header, footer
│   │   │   ├── page.tsx           # Dashboard home
│   │   │   ├── component1/
│   │   │   │   └── page.tsx
│   │   │   ├── component2/
│   │   │   │   └── page.tsx
│   │   │   ├── component3/
│   │   │   │   └── page.tsx
│   │   │   ├── component4/
│   │   │   │   └── page.tsx
│   │   │   └── component5/
│   │   │       └── page.tsx
│   │   │
│   │   ├── home/                  # Landing page
│   │   │   └── page.tsx
│   │   │
│   │   ├── about/                 # About page
│   │   │   └── page.tsx
│   │   │
│   │   └── layout.tsx             # Root layout (header, footer, global styles)
│   │
│   ├── components/                # Reusable components
│   │   ├── ui/                     # Buttons, inputs, modals
│   │   │   ├── Button.tsx
│   │   │   └── Input.tsx
│   │   │
│   │   ├── auth/                   # Auth forms
│   │   │   ├── LoginForm.tsx
│   │   │   ├── SignupForm.tsx
│   │   │   └── ForgotPasswordForm.tsx
│   │   │
│   │   └── dashboard/              # Sidebar, header, footer, widgets
│   │       ├── Sidebar.tsx
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── Widgets/
│   │           ├── Widget1.tsx
│   │           ├── Widget2.tsx
│   │           └── Widget3.tsx
│   │
│   ├── hooks/                      # Custom React hooks
│   │   ├── useAuth.ts               # Auth hook
│   │   └── useForm.ts               # Form handling
│   │
│   ├── lib/                         # Helpers & utils
│   │   ├── auth.ts                  # Auth helper (JWT, cookie)
│   │   ├── apiClient.ts             # Axios/fetch wrapper for backend
│   │   └── validators.ts            # Form validation (Zod/Yup)
│   │
│   ├── types/                        # TypeScript interfaces/types
│   │   └── user.ts
│   │
│   └── services/                     # API service functions
│       └── authService.ts
│
├── .eslintrc.json                    # ESLint config
├── tailwind.config.ts                # Tailwind config
├── package.json
└── tsconfig.json
