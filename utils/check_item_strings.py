import os
import re

# Get the directory of this script (New/utils) and the parent directory (New)
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
NEW_DIR = os.path.dirname(SCRIPT_DIR)

# --- CONFIGURATION ---
# The file you want to check for "a:b" format strings. 
# Defaults to skill_locks.json, change this to process a different file.
TARGET_FILE = os.path.join(NEW_DIR, 'config', 'reskillable', 'skill_locks.json')

# The item dump file to check against.
ITEMS_DUMP_FILE = os.path.join(NEW_DIR, 'ct_dumps', 'common', 'item.txt')
# ---------------------

def main():
    print(f"Target File: {TARGET_FILE}")
    print(f"Items Dump: {ITEMS_DUMP_FILE}\n")

    if not os.path.exists(TARGET_FILE):
        print(f"[-] ERROR: Target file not found: {TARGET_FILE}")
        return

    if not os.path.exists(ITEMS_DUMP_FILE):
        print(f"[-] ERROR: Items dump file not found: {ITEMS_DUMP_FILE}")
        return

    # Read the file containing the potential items
    with open(TARGET_FILE, 'r', encoding='utf-8') as f:
        target_content = f.read()

    # Read the item dump content
    with open(ITEMS_DUMP_FILE, 'r', encoding='utf-8') as f:
        items_content = f.read()

    # Find all strings formatted as "namespace:item_name"
    # Matches letters, numbers, underscores, dashes, and periods around exactly one colon.
    pattern = r'"([a-z0-9_\-\.]+:[a-z0-9_\-\.]+)"'
    matches = set(re.findall(pattern, target_content))

    if not matches:
        print("No item IDs (format 'namespace:item') found in the target file.")
        return

    # Specific rule for skill_locks.json: ignore "skillname:level" patterns like "magic:82"
    if TARGET_FILE.endswith(os.path.join('config', 'reskillable', 'skill_locks.json')) or 'skill_locks.json' in TARGET_FILE:
        matches = {m for m in matches if not re.match(r'^[a-zA-Z_]+:\d+$', m)}

    missing_items = []
    
    # Verify each found item against the dump list
    for item in matches:
        # Check if the text matches anywhere in the dump file
        if item not in items_content:
            missing_items.append(item)

    # Output results
    print(f"Extracted {len(matches)} unique item-like strings.")
    
    if missing_items:
        print(f"\n[!] Found {len(missing_items)} missing items that do not exist in the dump:")
        for missing in sorted(missing_items):
            print(f"  - {missing}")
    else:
        print("\n[+] Success! All extracted item strings exist in the items dump.")

if __name__ == '__main__':
    main()
