import os, re

target_dir = r"c:\Users\aman0\OneDrive\Desktop\Project\E-Commerce Project\Client\shopkaro\src\pages"
content = open(os.path.join(target_dir, "Mens.jsx"), "r", encoding="utf-8").read()

parts = re.split(r"(?m)^(?=import React)", content)
for p in parts:
    if not p.strip(): continue
    m = re.search(r"export default function\s+([A-Za-z0-9_]+)", p)
    if m:
        name = m.group(1)
        # Fix the Unsplash URL back to proper format
        p = p.replace('&fit=crop&w=1920&q=80', '&w=1920&q=80')
        # Oh wait, the previous replace was '&fit=crop&w=2560&h=600&q=100' -> '&w=1920&q=80'
        # The script will just write them out as is.
        filepath = os.path.join(target_dir, f"{name}.jsx")
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(p)
        print(f"Recovered {name}.jsx")
