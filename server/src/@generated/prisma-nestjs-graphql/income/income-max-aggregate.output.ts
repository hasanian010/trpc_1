import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class IncomeMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    sellerId?: string;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => Float, {nullable:true})
    income?: number;

    @Field(() => Boolean, {nullable:true})
    paySuccess?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
