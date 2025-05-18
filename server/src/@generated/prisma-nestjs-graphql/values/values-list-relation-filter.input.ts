import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ValuesWhereInput } from './values-where.input';

@InputType()
export class ValuesListRelationFilter {

    @Field(() => ValuesWhereInput, {nullable:true})
    every?: ValuesWhereInput;

    @Field(() => ValuesWhereInput, {nullable:true})
    some?: ValuesWhereInput;

    @Field(() => ValuesWhereInput, {nullable:true})
    none?: ValuesWhereInput;
}
