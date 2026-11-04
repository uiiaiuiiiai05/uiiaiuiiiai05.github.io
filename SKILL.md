# SKILL.md - สารบัญ Skills ทั้งหมด

แคตตาล็อกความสามารถพิเศษ (skills) ที่ติดตั้งไว้ในโปรเจกต์นี้ ตั้งอยู่ที่ `.opencode/skills/`

> กฎการใช้งานร่วมดูที่ [AGENT.md](AGENT.md) · ข้อปฏิบัติเฉพาะ opencode ดูที่ [OPENCODE.md](OPENCODE.md) · เครื่องมือคู่แฝด: [GEMINI.md](GEMINI.md)

---

## 1. Skill Catalog (รายการ skills)

| Skill | Trigger (ใช้เมื่อไหร่) | สิ่งที่ได้ |
| :--- | :--- | :--- |
| **ponytail** | งานโค้ดทุกประเภท (เขียน/แก้/refactor/review) หรือผู้ใช้บอก "be lazy", "yagni", "ง่าย ๆ" | โซลูชันเล็กที่สุดที่แก้ปัญหาได้จริง + คำอธิบายที่คนธรรมดาอ่านรอบเดียวเข้าใจ |
| **code-review** | ต้องรีวิวโค้ด/Todo/PR หลังเขียนเสร็จ | เช็กคุณภาพโค้ดตามเช็กลิสต์มาตรฐานของ skill |
| **security** | แตะ auth, input ผู้ใช้, secrets, API endpoint, ข้อมูลอ่อนไหว | เช็กลิสต์ความปลอดภัยครบชุด + รูปแบบโค้ดที่ปลอดภัย |
| **rtk** | จะรันคำสั่งเชลล์ (git, ls, grep, npm ฯลฯ) | วิธีรันผ่าน `rtk` เพื่อลด token เช่น `rtk git status`, `rtk ls` |
| **caveman** | ผู้ใช้สั่ง `/caveman` หรือ "be brief", "ประหยัด token", "caveman mode" | โหมดพูดสั้นสุดตรงประเด็น ไม่มีคำโป้งโปรย (อยู่จนกว่าจะสั่ง "normal mode") |
| **skill-creator** | ต้องสร้าง/ปรับ/วัดประสิทธิภาพ skill ใหม่ | ขั้นตอน scaffold SKILL.md + checklist มาตรฐาน |

## 2. Usage Rules (กฎการเรียกใช้)

1. เช็กคอลัมน์ **Trigger** ก่อนเรียก — อย่าโหลด skill ที่ไม่เกี่ยวข้อง (เปลือง token)
2. skill เป็น **โหมดติดตั้ง** ประเภท caveman/ponytail — เปิดแล้วอยู่ตลอด session จนกว่าจะสั่งปิด
3. skill ประเภท checklist (code-review/security/rtk) ใช้แบบ "โหลดคำแนะนำ → ทำตาม → จบ"
4. เมื่อพัฒนาเว็บ Portfolio ให้จับคู่บ่อยสุด: `rtk` (ทุกคำสั่งเชลล์) + `security` (ตอนแตะฟอร์ม Supabase/Formspree) + `code-review` (ก่อนส่งมอบ)

## 3. Adding a New Skill (วิธีเพิ่มใหม่)

เรียก skill `skill-creator` แล้วทำตามขั้นตอน → ผลลัพธ์คือโฟลเดอร์ใหม่ใน `.opencode/skills/<ชื่อ>/SKILL.md`
เมื่อสร้างเสร็จ ให้อัปเดตตารางใน **Section 1** ของไฟล์นี้ทันที (ห้ามมี skill ที่ไม่อยู่ในสารบัญ)

## 4. Related Docs

- กฎร่วมทุก agent: [AGENT.md](AGENT.md)
- opencode ข้อปฏิบัติเฉพาะ: [OPENCODE.md](OPENCODE.md)
- Gemini ข้อปฏิบัติเฉพาะ: [GEMINI.md](GEMINI.md)
