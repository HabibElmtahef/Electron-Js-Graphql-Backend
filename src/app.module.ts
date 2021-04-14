import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';
import {GraphQLModule} from '@nestjs/graphql';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      debug: false,
    }),
    NoteModule
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
