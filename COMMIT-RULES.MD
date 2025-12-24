# Commit Rules

This file defines **how and why I write commits**.

The goal is not to follow industry buzzwords, but to:

* Make commits readable months later
* Capture *intent*, not just changes
* Turn `git log` into a thinking timeline

---

## 📌 Commit Message Structure

```
[intent] - [target] - summary
```

Each part answers a specific question.

---

## 1️⃣ `[intent]` — Broad Purpose

**Question it answers:**

> Why does this commit exist?

This is the *category* of change, not the action.

### Common intents

* `[scaffold]` → structure, foundations, setup
* `[feature]` → user-facing functionality
* `[refactor]` → internal restructuring, no behavior change
* `[fix]` → bug fixes
* `[style]` → visual / UI-only changes
* `[docs]` → documentation
* `[perf]` → performance improvements
* `[chore]` → tooling, configs, maintenance

**Rule:**

* One commit → one clear intent

---

## 2️⃣ `[target]` — Area or Element Affected

**Question it answers:**

> Where did this change apply?

Targets define *scope*.

### Examples

* `[navbar]`
* `[footer]`
* `[layout]`
* `[auth]`
* `[utils]`
* `[db]`
* `[api]`

**Rule:**

* Be specific, not generic
* Prefer concrete areas over vague terms

---

## 3️⃣ `summary` — What Changed

**Question it answers:**

> What is different after this commit?

### Style rules

* Use **nouns**, not verbs
* No need to say *added / updated / modified*
* Comma-separated list is preferred

### Example

```
[scaffold] - [navbar] - utilities, light-logo, readme
```

Git already tracks *how* things changed.
This section only communicates *what exists now*.

---

## 🚫 What to Avoid

* Vague messages like `update stuff`
* Multiple unrelated intents in one commit
* Long sentences
* Emotional or filler words

---

## 🧠 Final Note to Myself

Commits are not chores.
They are **snapshots of thinking**.

If future-me can understand:

* why this commit exists
* where it applies
* what changed

Then this system is working.
