const GBA_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD23egP9PWiWZkwWxiJjpZfVtGmlY2H-ImI7g6uy4lcAAhpPHgNT52jY19lwxxtxKCZq4LpTdjzoxFrObPB88J7bcKCsb8ef322XmIpAR_24qtbOxbPGDrSq517KjEAhTlFqSkFvLBziqieHxoQiZzK3zXFCa3jtPBkXcPhXqUDCZAjFpfYo5ME-tDJALBAs7BSBzrxIewOaFDyG_2yFdX7DOnc4L-OBvtgWwhnz9CSY-yozEiK4glFUTBqmFBB_Ueu85jeuekSM1I";

const About = () => {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">

      {/* Hero */}
      <header className="mb-16 md:mb-24">
        <h1 className="font-heading text-display-lg text-text-primary mb-6 leading-tight">
          一个人的 / 多面呈现
        </h1>
        <p className="font-body text-body-lg text-text-body max-w-2xl opacity-80">
          穿梭于代码、节奏与生活细节之间。在职业的严谨之外，我也在这些琐碎而热烈的身份里寻找平衡与灵感。
        </p>
      </header>

      {/* 2×2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">

        {/* Card 1: 猫奴 */}
        <div className="cursor-target about-card md:p-12 group">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-4xl text-on-tertiary-container">pets</span>
            <span className="font-body text-[18px] bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full">
              认真铲屎官
            </span>
          </div>
          <div>
            <h3 className="font-heading text-headline-lg text-text-primary mb-4">猫奴</h3>
            <p className="font-body text-[24px] text-text-body leading-relaxed">
              家里有且仅有一个小警花Judy，香甜肥美肉多脾气好。
            </p>
            <div className="mt-4 rounded-xl overflow-hidden border border-border-subtle">
              <img src="/judy.png" alt="小警花Judy" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        {/* Card 2: 大湾区居民 */}
        <div className="cursor-target about-card md:p-12 group">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-4xl text-on-tertiary-container">location_on</span>
            <span className="font-body text-[18px] bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full">
              来了就是深圳人
            </span>
          </div>
          <div>
            <h3 className="font-heading text-headline-lg text-text-primary mb-4">大湾区居民</h3>
            <p className="font-body text-[24px] text-text-body leading-relaxed">
              长期奔走在澳门，顺德，珠海，深圳，大湾区的大湾走地鸡。能快速适应各种环境，找到合适自己的成长方式与轨迹。
            </p>
          </div>
          <div className="mt-auto">
            <div className="w-full h-40 rounded-lg overflow-hidden border border-border-subtle">
              <img src={GBA_IMG} alt="Greater Bay Area skyline" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Card 3: Zumba */}
        <div className="cursor-target about-card md:p-12 group">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-4xl text-on-tertiary-container">fitness_center</span>
            <span className="font-body text-[18px] bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full">
              不跳舞不舒服
            </span>
          </div>
          <div>
            <h3 className="font-heading text-headline-lg text-text-primary mb-4">Zumba 狂热份子</h3>
            <p className="font-body text-[24px] text-text-body leading-relaxed">
              如果说编码是思维的体操，那么 Zumba 就是灵魂的释放。我享受在强劲的节奏中挥洒汗水，那种纯粹的动态快乐能瞬间重启我的创造力。在音乐中，没有逻辑框架，只有最直觉的表达。
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {["高能运动", "节奏感", "解压良方"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full border border-border-subtle font-body text-label-md text-on-tertiary-container"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card 4: ESTJ — featured / highlighted */}
        <div className="cursor-target about-card-featured md:p-12 group">
          {/* Ambient glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-on-tertiary-container/5 rounded-full blur-3xl group-hover:bg-on-tertiary-container/10 transition-colors duration-500" />

          <div className="flex justify-between items-start relative z-10">
            <span className="material-symbols-outlined text-4xl text-on-tertiary-container">psychology</span>
            <span className="font-body text-[18px] bg-on-tertiary-container text-white px-3 py-1 rounded-full">
              MBTI
            </span>
          </div>

          <div className="relative z-10">
            <div className="flex items-baseline gap-3 mb-4">
              <h3 className="font-heading text-headline-lg text-text-primary">ESTJ</h3>
              <span className="font-body text-label-md text-on-tertiary-container font-bold">总经理型</span>
            </div>
            <p className="font-body text-[24px] text-on-primary-container leading-relaxed">
              我天生倾向于建立秩序与组织。在项目中，我是那个确保"每块砖都放在正确位置"的人。对效率的追求、对细节的严谨掌控以及清晰的决策逻辑，是我在职场和生活中最稳固的基石。我信奉：卓越来源于日复一日的自律与执行。
            </p>
          </div>

          <div className="mt-auto relative z-10 grid grid-cols-2 gap-4">
            {[
              { label: "执行力", pct: "95%" },
              { label: "逻辑性", pct: "90%" },
            ].map(({ label, pct }) => (
              <div key={label} className="p-4 bg-background/50 rounded-lg border border-border-subtle">
                <p className="font-body text-label-sm text-on-tertiary-container mb-1">{label}</p>
                <div className="h-1.5 w-full bg-outline-variant/30 rounded-full overflow-hidden">
                  <div className="h-full bg-on-tertiary-container rounded-full" style={{ width: pct }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy section */}
      <section className="mt-24 py-16 border-t border-border-subtle">
        <div className="max-w-3xl">
          <h2 className="font-heading text-headline-lg text-text-primary mb-8">我的生活哲学</h2>
          <div className="space-y-6 font-body text-body-lg text-text-body leading-relaxed opacity-90">
            <p>
              我相信设计的价值不仅仅在于美学，更在于它如何通过克制与精确来引导更好的生活。正如我在代码中追求简洁（Clean Code），我也在生活中践行这种"精致的简约"。
            </p>
            <p>
              无论是作为猫奴的温柔，还是作为 ESTJ 的果敢，这些不同的侧面共同构成了现在的 Edith——一个在变动不居的世界中，始终保持理性底色并热烈拥抱生活的人。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
