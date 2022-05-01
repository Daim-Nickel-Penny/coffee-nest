import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get()
  findAll() {
    return this.coffeeService.findAll();
  }
  @Get('flavours')
  findCoffee() {
    return 'Selected Falvours';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }
}

// import {
//   Controller,
//   Get,
//   Param,
//   Post,
//   Body,
//   HttpCode,
//   HttpStatus,
//   Res,
//   Patch,
//   Delete,
//   Query,
// } from '@nestjs/common';
// import { CoffeesService } from './coffees.service';

// @Controller('coffees')
// export class CoffeesController {
//   constructor(private readonly coffeeService: CoffeesService) {}

//   @Get()
//   findAll(@Query() paginationQuery) {
//     const { limit, offset } = paginationQuery;
//     return `All Coffee Names Limit: ${limit} , Offset: ${offset}`;
//     // response.status(200).send('All Coffee Names');
//   }
//   @Get('flavours')
//   findCoffee() {
//     return 'Selected Falvours';
//   }

//   @Get(':id')
//   findOne(@Param() params) {
//     //Access whole params
//     return `Coffee #${params.id} is return`;

//     // findOneId(@Param('id') id: string) {
//     // //access only id from whole params
//     // return `Coffee #${id} is return for UID`;
//   }

//   /*
//    *INFO: Use the http code provided by nest Js
//    */
//   @Post()
//   @HttpCode(HttpStatus.OK)
//   create(@Body() body) {
//     return body;
//   }

//   /*
//    *INFO: Put replaces the entire resource, thus we need to have the entire object inside the request payload
//    */

//   /*
//    *INFO: Patch only modifies the resource partially
//    */
//   @Patch(':id')
//   update(@Param('id') id: string, @Body() body) {
//     return `Coffee #${id} is Updated/Patched`;
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return `Coffee #${id} is removed`;
//   }
// }
