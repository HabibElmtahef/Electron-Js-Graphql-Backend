import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {NoteInput} from './Dto/NoteInput';
import {Note} from './Note';
import {NoteService} from './note.service';

@Resolver()
export class NoteResolver {
    constructor(private readonly service: NoteService) {}

    @Query(() => [Note])
    notes() {
        return this.service.Notes()
    }

    @Query(() => Note)
    note(@Args('id') id: number) {
        return this.service.Note(id)
    }

    @Mutation(() => Note)
    ajoutNote(@Args('input') input: NoteInput) {
        return this.service.AjoutNote(input)
    }

    @Query(() => String)
    supprimerNote(@Args('id') id: number) {
        return this.service.SupprimerNote(id)
    }

    @Mutation(() => Note) 
    modifierNote(@Args('id') id: number, @Args('input') input: NoteInput) {
        return this.service.ModifieNote(id, input)
    }
}
