import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Seller } from '../seller/seller.model';
import { Product } from '../product/product.model';

@ObjectType()
export class Review {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => String, {nullable:true})
    sellerId!: string | null;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => [String], {nullable:true})
    image!: Array<string>;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => String, {nullable:true})
    reply!: string | null;

    @Field(() => Float, {nullable:false})
    rating!: number;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    publish!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Seller, {nullable:true})
    seller?: Seller | null;

    @Field(() => Product, {nullable:false})
    product?: Product;
}
