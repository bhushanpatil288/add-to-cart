# Utility CSS – Personal Guide

This README is **for future-me**.

The goal of this file is simple:

* Document *why* each utility exists
* Explain *when to use it*
* Keep utilities **intentional**, not random
* Make it easy to extend this system without confusion

Think of this as a **design + mental model map**, not just CSS notes.

---

## 📌 Philosophy

1. **Utilities are decisions**

   * Every utility represents a repeated thought
   * If I write the same CSS idea more than once → it deserves a utility

2. **Names describe intent, not appearance**

   * `text-primary-custom` means *importance*, not just a color
   * Colors may change, intent should not

3. **Small set > big messy set**

   * Fewer utilities, used consistently
   * Add slowly, refactor often

---

## 🎨 Color System (CSS Variables)

All core colors live in `:root` so they can be:

* Updated globally
* Themed later
* Reasoned about clearly

```css
:root{
    --p : #35BAAC;
    --p-dark : #2D9F94;
    --rating-color: #f88e0f;
}
```

### Meaning of variables

| Variable         | Meaning              | Usage Rule               |
| ---------------- | -------------------- | ------------------------ |
| `--p`            | Primary brand color  | Backgrounds, highlights  |
| `--p-dark`       | Strong primary       | Text that needs emphasis |
| `--rating-color` | Attention / feedback | Ratings, stars, scores   |

---

## 📝 Text Utilities

Text utilities exist to **avoid repeating color decisions**.

### 1️⃣ `.text-primary-custom`

```css
.text-primary-custom{
    color: var(--p-dark);
}
```

**Intent:**

* Indicates *primary importance*
* Used for headings, labels, or values that matter most

**Use when:**

* You want something to visually feel important
* You’d normally think: *“this should stand out, but not scream”*

**Avoid when:**

* Styling decorative text
* Applying color just because it looks nice

---

### 2️⃣ `.rating-color`

```css
.rating-color{
    color: var(--rating-color);
}
```

**Intent:**

* Represents feedback, score, or evaluation
* Emotion-driven color (attention-grabbing)

**Use when:**

* Star ratings ⭐⭐⭐⭐
* Scores, reviews, warnings, highlights

**Avoid when:**

* General text
* Headings or primary labels

---

## 🚧 Rules for Adding New Utilities

Before adding anything new, ask:

1. **Have I written this style at least twice?**
2. **Is this about intent or just looks?**
3. **Can future-me understand this name instantly?**

If the answer is unclear → **don’t add it yet**.

---

## 🔮 Future Sections (to be added later)

* Spacing utilities
* Layout helpers
* Background utilities
* Border & radius helpers
* Accessibility-focused utilities

(Add only when repetition becomes obvious.)

---

## 🧠 Final Note to Myself

This file is not about perfection.
It’s about **clarity, consistency, and control**.

If something feels messy → document it.
If something feels repeated → abstract it.

This README is my second brain for UI decisions.
