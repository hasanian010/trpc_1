import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttributeWhereInput } from './attribute-where.input';

@InputType()
export class AttributeScalarRelationFilter {

    @Field(() => AttributeWhereInput, {nullable:true})
    is?: AttributeWhereInput;

    @Field(() => AttributeWhereInput, {nullable:true})
    isNot?: AttributeWhereInput;
}
