import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class IncomeUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    sellerId!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => Float, {nullable:true})
    income?: number;

    @Field(() => Boolean, {nullable:true})
    paySuccess?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
