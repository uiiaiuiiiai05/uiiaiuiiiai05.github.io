# AGENT.md - แกนกลางกฎร่วมของ AI Agent ทุกตัว

> เอกสารนี้เป็น **Single Source of Truth** ของกฎการทำงานร่วมสำหรับ AI Agent ทุกตัวที่ใช้งานในโปรเจกต์ Portfolio นี้
> ห้ามเขียนกฎซ้ำในไฟล์อื่น — ให้อ้างอิง (ลิงก์) มาที่ไฟล์นี้แทน

- 📘 เอกสารประจำเครื่องมือ: [GEMINI.md](GEMINI.md) (Gemini) · [OPENCODE.md](OPENCODE.md) (opencode)
- 🛠️ Skills ทั้งหมด: [SKILL.md](SKILL.md)
- 🎨 สถาปัตยกรรมเว็บ: [DESIGN.md](DESIGN.md)
- ✍️ มาตรฐานโค้ดและดีไซน์: [STYLE.md](STYLE.md)

---

## 1. Document Map (แผนที่เอกสาร — อ่านก่อนลงมือทุกครั้ง)

| เอกสาร | อ่าน/อัปเดตเมื่อไหร่ |
| :--- | :--- |
| [AGENT.md](AGENT.md) (ไฟล์นี้) | กฎร่วม — บังคับใช้ทุก Task |
| [DESIGN.md](DESIGN.md) | ก่อนแตะโครงสร้าง HTML/CSS/JS หรือเพิ่ม Section ใหม่ |
| [STYLE.md](STYLE.md) | ก่อนเขียนโค้ดหรือแตะ Design Tokens ใดๆ |
| [SKILL.md](SKILL.md) | เมื่องานเข้าท่าของ skill ที่มีอยู่ (review, security, ประหยัด token) |

## 2. Core Principles (หลักการสำคัญ)

1. **Read Before Write** — อ่านเอกสารตาม Document Map ก่อนเสมอ อย่าเดาโครงสร้างโค้ด
2. **Surgical Changes** — แก้เฉพาะจุดที่เกี่ยวข้อง ไม่ลบโค้ด/คอมเมนต์ที่ไม่เกี่ยวข้อง ไม่ refactor นอกขอบเขต
3. **Respect the Aesthetic** — เว็บนี้ใช้ธีม "Superr Notebook" การแก้ดีไซน์ต้องยึด Design Tokens ใน [STYLE.md](STYLE.md) ห้ามออกนอกธีม
4. **แก้คู่ภาษาเสมอ** — ทุกข้อความมีทั้ง TH/EN ใน `js/language.js` ถ้าแก้หรือเพิ่มข้อความ ต้องแก้ทั้งสองภาษา
5. **ถามก่อนสมมติ** — ความต้องการคลุมเครือให้ถามผู้ใช้ก่อน อย่าเดาเอง

## 3. Security Rules (ข้อห้ามด้านความปลอดภัย — บังคับเด็ดขาด)

- 🚫 ห้ามอ่าน/แก้ไฟล์ลับ: `.env`, `.env.*`, `secrets/*`, `*.pem`, `*.key`
- 🚫 ห้ามรันคำสั่งที่พิมพ์ค่า Environment Variables: `printenv`, `env`, `cat .env`
- 🚫 ห้ามฮาร์ดโค้ด Credentials, API Key, Token ลงซอร์สโค้ด (Supabase ใช้ **anon key เท่านั้น** — ตาม [DESIGN.md](DESIGN.md))
- 🚫 ห้ามอ่าน `node_modules/**` โดยไม่จำเป็น

## 4. Tooling (เครื่องมือพื้นฐาน)

- รันคำสั่งเชลล์ผ่าน **`rtk`** เสมอเมื่อมี (ประหยัด token): `rtk git status`, `rtk git diff`, `rtk ls`
- เว็บเป็น Static Site: ทดสอบด้วยการเปิด `index.html` หรือรันเซิร์ฟเวอร์ชั่วคราวแบบ read-only
- สื่อสารกับผู้ใช้เป็น**ภาษาไทย** กระชับ ตรงประเด็น

## 5. Definition of Done (เกณฑ์งานเสร็จ)

- [ ] โค้ดไม่มี Syntax/Console error เมื่อเปิดในเบราว์เซอร์
- [ ] ทุกข้อความที่แตะมีครบทั้ง TH และ EN (`js/language.js`)
- [ ] สไตล์ยึด Design Tokens (`css/style.css` `:root`) — ไม่มีค่าสี/ฟอนต์ฮาร์ดโค้ดใหม่โดยไม่จำเป็น
- [ ] Responsive ผ่านทุก breakpoint ที่แตะ (ใช้ `container` + media queries เดิม)
- [ ] ไม่ทิ้งไฟล์ชั่วคราว, `console.log` ดีบัก, หรือ secrets
