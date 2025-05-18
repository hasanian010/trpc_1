import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductAttributeCount {

    @Field(() => Int, {nullable:false})
    attributes?: number;

    @Field(() => Int, {nullable:false})
    selectedVariants?: number;

    @Field(() => Int, {nullable:false})
    attributeValues?: number;
}
