const WORKSPACE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCW9chAlWQJZPS2fHrpl-d_AmRZ9Yxmw4lX31u8RJv2W75l1cMsl4vK9Pub3vL2RkVQCEGrdZaSg6Nztwi95-gfDZTR0Lzr_GsaYL_33BA-hV4FPafOqO58bu-6T50tOgusuaWsWs6tzSJKTXBbWQs0HGdh_U8jmWRmitlYUw6Dn30oYFhfjGgAwrE5_I-Ngi5zzbJ2cNxA8aoRR0u86dC2QzibveHz7UjcACVnHJBgvtVm2BflKVncFb8KcxXOmqYC88fVWJKZqqU";

const skillGroups = [
  {
    category: "业务能力",
    skills: ["项目管理", "HR业务流程重塑", "全球化交付", "数字化转型", "端到端构建"],
  },
  {
    category: "策略与洞察",
    skills: ["User Research", "Brand Identity", "Content Strategy", "Product Thinking"],
  },
];

const growthCards = [
  {
    title: "全链路产品设计",
    icon: "auto_awesome",
    desc: "超越界面本身，深入业务底层逻辑。我正致力于提升产品闭环思维，学习如何利用数据驱动设计决策，从而在实现用户价值的同时，精准助力商业目标的达成。",
    tags: ["数据可视化与分析", "增长设计策略"],
  },
  {
    title: "AI 与创意赋能",
    icon: "bolt",
    desc: "积极探索生成式 AI 在设计流程中的应用。从自动化设计系统的维护到利用 AI 进行快速原型验证，我旨在通过技术革新，释放人类设计师的创造力边界。",
    tags: ["AIGC 设计流", "智能组件研发"],
  },
  {
    title: "无障碍与包容性设计",
    icon: "diversity_3",
    desc: "设计不应留下任何人。我正在深化对 WCAG 标准的理解，研究如何构建更具包容性的交互模式，确保每一个产品都能为多元化的用户群体提供温暖且顺畅的体验。",
    tags: ["Accessibility Audit", "Inclusive UX"],
  },
];

const Career = () => {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="font-heading text-display-lg text-text-primary mb-4">职业特性</h1>
        <p className="font-body text-body-lg text-text-body max-w-2xl opacity-80">
          海外HRIT/人力数字化转型专家｜四大咨询+头部甲方+头部ERP厂商经验｜全球多区域交付与大型IT项目管理
        </p>
      </section>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left: Skills */}
        <section className="lg:col-span-5 space-y-8">
          <h2 className="font-heading text-headline-lg text-text-primary mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-tertiary">workspace_premium</span>
            已具备技能
          </h2>
          <div className="flex flex-wrap gap-3">
            {skillGroups.map(({ category, skills }) => (
              <div key={category} className="w-full">
                <div className="w-full mb-2 mt-4 font-body text-[36px] uppercase tracking-widest text-outline">
                  {category}
                </div>
                {skills.map((s) => (
                  <span key={s} className="cursor-target skill-pill inline-block px-5 py-2.5 rounded-full font-body text-[28px] text-on-tertiary-container mr-3 mb-3">
                    {s}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Workspace photo */}
          <div className="mt-12 rounded-xl overflow-hidden relative aspect-video shadow-sm">
            <img
              src={WORKSPACE_IMG}
              alt="Creative Workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </section>

        {/* Right: Growth */}
        <section className="lg:col-span-7 space-y-8">
          <h2 className="font-heading text-headline-lg text-text-primary mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-tertiary">trending_up</span>
            努力发展方向
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {growthCards.map(({ title, icon, desc, tags }) => (
              <div
                key={title}
                className="cursor-target growth-card p-8 rounded-r-xl"
                onMouseEnter={(e) => {
                  const ico = e.currentTarget.querySelector<HTMLElement>(".material-symbols-outlined");
                  if (ico) { ico.style.transform = "rotate(12deg) scale(1.2)"; ico.style.transition = "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"; }
                }}
                onMouseLeave={(e) => {
                  const ico = e.currentTarget.querySelector<HTMLElement>(".material-symbols-outlined");
                  if (ico) { ico.style.transform = "rotate(0deg) scale(1)"; }
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-headline-md text-on-tertiary-container">{title}</h3>
                  <span className="material-symbols-outlined text-outline">{icon}</span>
                </div>
                <p className="font-body text-body-md text-text-body mb-4 leading-relaxed">{desc}</p>
                <div className="flex items-center gap-2 font-body text-label-sm text-tertiary flex-wrap">
                  {tags.map((tag, i) => (
                    <span key={tag} className="flex items-center gap-1">
                      {i > 0 && <span className="w-1 h-1 rounded-full bg-tertiary inline-block ml-2" />}
                      <span className="w-1 h-1 rounded-full bg-tertiary inline-block" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section className="mt-32 mb-16 py-16 px-8 rounded-3xl bg-surface border border-border-subtle text-center">
        <h2 className="font-heading text-headline-lg text-text-primary mb-6">期待与志同道合的团队相遇</h2>
        <p className="font-body text-body-md text-text-body mb-10 max-w-lg mx-auto opacity-75">
          无论是深度的项目合作还是灵感的偶然碰撞，我都热忱欢迎您的联络。让我们共同创造富有温度的数字未来。
        </p>
        <a
          href="mailto:hello@edith.me"
          className="cursor-target inline-flex items-center gap-3 px-10 py-4 rounded-full bg-on-tertiary-fixed-variant text-white font-body text-label-md hover:bg-tertiary transition-all hover:scale-105 active:scale-95"
        >
          Let's talk
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </a>
      </section>
    </main>
  );
};

export default Career;
