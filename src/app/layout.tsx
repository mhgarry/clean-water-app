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
  Pen,
  List,
  Map,
  Newspaper,
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
    title: "Map",
    path: "/map",
    icon: <Map size={24} />,
  },
  {
    title: "FAQ",
    path: "/faq",
    icon: <List size={24} />,
  },
];

const sideNavPages = [
  {
    title: "Water Advisories",
    pages: [
      {
        title: "Critical Advisories",

        path: "/water-advisories",
        icon: <MessageCircleWarning size={24} />,
      },
      {
        title: "Latest Advisories",
        path: "/water-advisories/latest",
        icon: <Clock size={24} />,
      },
      {
        title: "Advisory Archive",
        path: "/water-advisories/archive",
        icon: <Archive size={24} />,
      },
    ],
  },
  {
    title: "Library",
    pages: [
      {
        title: "Journals & Reports",
        path: "/library/journals-reports",
        icon: <Pen size={24} />,
      },
      {
        title: "Articles",
        path: "/library/articles",
        icon: <Newspaper size={24} />,
      },
      {
        title: "Quality Reports",
        path: "/library/quality-reports",
        icon: <Book size={24} />,
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Water Quality Reporter",
  description: "A simple and accessible water quality reporter.  ",
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
          <section className="w-full justify-center flex-center flex flex-col">
            {" "}
            <TopNav pages={topNavPages} />
          </section>

          <div className="flex flex-row w-full justify-center align-center items-center px-12   lg:px-4 md:px-4 min-h-[100vh] py-12 md:py-4 lg:py-12">
            <MaxWidthWrapper>
              <div className="grid grid-cols-1 md:grid-cols-5  min-h-[100vh]  w-full md:gap-2 lg:gap-8">
                {/* SideNav - Hidden on smaller screens */}
                {/* <SideNav categories={sideNavPages} />
x Sidebar - Hidden on larger screens */}
                <div className="w-full h-full">
                  <SideNav categories={sideNavPages} />
                </div>

                {/* Main content */}
                <main className="md:col-span-4 col-span-3 p-4 ">
                  {children}
                </main>
              </div>
            </MaxWidthWrapper>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
