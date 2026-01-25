import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'development'
      ? { kind: 'local' }
      : {
        kind: 'github',
        repo: 'mvkamyshev/basket-kgcho-landing'
      },
  singletons: {
    schedule: singleton({
      label: 'Расписание турнира',
      path: 'src/content/schedule/',
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
      },
    }),
    shop: singleton({
      label: 'Магазин',
      path: 'src/content/shop/',
      format: { data: 'json' },
      schema: {
        showSection: fields.checkbox({ label: 'Отображать блок', defaultValue: true }),
        items: fields.array(
          fields.object({
            title: fields.text({ label: 'Название' }),
            description: fields.text({ label: 'Описание', multiline: true }),
            price: fields.text({ label: 'Цена' }),
            image: fields.text({ label: 'Изображение (путь)' }),
            link: fields.text({ label: 'Ссылка', validation: { isRequired: false } }),
          }),
          { label: 'Товары', itemLabel: (props) => props.fields.title.value || 'Новый товар' }
        ),
      },
    }),
    partners: singleton({
      label: 'Партнёры',
      path: 'src/content/partners/',
      format: { data: 'json' },
      schema: {
        showSection: fields.checkbox({ label: 'Отображать блок', defaultValue: true }),
        items: fields.array(
          fields.object({
            image: fields.text({ label: 'Изображение (путь)', validation: { isRequired: false } }),
            link: fields.text({ label: 'Ссылка', validation: { isRequired: false } }),
            name: fields.text({ label: 'Название', validation: { isRequired: false } }),
          }),
          { label: 'Партнёры', itemLabel: (props) => props.fields.name.value || 'Новый партнёр' }
        ),
      },
    }),
    tournamentSettings: singleton({
      label: 'Настройки турнира',
      path: 'src/content/tournament-settings/',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Заголовок' }),
        subtitle: fields.text({ label: 'Подзаголовок' }),
        date: fields.text({ label: 'Дата проведения' }),
        location: fields.text({ label: 'Место проведения' }),
        logo: fields.text({ label: 'Логотип (путь)', validation: { isRequired: false } }),
        heroBg: fields.text({ label: 'Фон Hero (путь)', validation: { isRequired: false } }),
      },
    }),
    contacts: singleton({
      label: 'Контакты',
      path: 'src/content/contacts/',
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
      path: 'src/content/media/',
      format: { data: 'json' },
      schema: {
        showSection: fields.checkbox({ label: 'Отображать блок', defaultValue: true }),
        videoUrl: fields.text({ label: 'Ссылка на видео', validation: { isRequired: false } }),
        gallery: fields.array(
          fields.object({
            image: fields.text({ label: 'Изображение (путь)' }),
            link: fields.text({ label: 'Ссылка (опционально)', validation: { isRequired: false } }),
            alt: fields.text({ label: 'Описание (alt)', validation: { isRequired: false } }),
          }),
          { label: 'Галерея (5 фото)', itemLabel: (props) => props.fields.alt.value || 'Фото' }
        ),
      },
    }),
    headliners: singleton({
      label: 'Хедлайнеры',
      path: 'src/content/headliners/',
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
            image: fields.text({ label: 'Изображение (путь)', validation: { isRequired: false } }),
          }),
          { label: 'События', itemLabel: (props) => props.fields.title.value || 'Новое событие' }
        ),
      },
    }),
  },
});
