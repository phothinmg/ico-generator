import type { PropsWithChildren } from "hono/jsx";

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
        <link rel="stylesheet" href="style.css" />
        <title>{title}</title>
      </head>
      <body>
        <div class={"content"}>{children}</div>
      </body>
    </html>
  );
}
