import internal from "stream";
import {IsEmail, IsNotEmpty, IsNumber, IsString} from 'class-validator';

export default class CreateUserDto{
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
    @IsNumber()
    age: number;
    @IsString()
    region: number;
}

