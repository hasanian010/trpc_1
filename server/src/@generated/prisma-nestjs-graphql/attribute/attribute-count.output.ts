import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AttributeCount {

    @Field(() => Int, {nullable:false})
    values?: number;

    @Field(() => Int, {nullable:false})
    productAttributes?: number;
}
