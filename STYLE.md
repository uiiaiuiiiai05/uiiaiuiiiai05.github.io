# STYLE.md - มาตรฐานโค้ดและ Visual Style (Superr Notebook)

แหล่งความจริงเรื่อง Design Tokens และมาตรฐานการเขียนโค้ดของเว็บ Portfolio
> กฎร่วมทุก Agent: [AGENT.md](AGENT.md) · สถาปัตยกรรม: [DESIGN.md](DESIGN.md) · เครื่องมือ: [GEMINI.md](GEMINI.md) / [OPENCODE.md](OPENCODE.md)

---

## 1. Design Tokens (แหล่งเดียว: `css/style.css` → `:root`)

### สี
| Token | ค่า | ใช้ที่ |
| :--- | :--- | :--- |
| `--color-cream-paper` | `#fdfbf9` | พื้นหลักของทั้งเว็บ |
| `--color-charcoal` | `#171717` | ตัวอักษร/เส้นขอบหลัก |
| `--color-cocoa-ink` | `#2b1a07` | หัวข้อ h1-h3 |
| `--color-dew-drop` | `#f7efe9` | พื้น section สลับ/ปุ่ม hover |
| `--color-marker-orange` | `#ff6f1e` | สีเน้นหลัก (ปุ่ม primary, สคริปต์, hover) |
| `--color-burnt-sienna` | `#ce500a` | ปุ่ม primary ตอนกด |
| สติกเกอร์ `--color-sky/bubblegum/sprout` | ฟ้า/ชมพู/เขียว | สติกเกอร์+คอนเฟตติเท่านั้น |
| `--color-shadow-mist` | `#bebcbb` | scrollbar เท่านั้น |

### ตัวอักษร
| Token | ชุดฟอนต์ | ใช้ที่ |
| :--- | :--- | :--- |
| `--font-display` | Fraunces, Kanit, serif | หัวข้อ h1-h3 |
| `--font-body` | Kanit, system-ui | เนื้อความทั้งเว็บ |
| `--font-script` | Caveat, cursive | คำบรรยายลายมือ (`.script-caption`) |

### ระยะ/มุม/เงา
- Spacing ใช้ชุด `--spacing-4/8/12/16/20/24/32/48/64`
- มุมโค้ง: การ์ด `--radius-cards` (16px) · ปุ่ม/แท็ก `--radius-buttons` (20px) · สติกเกอร์ `--radius-sticker` (8px)
- เงา: `--shadow-card` ใบการ์ด · `--shadow-subtle` ปุ่ม/กล่องเล็ก · ทรานสิชัน `--transition` (0.25s ease)

## 2. Visual Rules (ลักษณะเฉพาะของธีม — ห้ามผิด)

1. หัวข้อ section ต้อง **ตัวพิมพ์เล็กทั้งหมด** (`.lowercase-title`) นำด้วยคำบรรยายลายมือส้ม (`.script-caption`) เอียง `-2deg`
2. การเน้นคำในเนื้อความใช้ `.marker-highlight` (พื้นส้มโปร่งเอียง -1deg)
3. ทุกการ์ด/กล่อง = พื้นครีม + ขอบ `1.5px solid var(--color-charcoal)` + เงาแข็งเหลี่ยม (Neubrutalism เบา ๆ)
4. สติกเกอร์ติดขอบวัตถุเสมอ และลอยด้วย keyframes ใน `animations.css` เท่านั้น
5. **ห้าม**แนะนำสี/ฟอนต์/เงาใหม่นอก `:root` — ถ้าจำเป็นต้องเพิ่ม token ใหม่ใน `:root` ก่อนเสมอ

## 3. Code Style

### HTML
- Section ทุกอันมี `id` ตรงกับ href ใน navbar (`#hero`, `#about`, ...) + `scroll-margin-top` รองรับ navbar ลอย
- ข้อความที่แปลได้ต้องมี `id` เฉพาะ (ผูกกับ `translations` ใน `language.js`)
- คอมเมนต์แบ่งโซนแบบ `<!-- Hero Section -->` ทุก section

### CSS
- เรียงไฟล์เป็นบล็อกเลขกำกับ `/* ── 1. Tokens ── */ ... ── 16. Responsive ──` — ฟังก์ชันใหม่ใส่ต่อท้ายบล็อกที่เกี่ยวข้อง ไม่แทรกกลาง
- คลาส kebab-case ตามความหมาย: `.skill-note-card`, `.project-bottom-wrap`
- **ทุกค่าสี/ฟอนต์/ระยะในคอมโพเนนต์ต้องอ้าง `var(--token)`** — inline style เฉพาะกรณี exception ของการ์ดผลงานเดิม
- Media query กลุ่มเดียวที่ `max-width: 840px` (จุดพังของ layout: hero/about/contact grid + เมนูมือถือ)

### JavaScript (vanilla — ไม่มี framework/build step)
- โครง: ทุกฟีเจอร์เป็นฟังก์ชัน `init*` แล้วเรียกแบบชัดเจนใน `DOMContentLoaded`
- ตัวแปร/ฟังก์ชัน camelCase; ค่าคงที่ UPPER_SNAKE; คอมเมนต์ภาษาไทยอธิบาย "ทำไม" ไม่ใช่ "ทำอะไร"
- การแจ้งเตือนผู้ใช้ใช้ `showToast()` ของ `main.js` เท่านั้น — ห้าม `alert()`
- คำสั่งเชลล์ของ Agent ใช้ `rtk` นำหน้าเสมอ (ดู [SKILL.md](SKILL.md) หัวข้อ rtk)

## 4. Definition of Done เฉพาะงานดีไซน์

- [ ] ไม่มี hex/hex ใหม่นอก `:root` หลุดเข้าคอมโพเนนต์
- [ ] Responsive ผ่านที่ 840px ทั้ง desktop และมือถือ
- [ ] ข้อความใหม่มี TH/EN ครบ + มี `id`
- [ ] Console สะอาด ไม่มี warning จากสิ่งที่แตะ
