import {Field, InputType} from "@nestjs/graphql";


@InputType()
export class NoteInput {

    @Field(() => String, {nullable: true})
    title: string

    @Field(() => String, {nullable: true})
    desc: string
}