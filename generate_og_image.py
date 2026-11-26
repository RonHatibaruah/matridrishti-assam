import os
from PIL import Image, ImageDraw, ImageFont

# Canvas size: 1200 x 630 (standard OpenGraph 1.91:1)
W, H = 1200, 630
img = Image.new('RGB', (W, H), color='#090d16') # deep slate/navy background
draw = ImageDraw.Draw(img)

# Gradient background accent
# Draw background gradient/glow
for y in range(H):
    # subtle vertical gradient
    r = int(9 + (15 - 9) * (y / H))
    g = int(13 + (23 - 13) * (y / H))
    b = int(22 + (38 - 22) * (y / H))
    draw.line([(0, y), (W, y)], fill=(r, g, b))

# Emerald radial glow in top-left and teal glow in bottom-right
# Using overlay circles
overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
ov_draw = ImageDraw.Draw(overlay)

# Top left emerald glow
for r in range(400, 0, -5):
    alpha = int(45 * (1 - r / 400))
    ov_draw.ellipse([-100 - r, -100 - r, 350 + r, 350 + r], fill=(16, 185, 129, alpha))

# Bottom right teal/cyan glow
for r in range(450, 0, -5):
    alpha = int(35 * (1 - r / 450))
    ov_draw.ellipse([W - 250 - r, H - 200 - r, W + 100 + r, H + 100 + r], fill=(6, 182, 212, alpha))

# Combine overlay
img = Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')
draw = ImageDraw.Draw(img)

# Fonts
font_path_bold = '/System/Library/Fonts/HelveticaNeue.ttc'
font_path_reg = '/System/Library/Fonts/HelveticaNeue.ttc'
font_path_bangla = '/System/Library/Fonts/KohinoorBangla.ttc'

try:
    font_badge = ImageFont.truetype(font_path_bold, 18, index=1)
    font_title = ImageFont.truetype(font_path_bold, 64, index=1)
    font_as_title = ImageFont.truetype(font_path_bangla, 56, index=1)
    font_sub = ImageFont.truetype(font_path_bold, 28, index=1)
    font_desc = ImageFont.truetype(font_path_reg, 22, index=0)
    font_stat_num = ImageFont.truetype(font_path_bold, 42, index=1)
    font_stat_lbl = ImageFont.truetype(font_path_reg, 16, index=0)
    font_pill = ImageFont.truetype(font_path_bold, 16, index=1)
except Exception as e:
    print(f"Font loading fallback: {e}")
    font_badge = ImageFont.load_default()
    font_title = font_badge
    font_as_title = font_badge
    font_sub = font_badge
    font_desc = font_badge
    font_stat_num = font_badge
    font_stat_lbl = font_badge
    font_pill = font_badge

# Top Tag / Govt Attribution
# Pill badge: GOVT OF ASSAM • HEALTH & FAMILY WELFARE • NESFIC-D-23
badge_text = "GOVERNMENT OF ASSAM • HEALTH & FAMILY WELFARE & NHM ASSAM • NESFIC-D-23"
draw.rounded_rectangle([70, 55, 840, 95], radius=8, fill='#13271f', outline='#059669', width=1)
draw.text((90, 65), badge_text, font=font_badge, fill='#34d399')

# Status dot
draw.ellipse([810, 71, 822, 83], fill='#10b981')

# Main Title: MatriDrishti + (মাতৃ-দৃষ্টি)
title_text = "MatriDrishti "
as_text = "(মাতৃ-দৃষ্টি)"
draw.text((70, 115), title_text, font=font_title, fill='#ffffff')
# Measure title width
title_w = draw.textlength(title_text, font=font_title)
draw.text((70 + title_w, 122), as_text, font=font_as_title, fill='#10b981')

# Subtitle / Tagline
sub_text = "Assam Maternal Health & PIH Early Sentinel Platform"
draw.text((70, 195), sub_text, font=font_sub, fill='#38bdf8')

# Value proposition description (2 lines)
desc_line1 = "Edge AI Longitudinal Mean Arterial Pressure (MAP) Velocity & Gestational Risk Engine"
desc_line2 = "Offline-first ASHA Screening for Tea Estates & Chars with Closed-Loop 108 Emergency Dispatch"
draw.text((70, 245), desc_line1, font=font_desc, fill='#cbd5e1')
draw.text((70, 278), desc_line2, font=font_desc, fill='#94a3b8')

# Divider rule
draw.line([(70, 325), (1130, 325)], fill='#1e293b', width=2)

# 4 Key Quantitative Metrics / Pillars
metrics = [
    ("195 / 100k", "Assam MMR Baseline", ">250 in Tea Estates", "#ef4444"),
    ("12-16 Wks", "Early Detection Window", "Prophylactic Aspirin", "#f59e0b"),
    ("< 60 Sec", "Point-of-Care Triage", "IoT Blood Pressure Sync", "#10b981"),
    ("100% Offline", "Char & Riverine Sync", "CouchDB / PouchDB Mesh", "#38bdf8")
]

card_w = 250
card_h = 135
y_cards = 350

for idx, (m_val, m_lbl, m_sub, m_col) in enumerate(metrics):
    x = 70 + idx * (card_w + 13)
    # card background
    draw.rounded_rectangle([x, y_cards, x + card_w, y_cards + card_h], radius=12, fill='#0f172a', outline='#1e293b', width=1)
    # colored top accent border inside card
    draw.rounded_rectangle([x, y_cards, x + card_w, y_cards + 5], radius=2, fill=m_col)
    
    # metric value
    draw.text((x + 18, y_cards + 18), m_val, font=font_stat_num, fill=m_col)
    # label
    draw.text((x + 18, y_cards + 72), m_lbl, font=font_stat_lbl, fill='#f1f5f9')
    # sub text
    draw.text((x + 18, y_cards + 96), m_sub, font=font_stat_lbl, fill='#64748b')

# Bottom Compliance & Architecture Trust Footer Badges
pills = [
    "CDSCO Class B SaMD",
    "ABDM M1 / M2 / M3",
    "DPDP Act 2023 Compliant",
    "Assam SDC Hosted",
    "108 Mrityunjoy API"
]

y_pill = 525
x_pill = 70
for p in pills:
    pw = draw.textlength(p, font=font_pill) + 24
    draw.rounded_rectangle([x_pill, y_pill, x_pill + pw, y_pill + 38], radius=8, fill='#1e293b', outline='#334155', width=1)
    draw.text((x_pill + 12, y_pill + 10), p, font=font_pill, fill='#e2e8f0')
    x_pill += pw + 12

# Save to public/og-image.jpg and public/og-image.png
img.save('public/og-image.jpg', 'JPEG', quality=95, optimize=True)
img.save('public/og-image.png', 'PNG', optimize=True)
print("Successfully generated public/og-image.jpg and public/og-image.png")
