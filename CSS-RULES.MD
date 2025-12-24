# CSS Rules

This file defines **how CSS is structured and ordered**.

The goal is not to write clever CSS, but to:

* Keep styles readable as files grow
* Avoid framework override confusion
* Make intent obvious at a glance
* Help future-me understand *why* things are placed where they are

---

## 📌 Core Principle

> **Structure beats cleverness.**

If CSS is easy to scan, it is easy to maintain.

---

## 1️⃣ Global Rules Come First

All global concerns must appear at the top of the file.

This includes:

* `@import` statements
* Font definitions
* Global `body` styles
* Resets or base rules

**Rule:**

* Establish the visual baseline before anything else

---

## 2️⃣ Section-Based Organization

CSS must be grouped by major UI sections.

Examples of sections:

* header
* navbar
* footer
* layout
* pages

**Rule:**

* Every section must have a clear start and end
* Sections should be readable even when collapsed in the editor

---

## 3️⃣ Framework Overrides Come First Inside a Section

Inside any section:

1. **First:** Framework or third-party class modifications (e.g. Bootstrap)
2. **Then:** Custom project classes

**Rule:**

* Never mix framework overrides with custom classes
* Overrides must always appear before custom logic

**Why this rule exists:**

* Framework code is external and fragile
* Overrides are the most likely source of bugs
* Keeping them first makes conflicts obvious

---

## 4️⃣ Custom Classes Come After Overrides

After framework fixes:

* Add project-specific classes
* Keep naming intentional and scoped to the section

**Mental model:**

> Fix the borrowed system first → then build your own on top

---

## 5️⃣ Clean Section Boundaries

**Rule:**

* Every section start must have a matching section end
* No orphan styles outside sections

This enforces discipline and prevents silent CSS sprawl.

---

## 🚫 What to Avoid

* Mixing Bootstrap fixes with custom classes
* Writing global styles in the middle of the file
* Letting sections bleed into each other
* Styling without a clear section context

---

## 🧠 Final Note to Myself

CSS files are maps.

If I can scroll and immediately understand:

* what part of the UI I’m in
* whether I’m fixing a framework or building my own logic

Then this system is doing its job.
