import { Body, Controller, Get, Header, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { info } from 'console';
import { Request, query } from "express"
import { Observable, of } from 'rxjs';
import CreateUserDto from '../../models/user.class'

@Controller('users')
export class UsersController {
    @Get()
    findAll(): string {
        return 'Admins'
    }

    @Get('/stream')
    async findByStream(@Query("region") region:string): Promise<any[]> {
        return []
    }
   
    @Get('/stream/observable/:id')
    findByStreamID(@Param("id") id:string): Observable<any[]> {
        return of([])
    }

    @Get(':id')
    findByID(@Param() params: any): string {
        console.log(params.id)
        return `admin - batch: #${params.id}`
    }

    @Post()
    @Header("Cache-Control", 'none')
    create(@Req() request: Request, @Body() createUserDto: CreateUserDto): string {
        console.log("create user controller")
        console.log("body: ", createUserDto)
        return 'created new user'
    }

    @Get('info')
    @Redirect("https://github.com/AndrewAlizaga/eog_rest_service", 302)
    getInfo(@Query('version') version: string){
        
        if (version && version == '2'){
            return {url: "https://github.com/AndrewAlizaga/eog_web_scrapping_service", "statusCode": 203}
        }
    }
}
