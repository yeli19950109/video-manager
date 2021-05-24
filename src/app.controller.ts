import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody } from '@nestjs/swagger';

@Controller()
export class AppController {
    constructor(private readonly app: AppService) {
    }

    @Post('/test')
    @ApiBody({
        type: Object,
    })
    test(@Body('path') path: string) {
        if (path) {
            return this.app.test(path);
        }
        return;
    }
}
