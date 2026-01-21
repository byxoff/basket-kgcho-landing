#!/bin/bash

# Скрипт для переключения тем в My Peak Ecosystem
# Использование: ./scripts/switch-theme.sh <theme-name>

THEME_NAME=$1

if [ -z "$THEME_NAME" ]; then
  echo "❌ Ошибка: Укажи название темы"
  echo "Использование: ./scripts/switch-theme.sh <theme-name>"
  echo ""
  echo "Доступные темы:"
  ls -1 packages/themes/
  exit 1
fi

THEME_PATH="packages/themes/$THEME_NAME"

if [ ! -d "$THEME_PATH" ]; then
  echo "❌ Ошибка: Тема '$THEME_NAME' не найдена в $THEME_PATH"
  echo ""
  echo "Доступные темы:"
  ls -1 packages/themes/
  exit 1
fi

echo "🔄 Переключаю тему на: $THEME_NAME"

# Удаляем текущий apps/web
rm -rf apps/web

# Копируем новую тему
cp -r "$THEME_PATH" apps/web

# Удаляем .git если есть
rm -rf apps/web/.git

# Обновляем package.json имя
sed -i '' 's/"name": ".*"/"name": "web"/' apps/web/package.json 2>/dev/null || \
sed -i 's/"name": ".*"/"name": "web"/' apps/web/package.json

# Обновляем dev скрипт с портом 5000
sed -i '' 's/"dev": "astro dev[^"]*"/"dev": "astro dev --port 5000"/' apps/web/package.json 2>/dev/null || \
sed -i 's/"dev": "astro dev[^"]*"/"dev": "astro dev --port 5000"/' apps/web/package.json

# Устанавливаем зависимости
echo "📦 Устанавливаю зависимости..."
pnpm install --no-frozen-lockfile

echo "✅ Готово! Тема '$THEME_NAME' активирована."
echo "🚀 Запусти: pnpm dev:web"
