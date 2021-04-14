import { Query, Resolver } from '@nestjs/graphql';
import {AppService} from './app.service';

@Resolver()
export class AppResolver {
    constructor(private readonly service: AppService) {}

    @Query(() => String)
    getHello() {
        return this.service.getHello()
    }
}
