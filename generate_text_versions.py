#!/usr/bin/env python3
"""
Generate clean, copy-paste-ready, textarea-compliant plain text files for NESFIC 2026:
1. NESFIC_D23_Proposal_Ron_Hatibaruah.txt (Field-by-field copy-paste textarea blocks)
2. NESFIC_D23_Proof_of_Work_Ron_Hatibaruah.txt (Full and modular copy-paste textarea blocks)
"""

import os
import re

base_dir = os.path.dirname(os.path.abspath(__file__))

def clean_text_for_textarea(text):
    """
    Strips raw markdown syntax, converts formulas to plain text,
    standardizes bullets and whitespace for HTML <textarea> compatibility.
    """
    t = text
    lines = t.split('\n')
    cleaned_lines = []
    
    for line in lines:
        stripped = line.strip()
        # Detect table separator
        if re.match(r'^\|?[\s\-:|]+\|?$', stripped):
            continue
        if stripped.startswith('|') and stripped.endswith('|'):
            cells = [c.strip() for c in stripped.strip('|').split('|')]
            clean_cells = [re.sub(r'[*`_]', '', c) for c in cells]
            cleaned_lines.append('  • ' + ' | '.join(clean_cells))
            continue
        cleaned_lines.append(line)
        
    t = '\n'.join(cleaned_lines)
    
    # Strip markdown headers (##, ###)
    t = re.sub(r'^#{1,6}\s+(.*?)$', r'\1', t, flags=re.MULTILINE)
    
    # Strip bold and italics
    t = re.sub(r'\*\*\*(.*?)\*\*\*', r'\1', t)
    t = re.sub(r'\*\*(.*?)\*\*', r'\1', t)
    t = re.sub(r'\*(.*?)\*', r'\1', t)
    t = re.sub(r'`(.*?)`', r'\1', t)
    
    # Convert markdown links [Label](url) -> Label: url
    t = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'\1 (\2)', t)
    
    # Clean latex math
    t = re.sub(r'\$([^$]+)\$', r'\1', t)
    
    # Standardize bullet symbols
    t = re.sub(r'^[ \t]*[-*][ \t]+', '• ', t, flags=re.MULTILINE)
    
    # Clean up excessive blank lines
    t = re.sub(r'\n{3,}', '\n\n', t)
    
    return t.strip()

def generate_proposal_text():
    src_file = os.path.join(base_dir, 'proposal_contents.md')
    out_file = os.path.join(base_dir, 'NESFIC_D23_Proposal_Ron_Hatibaruah.txt')
    
    with open(src_file, 'r', encoding='utf-8') as f:
        raw = f.read()
        
    # Extract header info
    header = "=" * 80 + "\n"
    header += "NESFIC 2026 - STREAM 1 (GOVERNMENT TRACK) - UNIFORM SOLUTION PROPOSAL (USPR)\n"
    header += "Problem Statement ID: NESFIC-D-23: Early Detection of Pregnancy-Induced Hypertension (PIH)\n"
    header += "Sponsoring Department: Department of Health & Family Welfare ● National Health Mission (NHM), Assam\n"
    header += "Applicant / Innovator: Ron Hatibaruah\n"
    header += "Solution: MatriDrishti (Assam Maternal Hypertensive Sentinel)\n"
    header += "Live Prototype: https://matridrishti-assam.pages.dev/\n"
    header += "GitHub Repository: https://github.com/RonHatibaruah/matridrishti-assam\n"
    header += "=" * 80 + "\n\n"
    
    # Split into fields
    # Match both '## Field \d+:' and '## 03: Supporting Material'
    field_pattern = r'## ((?:Field \d+|03: Supporting Material).*?)(?=\n## (?:Field \d+|03: Supporting Material)|\Z)'
    fields = re.findall(field_pattern, raw, flags=re.DOTALL)
    
    field_texts = []
    for f in fields:
        lines = f.strip().split('\n')
        field_header = lines[0].strip()
        field_num_match = re.search(r'(Field \d+|03: Supporting Material)', field_header)
        field_num = field_num_match.group(1) if field_num_match else "?"
        
        field_body = '\n'.join(lines[1:]).strip()
        
        # Word limit info
        limit_match = re.search(r'Limit:\s*(\d+)\s*words', field_body)
        limit_str = f" [Limit: {limit_match.group(1)} words]" if limit_match else ""
        
        cleaned_body = clean_text_for_textarea(field_body)
        word_count = len(re.findall(r'\b\w+\b', cleaned_body))
        
        block = f"{'='*80}\n"
        block += f"COPY-PASTE BLOCK: {field_num.upper()}{limit_str}\n"
        block += f"Actual Word Count: {word_count} words\n"
        block += f"{'='*80}\n\n"
        block += cleaned_body + "\n\n"
        
        field_texts.append(block)
        
    full_output = header + "".join(field_texts)
    
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(full_output)
        
    # Also copy to public/downloads/
    pub_dir = os.path.join(base_dir, 'public', 'downloads')
    os.makedirs(pub_dir, exist_ok=True)
    with open(os.path.join(pub_dir, 'NESFIC_D23_Proposal_Ron_Hatibaruah.txt'), 'w', encoding='utf-8') as f:
        f.write(full_output)
        
    print(f"Generated text version: {out_file} ({len(full_output)} bytes)")

def generate_pow_text():
    src_file = os.path.join(base_dir, 'proof_of_work_dossier.md')
    out_file = os.path.join(base_dir, 'NESFIC_D23_Proof_of_Work_Ron_Hatibaruah.txt')
    
    with open(src_file, 'r', encoding='utf-8') as f:
        raw = f.read()
        
    header = "=" * 80 + "\n"
    header += "NESFIC 2026 - STREAM 1 - PROOF OF WORK & TECHNICAL EVIDENCE DOSSIER\n"
    header += "Problem Statement ID: NESFIC-D-23: Early Detection of Pregnancy-Induced Hypertension (PIH)\n"
    header += "Sponsoring Department: Department of Health & Family Welfare ● National Health Mission (NHM), Assam\n"
    header += "Applicant / Innovator: Ron Hatibaruah\n"
    header += "Solution: MatriDrishti (Assam Maternal Hypertensive Sentinel)\n"
    header += "Live Prototype: https://matridrishti-assam.pages.dev/\n"
    header += "GitHub Repository: https://github.com/RonHatibaruah/matridrishti-assam\n"
    header += "=" * 80 + "\n\n"
    
    cleaned = clean_text_for_textarea(raw)
    full_output = header + cleaned
    
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(full_output)
        
    pub_dir = os.path.join(base_dir, 'public', 'downloads')
    os.makedirs(pub_dir, exist_ok=True)
    with open(os.path.join(pub_dir, 'NESFIC_D23_Proof_of_Work_Ron_Hatibaruah.txt'), 'w', encoding='utf-8') as f:
        f.write(full_output)
        
    print(f"Generated text version: {out_file} ({len(full_output)} bytes)")

if __name__ == '__main__':
    generate_proposal_text()
    generate_pow_text()
