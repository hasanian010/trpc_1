import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { FlashCount } from './flash-count.output';

@ObjectType()
export class Flash {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => String, {nullable:true})
    thumb!: string | null;

    @Field(() => Date, {nullable:false})
    start!: Date;

    @Field(() => Date, {nullable:false})
    expires!: Date;

    @Field(() => String, {nullable:false})
    discount!: string;

    @Field(() => String, {nullable:false})
    discountUnit!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => FlashCount, {nullable:false})
    _count?: FlashCount;
}
