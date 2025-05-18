import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class OrderSellerMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    sellerId?: string;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => Float, {nullable:true})
    price?: number;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:true})
    cancelBy?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
