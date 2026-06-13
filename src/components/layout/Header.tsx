import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/",       label: "首页"    },
  { to: "/about",  label: "关于我"  },
  { to: "/career", label: "职业特性" },
];

const Header = () => {
  const { pathname } = useLocation();
  const isCareer = pathname === "/career";

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

        {/* Nav links */}
        <nav className="hidden md:flex gap-gutter items-center">
          {navItems.map(({ to, label }, index) => (
            <React.Fragment key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  [
                    "cursor-target font-body text-label-md transition-colors duration-300",
                    isActive
                      ? "text-on-tertiary-container font-bold"
                      : "text-text-body hover:text-on-tertiary-fixed-variant",
                  ].join(" ")
                }
              >
                {label}
              </NavLink>
              {index === 0 && (
                <span className="font-body text-label-md select-none pointer-events-none">
                  &nbsp;&nbsp;
                </span>
              )}
              {index === 1 && (
                <span className="font-body text-label-md select-none pointer-events-none">
                  &nbsp;&nbsp;
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* CTA button */}
        <a
          href="mailto:hello@edith.me"
          className="cursor-target bg-on-tertiary-container text-white px-6 py-2 rounded-full font-body text-label-md hover:opacity-90 transition-all"
        >
          联系我
        </a>
      </div>
    </header>
  );
};

export default Header;
