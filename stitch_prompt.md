# Stitch Prompt — Edith Personal Website

> 直接将下方 **Prompt 正文** 完整复制粘贴进 Stitch 的输入框即可。

---

## Prompt 正文

```
Design a personal website for "Edith" — a warm, elegant, and quietly confident personal + career showcase site. The aesthetic should feel like a high-end lifestyle editorial meets a 4A branding agency portfolio: refined, unhurried, and deeply personal.

---

### DESIGN SYSTEM

**Color Palette (Morandi Caramel — muted, warm, zero harsh contrast):**
- Background: #FDFAF4 (warm off-white)
- Surface / card background: #F8F0E0
- Primary brand: #F4E3BB (cream yellow)
- Accent warm: #C2A46A (caramel milk tea)
- Accent dark: #8B5A2B (dark caramel)
- Text primary: #2F1B0C (deep brown — high-end feel)
- Text body: #4A4A4A
- Text muted / annotation: #C2A46A (light bg) or #D4A76A (dark bg)
- Border: rgba(194, 164, 106, 0.25)

**Typography:**
- Headings: Playfair Display, italic weight preferred, feels literary and personal
- Body / UI: DM Sans, light weight (300–400), airy and modern
- No bold everywhere — restraint is the aesthetic

**Visual language:**
- Generous white space; breathing room is a design element
- Soft lines, no drop shadows heavier than 0 4px 24px rgba(47,27,12,0.08)
- Rounded corners: 6–12px for cards, pill (9999px) for buttons/tags
- No hard black. No pure white. Everything slightly warm-tinted.
- Subtle border separators instead of heavy dividers

---

### PAGE 1 — HOME (首页)

**Layout:** Full viewport height, zero scroll needed.

**Top-left:** The name "Edith" in large italic Playfair Display serif (~52px), color #2F1B0C. This is the identity anchor — prominent but not aggressive.

**Top-right:** Minimal navigation — three text links only: 首页 · 关于我 · 职业特性. Font: DM Sans, 11px, letter-spacing 0.15em, uppercase, color #8B5A2B. Active page underline (1px, animated). No background, no box, purely typographic.

**Center canvas (most of the page):** Five keywords scattered organically across the viewport like a mood board or torn magazine clippings. Each keyword has a different font size, slight rotation, and opacity. They are NOT in a grid — they feel intentionally placed but casual:
  - "猫奴" — large (~42px), top-left quadrant, rotated -6°, opacity 0.9
  - "大湾区居民" — small (~17px), center-right, rotated +3°, opacity 0.65
  - "zumba 狂热份子" — medium (~23px), left-center, rotated -2.5°, opacity 0.80
  - "ESTJ" — very large (~52px), right side, rotated +5°, opacity 0.50 (feels like a watermark)
  - "寻求下一段职业突破" — small (~15px), lower-center, rotated -1°, opacity 0.60

**Bottom (contact strip):** A single thin horizontal rule (#C2A46A, 1px, full width with padding), then below it a one-line strip: label "联系方式" (tiny uppercase, muted) followed by: email · LinkedIn · Instagram — all as inline text links, DM Sans 13px, color #8B5A2B.

**Mood:** Minimalist. Confident. Like you walked into someone's beautifully curated studio apartment.

---

### PAGE 2 — ABOUT ME (关于我)

**Page header (top section):**
Small pre-label: "— About Me" (DM Sans, 11px, uppercase, letter-spacing 0.2em, muted caramel)
Large heading: "一个人的 / 多面呈现" — Playfair Display ~60px, color #2F1B0C, line-break between the two phrases. "人" should be italic and colored #C2A46A as a typographic accent.
Short horizontal rule (48px wide, 2px, #C2A46A) below the heading.

**Four content sections — 2×2 grid:**
Each section is a card with soft cream background (#FBF6EE), 1px border, gentle hover state.
Inside each card: a small illustrated icon (SVG, hand-drawn style, caramel tones), a section number tag (01/02/03/04 — tiny, uppercase, muted), a title in Playfair Display ~28px, an italic English subtitle in DM Sans 11px uppercase muted, and 2–3 lines of body text in DM Sans 14px weight 300.

  **Section 01 — 猫奴 / The Cat Servant**
  Icon: simple line-art cat face with whiskers (caramel strokes on cream bg)
  Body: "家里住着两只小主人，每天的日程由它们决定。铲屎、撸猫、被无视——生活的全部意义。"

  **Section 02 — 大湾区居民 / Greater Bay Area**
  Icon: simple globe/map outline with a dot on the Pearl River Delta region
  Body: "生活在粤港澳大湾区，日日穿梭于城市之间。茶餐厅的奶茶、避风塘的炒蟹，是这里独有的烟火气。"

  **Section 03 — Zumba 狂热份子 / Dance · Move · Live**
  Icon: simple dancing figure, arms raised, energetic but minimal line-art
  Body: "每周雷打不动的课表，汗水是最好的解压方式。节奏一响，所有烦恼都在拉丁舞步里消散。"

  **Section 04 — ESTJ / The Executive**
  Icon: four-quadrant grid/matrix icon representing structure and organization
  Body: "天生的执行官——逻辑清晰、目标导向、擅长组织协调。规则是稳定的基石，效率是最高准则。"

Alternating card backgrounds: odd cards #FDFAF4, even cards #F8F0E0 — subtle rhythm, not stark contrast.

---

### PAGE 3 — CAREER (职业特性)

**Page header:**
Same pre-label pattern: "— Career Profile" (muted, uppercase, 11px)
Heading: "职业特性" — Playfair Display ~60px, with "特性" italic and colored #C2A46A
Tagline below: "寻求下一段职业突破 — 在经验积累与未来可能之间，找到最好的交汇点。" DM Sans 14px weight 300, muted caramel, max-width 520px.

**Two-column layout (equal width, separated by a 1px vertical line in border color):**

  **Left column — 已具备技能 (Existing Skills):**
  Column label: "01" (tiny, uppercase, muted) + heading "已具备技能" (Playfair ~24px) + short description line (DM Sans 13px weight 300, muted).
  Skills rendered as a vertical list of pill-shaped soft tags — each tag: cream surface (#F8F0E0), 1px border (#C2A46A 40% opacity), 6px dot in #C2A46A, skill name in Chinese + English subtitle below in tiny muted text. Tags: 项目管理 · 跨部门协作 · 数据分析 · 用户研究 · 流程优化 · 团队领导.

  **Right column — 努力发展方向 (Growth Areas):**
  Same column label pattern: "02" + heading "努力发展方向".
  Items rendered as cards with a 3px left border in #8B5A2B (dark caramel accent), cream surface, growth area name bold + English subtitle + one-line italic note below. Items: 产品策略 · 商业分析 · 品牌运营 · AI 应用实践.

**Bottom CTA bar:**
1px top border in border color. Left: italic serif text "期待与志同道合的团队相遇". Right: pill button "Let's talk →" — outlined style (border #8B5A2B, text #8B5A2B), on hover fills with #8B5A2B and text turns warm white.

---

### NAVIGATION & TRANSITIONS

- Navigation fixed to top-right, always visible, transparent background (no nav bar box)
- Page transitions: fade-in + slight translateY(10px → 0) over 400ms ease — subtle, not flashy
- Hover states on all interactive elements: 200ms ease, color or opacity shift only
- No parallax, no scroll-triggered animations, no bouncing — calm and intentional

---

### OVERALL FEEL REFERENCE

Think: a warm Sunday morning café with natural light, linen tablecloths, a well-worn journal open on the table. Professional but not cold. Personal but not cluttered. Feminine but not girlish. This person knows exactly who she is.
```

---

## 使用说明

1. 打开 [Stitch](https://stitch.withgoogle.com)
2. 新建项目，选择 **"Describe your UI"** 模式
3. 将上方 **Prompt 正文**（三个反引号之间的全部内容）完整粘贴进输入框
4. 若 Stitch 支持上传参考图，可同时上传你的思维导图截图作为视觉参考
5. 生成后，可针对单个页面追加微调，例如：
   - `"Make the Home page keywords feel more scattered and organic"`
   - `"The About page cards should have more breathing room"`
   - `"Navigation font should be thinner and more spaced out"`
