import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import TopNav from "@/components/Top-Nav";
import SideNav from "@/components/Side-Nav";
import {
  House,
  InfoIcon,
  MessageCircleWarning,
  Clock,
  Archive,
  Book,
  List,
} from "lucide-react";
import MaxWidthWrapper from "@/components/Max-Width-Wrapper";
import { ThemeProvider } from "@/components/theme-provider";

const interSans = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  variable: "--font-inter",
  subsets: ["latin"],
});

const topNavPages = [
  {
    title: "Home",
    path: "/",
    icon: <House size={24} />,
  },
  {
    title: "About",
    path: "/about",
    icon: <InfoIcon size={24} />,
  },
  {
    title: "FAQ",
    path: "/faq",
    icon: <List size={24} />,
  },
];

const sideNavPages = [
  {
    title: "Water Alerts & Advisories",
    pages: [
      {
        title: "Critical Water Advisories",
        path: "/water-alerts",
        icon: <MessageCircleWarning size={24} />,
      },
      {
        title: "Latest Water Alerts",
        path: "/water-alerts/latest",
        icon: <Clock size={24} />,
      },
      {
        title: "Water Alert Archive",
        path: "/water-alerts/archive",
        icon: <Archive size={24} />,
      },
    ],
  },
  {
    title: "Library",
    pages: [
      {
        title: "Library Page 1",
        path: "/library/page-1",
        icon: <Book size={24} />,
      },
      {
        title: "Library Page 2",
        path: "/library/page-2",
        icon: <Book size={24} />,
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Water Quality Reporter",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interSans.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopNav pages={topNavPages} />

          <div className="flex flex-row h-full w-full justify-center align-center items-center py-14">
            <MaxWidthWrapper>
              <div className="grid grid-cols-1 md:grid-cols-4 h-full w-full">
                <aside className="col-span-1 max-w-[299px]">
                  <SideNav categories={sideNavPages} />
                </aside>
                <main className="col-span-3">{children}</main>
              </div>
            </MaxWidthWrapper>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
