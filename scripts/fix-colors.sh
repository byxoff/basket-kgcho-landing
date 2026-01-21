#!/bin/bash

# Скрипт для замены хардкодных OKLCH значений на Tailwind классы

cd apps/web/src/components/landing

for file in *.astro; do
  if [ -f "$file" ]; then
    # Заменяем все OKLCH значения на классы
    sed -i '' \
      -e 's/text-\[oklch(0\.65_0\.3_290)\]/text-aurora-purple/g' \
      -e 's/bg-\[oklch(0\.65_0\.3_290)\]/bg-aurora-purple/g' \
      -e 's/border-\[oklch(0\.65_0\.3_290)\]/border-aurora-purple/g' \
      -e 's/text-\[oklch(0\.3958_0\.2481_266\.82)\]/text-primary/g' \
      -e 's/bg-\[oklch(0\.3958_0\.2481_266\.82)\]/bg-primary/g' \
      -e 's/border-\[oklch(0\.3958_0\.2481_266\.82)\]/border-primary/g' \
      -e 's/text-\[oklch(0\.627_0\.194_28\.918)\]/text-destructive-red/g' \
      -e 's/bg-\[oklch(0\.627_0\.194_28\.918)\]/bg-destructive-red/g' \
      -e 's/border-\[oklch(0\.627_0\.194_28\.918)\]/border-destructive-red/g' \
      -e 's/text-\[oklch(0\.60_0\.20_250)\]/text-aurora-blue/g' \
      -e 's/bg-\[oklch(0\.60_0\.20_250)\]/bg-aurora-blue/g' \
      -e 's/text-gray-300/text-foreground\/70/g' \
      -e 's/text-gray-400/text-foreground\/50/g' \
      -e 's/text-gray-500/text-foreground\/40/g' \
      -e 's/bg-gray-900\/50/bg-card/g' \
      -e 's/border-gray-800/border-border/g' \
      "$file"
    echo "✅ Обновлен: $file"
  fi
done

echo "🎨 Все цвета заменены на Tailwind классы!"
