import React from "react";
import Link from "next/link";
// Define the structure of each page
interface NavPage {
  title: string;
  path: string;
  icon: React.ReactNode;
}

// Define the structure of each category, which contains a title and pages
interface NavPageCategory {
  title: string;
  pages: NavPage[];
}

// Define the props for the SideNav
interface NavProps {
  categories?: NavPageCategory[]; // Make this optional
}

const SideNav: React.FC<NavProps> = ({ categories = [] }) => {
  return (
    <aside>
      <div className="flex flex-col p-4 space-y-4 border rounded-md">
        {categories.map((category) => (
          <div key={category.title}>
            <h2 className="text-md font-bold text-foreground mb-2 ml-4">
              {category.title}
            </h2>
            <ul className="flex flex-col space-y-2">
              {category.pages.map((page) => (
                <li key={page.path}>
                  <Link
                    href={page.path}
                    className="text-sm
                    justify-start
                    items-center
                    font-medium text-foreground
                    hover:font-bold
                    hover:text-background hover:bg-foreground px-4 py-2 rounded-md flex flex-row gap-2
                    active:bg-foreground active:text-background active:font-bold
                    pointer-cursor"
                  >
                    {page.icon}
                    {page.title} {/* Updated this line */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideNav;
