import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as util from 'util';

const fsAccess = util.promisify(fs.access);
const fsReaddir = util.promisify(fs.readdir);

@Injectable()
export class AppService {
    test(path: string) {
        return fsReaddir(path);
    }
}
