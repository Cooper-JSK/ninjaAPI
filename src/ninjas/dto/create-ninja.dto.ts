import { MinLength , IsEnum} from 'class-validator';

export class CreateNinjaDto {
    @MinLength(3)
    name: string;

    @IsEnum(['stars', 'swords'] , {message: 'Please user correct weapon'})
    weapon: 'stars' |'swords';
}