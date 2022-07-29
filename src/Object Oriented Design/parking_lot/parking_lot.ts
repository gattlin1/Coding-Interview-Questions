enum SpotType {
  Compact,
  Normal,
  Large,
  Handicapped,
}
export class Spot {
  sizeSpot: SpotType;
  available: boolean;

  constructor(sizeSpot: SpotType, available = true) {
    this.sizeSpot = sizeSpot;
    this.available = available;
  }
}

export class ParkingGarage {
  private spots: Spot[][];

  constructor(garageLayout: SpotType[][]) {
    // layout is an arr where each index is the number of parking spots at that level
    garageLayout.forEach((level, i) => {
      this.spots.push([]);
      for (let spot = 0; spot < level.length; spot++) {
        this.spots[i].push(new Spot(level[i]));
      }
    });
  }
}
