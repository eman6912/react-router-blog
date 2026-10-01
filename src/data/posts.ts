export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
};

export const posts: Post[] = [
  {
    slug: "building-with-react",
    title: "Building Better Interfaces with React",
    excerpt:
      "A beginner-friendly look at how React helps us build reusable and interactive interfaces.",
    content:
      "React allows us to break interfaces into small reusable components. Instead of building one huge page, we can create focused pieces that are easier to understand, maintain, and reuse across an application.",
    category: "React",
    date: "October 1, 2026",
    readTime: "5 min read",
  },
  {
    slug: "understanding-react-router",
    title: "Understanding React Router",
    excerpt:
      "Learn how URLs, routes, navigation, and dynamic pages work together in a React application.",
    content:
      "React Router connects the browser URL with the components displayed by our application. With routes, links, parameters, and navigation, a single-page application can provide the experience of a multi-page website.",
    category: "React Router",
    date: "September 28, 2026",
    readTime: "6 min read",
  },
  {
    slug: "typescript-for-react",
    title: "Why TypeScript Makes React Safer",
    excerpt:
      "Discover how TypeScript helps catch mistakes before they reach the browser.",
    content:
      "TypeScript adds static type checking to JavaScript. When working with React, types can make component props, application state, and data structures easier to understand and safer to use.",
    category: "TypeScript",
    date: "September 24, 2026",
    readTime: "4 min read",
  },
  {
    slug: "learning-by-building",
    title: "Learning by Building Real Projects",
    excerpt:
      "Why creating projects can turn programming concepts into practical skills.",
    content:
      "Building projects forces us to connect individual concepts together. Instead of studying routing, components, state, and styling separately, a real project gives us a reason to use them together.",
    category: "Learning",
    date: "September 20, 2026",
    readTime: "4 min read",
  },
  {
    slug: "the-power-of-consistency",
    title: "The Power of Consistency",
    excerpt:
      "Small improvements repeated over time can create meaningful progress.",
    content:
      "Learning software development takes time. Consistent practice makes difficult concepts easier because every project builds on the knowledge gained from the previous one.",
    category: "Growth",
    date: "September 16, 2026",
    readTime: "3 min read",
  },
];