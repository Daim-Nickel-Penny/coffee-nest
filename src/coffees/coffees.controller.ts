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
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'All Coffee Names';
    // response.status(200).send('All Coffee Names');
  }
  @Get('flavours')
  findCoffee() {
    return 'Selected Falvours';
  }

  @Get(':id')
  findOne(@Param() params) {
    //Access whole params
    return `Coffee #${params.id} is return`;

    // findOneId(@Param('id') id: string) {
    // //access only id from whole params
    // return `Coffee #${id} is return for UID`;
  }

  /*
   *INFO: Use the http code provided by nest Js
   */
  @Post()
  @HttpCode(HttpStatus.OK)
  create(@Body() body) {
    return body;
  }

  /*
   *INFO: Put replaces the entire resource, thus we need to have the entire object inside the request payload
   */

  /*
   *INFO: Patch only modifies the resource partially
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Coffee #${id} is Updated/Patched`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Coffee #${id} is removed`;
  }
}
