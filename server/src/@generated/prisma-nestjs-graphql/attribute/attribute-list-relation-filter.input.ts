import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttributeWhereInput } from './attribute-where.input';

@InputType()
export class AttributeListRelationFilter {

    @Field(() => AttributeWhereInput, {nullable:true})
    every?: AttributeWhereInput;

    @Field(() => AttributeWhereInput, {nullable:true})
    some?: AttributeWhereInput;

    @Field(() => AttributeWhereInput, {nullable:true})
    none?: AttributeWhereInput;
}
