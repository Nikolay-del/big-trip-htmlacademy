const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {id: '1', title: 'Upgrade to a business class', price: 120},
      {id: '2', title: 'Child seat', price: 30}
    ]
  },
  {
    type: 'bus',
    offers: [
      {id: '3', title: 'Extra legroom', price: 25},
      {id: '4', title: 'Window seat', price: 10}
    ]
  },
  {
    type: 'train',
    offers: [
      {id: '5', title: 'First class ticket', price: 80},
      {id: '6', title: 'Meal included', price: 15}
    ]
  },
  {
    type: 'ship',
    offers: [
      {id: '7', title: 'Ocean view cabin', price: 200},
      {id: '8', title: 'VIP lounge access', price: 50}
    ]
  },
  {
    type: 'drive',
    offers: [
      {id: '9', title: 'GPS navigation', price: 20},
      {id: '10', title: 'Full tank on pickup', price: 60}
    ]
  },
  {
    type: 'flight',
    offers: [
      {id: '11', title: 'Extra baggage', price: 100},
      {id: '12', title: 'Priority boarding', price: 40}
    ]
  },
  {
    type: 'check-in',
    offers: [
      {id: '13', title: 'Early check-in', price: 50},
      {id: '14', title: 'Late check-out', price: 75}
    ]
  },
  {
    type: 'sightseeing',
    offers: [
      {id: '15', title: 'Guided tour', price: 45},
      {id: '16', title: 'Skip-the-line access', price: 30}
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {id: '17', title: 'Table with a view', price: 25},
      {id: '18', title: 'Tasting menu', price: 70}
    ]
  }
];

const getPointOffers = (idsOffers) => mockOffers.flatMap(({ offers }) => offers.filter(({ id }) => idsOffers.includes(id)));
const getTypeOffers = (typePoint) => {
  const offersType = mockOffers.find(({ type }) => type === typePoint);
  return offersType ? offersType.offers : [];
};

export { getPointOffers, getTypeOffers };
