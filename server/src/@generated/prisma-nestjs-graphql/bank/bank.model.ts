import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Seller } from '../seller/seller.model';

@ObjectType()
export class Bank {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    accNumber!: string;

    @Field(() => String, {nullable:false})
    routing!: string;

    @Field(() => String, {nullable:false})
    bankName!: string;

    @Field(() => String, {nullable:false})
    branch!: string;

    @Field(() => String, {nullable:true})
    sellerId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Seller, {nullable:true})
    seller?: Seller | null;
}
