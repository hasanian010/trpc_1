import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReviewCreateimageInput {

    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}
