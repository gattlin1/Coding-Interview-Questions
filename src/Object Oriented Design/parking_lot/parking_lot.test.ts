import { SpotType, ParkingGarage } from './parking_lot';

it('creates a parking garage', () => {
  const garage = new ParkingGarage([]);
  expect(garage).toBeDefined();
});

it('creates a layout of parking spots from specifications', () => {
  const spots = [[SpotType.Compact, SpotType.Handicapped], [SpotType.Large]];

  const garage = new ParkingGarage(spots);
  expect(garage).toBeDefined();
});
