import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'new coffee',
      brand: 'Starbucks',
      flavour: ['bitter'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    /*
     *INFO: The unary plus operator (+) precedes its operand and evaluates to its operand but attempts to convert it into a number,
     *if it isn't already.
     */

    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      //   throw new HttpException(
      //     `Coffe #${id} is not found`,
      //     HttpStatus.NOT_FOUND,
      //   );

      throw new NotFoundException(`Coffe #${id} is not found`);
    }
    return coffee;
  }

  create(CreateCoffeeDto: any) {
    this.coffees.push(CreateCoffeeDto);
    return CreateCoffeeDto;
  }

  update(id: string, updateCoffeeDTO: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //update
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
