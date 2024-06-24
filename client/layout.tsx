import type { PropsWithChildren } from "hono/jsx";

const links = [
  {
    key: "favicon-16x16",
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  {
    key: "favicon-ico",
    rel: "shortcut icon",
    type: "image/x-icon",
    sizes: "16x16",
    href: "/favicon.ico",
  },
  {
    key: "apple-touch-icon",
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
  {
    key: "android-chrome-192x192",
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/android-chrome-192x192.png",
  },
  {
    key: "android-chrome-512x512",
    rel: "icon",
    type: "image/png",
    sizes: "512x512",
    href: "/android-chrome-512x512.png",
  },
  { key: "site-webmanifest", rel: "manifest", href: "/site.webmanifest" },
  { key: "style-css", rel: "stylesheet", href: "style.css" },
  {
    key: "preconnect-googleapis",
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    key: "preconnect-gstatic",
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  },
  {
    key: "google-fonts",
    href: "https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap",
    rel: "stylesheet",
  },
];

type LayoutProps = {
  title: string;
};

export default function Layout({
  children,
  title,
}: PropsWithChildren<LayoutProps>) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {links.map((link) => (
          <link
            key={link.key}
            rel={link.rel}
            type={link.type || undefined}
            sizes={link.sizes || undefined}
            href={link.href}
          />
        ))}
        <title key="page-title">{title}</title>
      </head>
      <body>
        <div class={"content"}>{children}</div>
      </body>
    </html>
  );
}
