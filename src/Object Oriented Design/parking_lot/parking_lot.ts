export enum SpotType {
  Compact,
  Normal,
  Large,
  Handicapped,
}

export class Spot {
  static spots = 0;
  spotNum: number;
  sizeSpot: SpotType;
  available: boolean;

  constructor(sizeSpot: SpotType, available = true) {
    this.spotNum = Spot.spots;
    this.sizeSpot = sizeSpot;
    this.available = available;

    Spot.spots++;
  }
}

export class GarageLevel {
  static levels = 1;
  private spots: Spot[];
  level: number;

  constructor(spots: SpotType[]) {
    this.spots = [];
    this.level = GarageLevel.levels;

    spots.forEach((spot) => {
      this.spots.push(new Spot(spot));
    });

    GarageLevel.levels++;
  }
}

export class ParkingGarage {
  private levels: GarageLevel[];

  constructor(garageLayout: SpotType[][]) {
    this.levels = [];

    // layout is an arr where each index is the number of parking spots at that level
    garageLayout.forEach((level) => {
      this.levels.push(new GarageLevel(level));
    });
  }

  public allocateSpot() {}
}
