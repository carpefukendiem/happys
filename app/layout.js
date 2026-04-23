import './globals.css';

export const metadata = {
  title: "Happy's Collision Center | Auto Body Repair Experts | Santa Barbara",
  description:
    "Happy's Collision Center provides expert auto body repair, collision repair, and paintless dent removal in Santa Barbara, CA. I-CAR certified. 5-year nationwide warranty.",
  openGraph: {
    title: "Happy's Collision Center | Santa Barbara",
    description: 'Expert collision repair you can trust in Santa Barbara.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
