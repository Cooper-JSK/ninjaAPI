import { Controller, Get, Post, Put, Delete, Param, Query, Body, NotFoundException, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {

    constructor (private readonly ninjasService: NinjasService){}

    //GET /ninjas?type=fast  --> []
    @Get()
    getNinjas(@Query('weapon') weapon: 'stars' | 'sword') {
        
        return this.ninjasService.getNinjas(weapon);
    }

    @Get(':id') 
    getOneNinja(@Param('id', ParseIntPipe) id: number) {
        try {
            return this.ninjasService.getNinja(id);
            
        } catch (error) {
            throw new NotFoundException();
        }
        
    }

    @Post() 
    createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
        return {
            name: createNinjaDto.name
        };
    }

    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto : UpdateNinjaDto) {
        return {
            id,
            name: updateNinjaDto
        };
    }

    @Delete(':id')
    deleteNinja(@Param('id') id: string) {
        return {
            id
        };
    }
}


