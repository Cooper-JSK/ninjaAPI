import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Injectable()
export class NinjasService {
    private ninjas = [
        {id: 0, name: 'ninjaA', weapon: 'stars'},
        {id: 1, name: 'ninjaB', weapon: 'sword'},
        {id: 2, name: 'ninjaC', weapon: 'shield'}
    ];

    getNinjas(weapon?: 'stars' | 'sword') {
        if(weapon) {
            return this.ninjas.filter((ninja) => ninja.weapon === weapon);
        }

        return this.ninjas;
    }

    getNinja(id: number) {
        const ninja = this.ninjas.find((ninja) => ninja.id === id);

        if(!ninja) {
            throw new Error('ninja not found');
        }

        return ninja;
    }

    createNinja(createNinjaDto: CreateNinjaDto){
        const newninja = {
            ...createNinjaDto,
            id: Date.now()
        }
        this.ninjas.push(newninja);

        return newninja;
    }
}
