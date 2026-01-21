# UI Components Library

Готовая библиотека компонентов для создания "дорогого" вида лендинга.

## Установленные библиотеки

- **Framer Motion** - анимации
- **GSAP** - scroll-анимации и сложные эффекты
- **Lucide React** - иконки
- **clsx + tailwind-merge** - утилиты для классов

## Компоненты

### BentoCard
Карточка с blur-эффектом и hover-анимацией.

```tsx
<BentoCard client:load>
  <h3>Заголовок</h3>
  <p>Описание</p>
</BentoCard>
```

### ScrollReveal
Компонент для анимации появления при скролле (GSAP).

```tsx
<ScrollReveal client:load delay={0.2}>
  <div>Контент</div>
</ScrollReveal>
```

### MagicBorder
Анимированный градиентный бордер.

```tsx
<MagicBorder client:load>
  <div>Контент</div>
</MagicBorder>
```

## Использование в Astro

Все React компоненты должны использоваться с директивой `client:load`:

```astro
---
import BentoCard from "../ui/BentoCard.tsx"
---

<BentoCard client:load>
  Контент
</BentoCard>
```
