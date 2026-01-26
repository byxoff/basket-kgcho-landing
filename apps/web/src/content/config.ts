import { defineCollection, z } from 'astro:content';
// Коллекция для расписания турнира
const scheduleCollection = defineCollection({
  type: 'data',
  schema: z.object({
    showSection: z.boolean().optional(),
    day1: z.array(z.object({
      time: z.string(),
      event: z.string(),
    })),
    day2: z.array(z.object({
      time: z.string(),
      event: z.string(),
    })),
  }),
});
// Коллекция для товаров магазина
const shopCollection = defineCollection({
  type: 'data',
  schema: z.object({
    showSection: z.boolean().optional(),
    items: z.array(z.object({
      title: z.string(),
      description: z.string(),
      price: z.string(),
      image: z.string(),
      link: z.string().optional(),
    })),
  }),
});
// Коллекция для партнёров
const partnersCollection = defineCollection({
  type: 'data',
  schema: z.object({
    showSection: z.boolean().optional(),
    items: z.array(z.object({
      image: z.string().optional(),
      link: z.string().optional(),
      name: z.string().optional(),
    })),
  }),
});
// Коллекция для настроек турнира (Hero секция)
const tournamentSettingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.string(),
    location: z.string(),
    logo: z.string().optional(),
    heroBg: z.string().optional(),
  }),
});
// Коллекция для контактов
const contactsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    address: z.string(),
    phone1: z.string(),
    phone2: z.string().optional(),
    email: z.string(),
    vkUrl: z.string().optional(),
    tgUrl: z.string().optional(),
  }),
});
// Коллекция для медиа
const mediaCollection = defineCollection({
  type: 'data',
  schema: z.object({
    showSection: z.boolean().optional(),
    videoUrl: z.string().optional(),
    videoPreview: z.string().optional(),
    gallery: z.array(z.object({
      image: z.string(),
      link: z.string().optional(),
      alt: z.string().optional(),
    })),
  }),
});
// Коллекция для хедлайнеров
const headlinersCollection = defineCollection({
  type: 'data',
  schema: z.object({
    showSection: z.boolean().optional(),
    title: z.string(),
    subtitle: z.string(),
    items: z.array(z.object({
      badge: z.string(),
      title: z.string(),
      description: z.string(),
      date: z.string(),
      time: z.string(),
      image: z.string().optional(),
    })),
  }),
});
export const collections = {
  schedule: scheduleCollection,
  shop: shopCollection,
  partners: partnersCollection,
  tournamentSettings: tournamentSettingsCollection,
  contacts: contactsCollection,
  media: mediaCollection,
  headliners: headlinersCollection,
};
