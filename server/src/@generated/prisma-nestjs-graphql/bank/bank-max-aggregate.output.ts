import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BankMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    accNumber?: string;

    @Field(() => String, {nullable:true})
    routing?: string;

    @Field(() => String, {nullable:true})
    bankName?: string;

    @Field(() => String, {nullable:true})
    branch?: string;

    @Field(() => String, {nullable:true})
    sellerId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
