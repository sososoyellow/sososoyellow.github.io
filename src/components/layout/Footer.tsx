import { useLocation } from "react-router-dom";

const socialLinks = [
  { href: "mailto:su.yuanting@hotmail.com", label: "Email",    icon: "mail",  subtitle: "su.yuanting@hotmail.com" },
  { href: "https://linkedin.com",           label: "LinkedIn", icon: "share", subtitle: "搜索edith su" },
];

const Footer = () => {
  const { pathname } = useLocation();

  /* ── Home footer: copyright left | social-with-icons right ── */
  if (pathname === "/") {
    return (
      <footer className="w-full border-t border-border-subtle bg-surface-container-low">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 gap-4">
          <p className="font-body text-label-sm text-on-surface">
            © 2024 Edith. All rights reserved.
          </p>
          <div className="flex gap-gutter items-center">
            {socialLinks.map(({ href, label, icon, subtitle }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="cursor-target font-body text-label-sm text-text-body hover:text-on-tertiary-container transition-colors flex flex-col items-center gap-0.5"
              >
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">{icon}</span>
                  {label}
                </span>
                {subtitle && (
                  <span className="text-[11px] opacity-60">{subtitle}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  /* ── Career footer: Edith left | social center | copyright right ── */
  if (pathname === "/career") {
    return (
      <footer className="w-full border-t border-border-subtle bg-surface-container-low">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 gap-4">
          <span className="font-heading font-bold text-headline-md text-on-surface">Edith</span>
          <div className="flex gap-gutter items-center font-body text-label-sm text-text-body">
            {socialLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="cursor-target hover:text-on-tertiary-container transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <p className="font-body text-label-sm text-text-body opacity-60">
            © 2024 Edith. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }

  /* ── Default (About) footer: Edith+copyright left | social right ── */
  return (
    <footer className="w-full border-t border-border-subtle bg-surface-container-low">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 gap-4">
        <div className="text-center md:text-left mb-2 md:mb-0">
          <span className="font-heading font-bold text-headline-md text-on-surface block">Edith</span>
          <p className="font-body text-label-sm text-text-body mt-1">© 2024 Edith. All rights reserved.</p>
        </div>
        <div className="flex gap-gutter items-center font-body text-label-sm text-text-body">
          {socialLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="cursor-target hover:text-on-tertiary-container transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
