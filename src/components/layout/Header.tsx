import { NavLink, useLocation } from "react-router-dom";
import GooeyNav from "../gooey_nav";

const navItems = [
  { to: "/",       label: "首页"    },
  { to: "/about",  label: "关于我"  },
  { to: "/career", label: "职业特性" },
];

const Header = () => {
  const { pathname } = useLocation();
  const isCareer = pathname === "/career";

  const activeIndex = (() => {
    if (pathname === "/") return 0;
    const idx = navItems.findIndex(
      (item) => item.to !== "/" && pathname.startsWith(item.to)
    );
    return idx >= 0 ? idx : 0;
  })();

  const gooeyItems = navItems.map(({ to, label }) => ({ label, href: to }));

  return (
    <header className={`w-full top-0 sticky z-50 ${isCareer ? "glass-nav" : "bg-background"}`}>
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6">
        {/* Brand */}
        <NavLink
          to="/"
          className="cursor-target font-heading font-extrabold text-on-tertiary-container"
          style={{ fontSize: "30px" }}
        >
          Edith
        </NavLink>

        {/* Nav — GooeyNav (desktop only) */}
        <div className="hidden md:flex">
          <GooeyNav
            items={gooeyItems}
            initialActiveIndex={activeIndex}
            animationTime={500}
            particleCount={12}
          />
        </div>

        {/* CTA button */}
        <a
          href="mailto:su.yuanting@hotmail.com"
          className="cursor-target bg-on-tertiary-container text-white px-6 py-2 rounded-full font-body text-[21px] hover:opacity-90 transition-all"
        >
          联系我
        </a>
      </div>
    </header>
  );
};

export default Header;
