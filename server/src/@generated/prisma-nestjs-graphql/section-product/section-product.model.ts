import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Sections } from '../sections/sections.model';
import { Product } from '../product/product.model';

@ObjectType()
export class SectionProduct {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sectionId!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Sections, {nullable:false})
    section?: Sections;

    @Field(() => Product, {nullable:false})
    product?: Product;
}
