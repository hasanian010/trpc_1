import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Values } from '../values/values.model';
import { ProductAttribute } from '../product-attribute/product-attribute.model';
import { AttributeCount } from './attribute-count.output';

@ObjectType()
export class Attribute {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Values], {nullable:true})
    values?: Array<Values>;

    @Field(() => [ProductAttribute], {nullable:true})
    productAttributes?: Array<ProductAttribute>;

    @Field(() => AttributeCount, {nullable:false})
    _count?: AttributeCount;
}
