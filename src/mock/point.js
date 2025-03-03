import { EVENT_TYPES } from '../const';

const mockPoints = [
  {
    id: '1',
    basePrice: 1100,
    dateFrom: new Date('2025-02-28T12:30'),
    dateTo: new Date('2025-02-28T14:30'),
    destination: '',
    offers: ['1', '2'],
    isFavorite: true,
    type: EVENT_TYPES[1]
  }
];

export { mockPoints };
