import {Field, ID, ObjectType} from "@nestjs/graphql";


@ObjectType()
export class Note {
    @Field(() => ID)
    id: number

    @Field(() => String)
    title: string

    @Field(() => String)
    desc: string
}