import { config, fields, singleton } from '@keystatic/core';
export default config({
  storage:
    process.env.NODE_ENV === 'development'
      ? { kind: 'local' }
      : {
        kind: 'github',
        repo: 'byxoff/basket-kgcho-landing'
      },
  singletons: {
    schedule: singleton({
      label: 'Расписание турнира',
      path: 'apps/web/src/content/schedule/',
      format: { data: 'json' },
      schema: {
        showSection: fields.checkbox({ label: 'Отображать блок', defaultValue: true }),
        day1: fields.array(
          fields.object({
            time: fields.text({ label: 'Время' }),
            event: fields.text({ label: 'Событие' }),
          }),
          { label: 'День 1', itemLabel: (props) => `${props.fields.time.value} - ${props.fields.event.value}` }
        ),
        day2: fields.array(
          fields.object({
            time: fields.text({ label: 'Время' }),
            event: fields.text({ label: 'Событие' }),
          }),
          { label: 'День 2', itemLabel: (props) => `${props.fields.time.value} - ${props.fields.event.value}` }
        ),
        day3: fields.array(
          fields.object({
            time: fields.text({ label: 'Время' }),
            event: fields.text({ label: 'Событие' }),
          }),
          { label: 'День 3', itemLabel: (props) => `${props.fields.time.value} - ${props.fields.event.value}` }
        ),
      },
    }),
    shop: singleton({
      label: 'Магазин',
      path: 'apps/web/src/content/shop/',
      format: { data: 'json' },
      schema: {
        showSection: fields.checkbox({ label: 'Отображать блок', defaultValue: true }),
        items: fields.array(
          fields.object({
            title: fields.text({ label: 'Название' }),
            description: fields.text({ label: 'Описание', multiline: true }),
            price: fields.text({ label: 'Цена' }),
            image: fields.image({
              label: 'Изображение',
              directory: 'apps/web/src/assets/content/shop',
              publicPath: '@assets/content/shop'
            }),
            link: fields.text({ label: 'Ссылка', validation: { isRequired: false } }),
          }),
          { label: 'Товары', itemLabel: (props) => props.fields.title.value || 'Новый товар' }
        ),
      },
    }),
    partners: singleton({
      label: 'Партнёры',
      path: 'apps/web/src/content/partners/',
      format: { data: 'json' },
      schema: {
        showSection: fields.checkbox({ label: 'Отображать блок', defaultValue: true }),
        becomePartnerLink: fields.text({ label: 'Ссылка кнопки "Стать партнером"', validation: { isRequired: false } }),
        askQuestionLink: fields.text({ label: 'Ссылка кнопки "Задать вопрос"', validation: { isRequired: false } }),
        items: fields.array(
          fields.object({
            image: fields.image({
              label: 'Логотип',
              directory: 'apps/web/src/assets/content/partners',
              publicPath: '@assets/content/partners'
            }),
            link: fields.text({ label: 'Ссылка', validation: { isRequired: false } }),
            name: fields.text({ label: 'Название', validation: { isRequired: false } }),
          }),
          { label: 'Партнёры', itemLabel: (props) => props.fields.name.value || 'Новый партнёр' }
        ),
      },
    }),
    tournamentSettings: singleton({
      label: 'Настройки турнира',
      path: 'apps/web/src/content/tournament-settings/',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Заголовок (можно html)' }),
        subtitle: fields.text({ label: 'Подзаголовок' }),
        date: fields.text({ label: 'Дата проведения' }),
        location: fields.text({ label: 'Место проведения' }),
        logo: fields.image({
          label: 'Логотип турнира',
          directory: 'apps/web/src/assets/content/settings',
          publicPath: '@assets/content/settings'
        }),
        heroBg: fields.image({
          label: 'Фон Hero секции',
          directory: 'apps/web/src/assets/content/settings',
          publicPath: '@assets/content/settings'
        }),
        ticketLink: fields.text({ label: 'Ссылка на билеты (кнопка)', description: 'Оставьте пустым, чтобы открывался виджет Яндекс.Тикетов' }),
      },
    }),
    contacts: singleton({
      label: 'Контакты',
      path: 'apps/web/src/content/contacts/',
      format: { data: 'json' },
      schema: {
        address: fields.text({ label: 'Адрес', multiline: true }),
        phone1: fields.text({ label: 'Телефон 1' }),
        phone2: fields.text({ label: 'Телефон 2', validation: { isRequired: false } }),
        email: fields.text({ label: 'Email' }),
        vkUrl: fields.text({ label: 'VK URL', validation: { isRequired: false } }),
        tgUrl: fields.text({ label: 'Telegram URL', validation: { isRequired: false } }),
      },
    }),
    media: singleton({
      label: 'Медиа галерея',
      path: 'apps/web/src/content/media/',
      format: { data: 'json' },
      schema: {
        showSection: fields.checkbox({ label: 'Отображать блок', defaultValue: true }),
        videoUrl: fields.text({ label: 'Ссылка на видео (YouTube/VK/Google Drive)', validation: { isRequired: false } }),
        videoPreview: fields.image({
          label: 'Обложка видео (Превью)',
          directory: 'apps/web/src/assets/content/media',
          publicPath: '@assets/content/media',
          description: 'Картинка, которая показывается до нажатия Play'
        }),
        gallery: fields.array(
          fields.object({
            image: fields.image({
              label: 'Изображение',
              directory: 'apps/web/src/assets/content/media',
              publicPath: '@assets/content/media'
            }),
            link: fields.text({ label: 'Ссылка (опционально)', validation: { isRequired: false } }),
            alt: fields.text({ label: 'Описание (alt)', validation: { isRequired: false } }),
          }),
          { label: 'Галерея (5 фото)', itemLabel: (props) => props.fields.alt.value || 'Фото' }
        ),
      },
    }),
    headliners: singleton({
      label: 'Хедлайнеры',
      path: 'apps/web/src/content/headliners/',
      format: { data: 'json' },
      schema: {
        showSection: fields.checkbox({ label: 'Отображать блок', defaultValue: true }),
        title: fields.text({ label: 'Заголовок' }),
        subtitle: fields.text({ label: 'Подзаголовок' }),
        items: fields.array(
          fields.object({
            badge: fields.text({ label: 'Бэйдж (например, 2 день)' }),
            title: fields.text({ label: 'Название события' }),
            description: fields.text({ label: 'Краткое описание', multiline: true }),
            date: fields.text({ label: 'Дата' }),
            time: fields.text({ label: 'Время' }),
            image: fields.image({
              label: 'Изображение',
              directory: 'apps/web/src/assets/content/headliners',
              publicPath: '@assets/content/headliners'
            }),
          }),
          { label: 'События', itemLabel: (props) => props.fields.title.value || 'Новое событие' }
        ),
      },
    }),
    siteSettings: singleton({
      label: 'Скрипты и Метрика',
      path: 'apps/web/src/content/site-settings/',
      format: { data: 'json' },
      schema: {
        headScripts: fields.text({
          label: 'Скрипты в <HEAD>',
          multiline: true,
          description: 'Вставьте сюда код Яндекс.Метрики и другие счетчики'
        }),
        bodyScripts: fields.text({
          label: 'Скрипты в <BODY>',
          multiline: true,
          description: 'Скрипты, которые должны быть перед закрывающим тегом body'
        }),
      },
    }),
  },
});
