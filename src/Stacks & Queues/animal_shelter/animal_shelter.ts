import { Node } from 'src/Linked Lists/util';

export enum ShelterAnimal {
  Cat,
  Dog,
}

export class AnimalShelter {
  private first: Node<ShelterAnimal> | null;
  private last: Node<ShelterAnimal> | null;

  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(animal: ShelterAnimal) {
    const newAnimal = new Node(animal);

    if (this.last != null) {
      this.last.next = newAnimal;
    }
    this.last = newAnimal;

    if (this.first === null) {
      this.first = this.last;
    }
  }

  dequeueAny(): ShelterAnimal | null {
    if (!this.first) return null;

    const oldestAnimal = this.first.val;
    this.first = this.first.next;

    if (!this.first) {
      this.last = null;
    }

    return oldestAnimal ? oldestAnimal : null;
  }

  dequeueDog(): ShelterAnimal | null {
    return this.dequeueSpecified(ShelterAnimal.Dog);
  }

  dequeueCat(): ShelterAnimal | null {
    return this.dequeueSpecified(ShelterAnimal.Cat);
  }

  private dequeueSpecified(animalType: ShelterAnimal): ShelterAnimal | null {
    if (!this.first) return null;
    let oldestAnimal = null;

    // Handles if the first item is the animal we want
    if (this.first.val === animalType) {
      oldestAnimal = this.first.val;
      this.first = this.first.next;

      if (this.first === null) {
        this.last = null;
      }

      return oldestAnimal;
    }

    // Handles if the desired animal is in the list
    let prev: Node<ShelterAnimal> | null = this.first;
    let curr = this.first?.next;
    while (curr && prev) {
      if (curr.val === animalType) {
        oldestAnimal = curr.val;
        prev.next = curr.next;

        if (curr === this.last) {
          this.last = prev;
        }

        break;
      }

      prev = prev.next;
      curr = curr.next;
    }

    return oldestAnimal;
  }
}
