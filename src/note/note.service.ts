import {PrismaClient} from '.prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import {NoteInput} from './Dto/NoteInput';

@Injectable()
export class NoteService extends PrismaClient {

    async Notes():Promise<any> {
        const notes = await this.notes.findMany()
        return notes
    }

    async Note(id: number):Promise<any> {
        const note = await this.notes.findUnique({ where: {id: id} })
        if(!note) throw new NotFoundException('Note Introuvable')
        return note
    }

    async AjoutNote(input: NoteInput):Promise<any> {
        const {title, desc} = input
        const nvNote = await this.notes.create({
            data: {title, desc}
        })
        return nvNote
    }

    async SupprimerNote(id: number):Promise<any> {
        const note = await this.notes.findUnique({ where: {id: id} })
        if(!note) throw new NotFoundException('Note Introuvable')
        await this.notes.delete({
            where: {id: id}
        })
        return "Note Est Supprimè"
    }
    
    async ModifieNote(id: number, input: NoteInput):Promise<any> {
        const {title, desc} = input
        const note = await this.notes.findUnique({ where: {id: id} })
        if(!note) throw new NotFoundException('Note Introuvable')

        const nvNote = await this.notes.update({
            data: {title, desc},
            where: {id: id}
        })
        return nvNote
    }
}
