import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundWhereInput } from './refund-where.input';

@InputType()
export class RefundListRelationFilter {

    @Field(() => RefundWhereInput, {nullable:true})
    every?: RefundWhereInput;

    @Field(() => RefundWhereInput, {nullable:true})
    some?: RefundWhereInput;

    @Field(() => RefundWhereInput, {nullable:true})
    none?: RefundWhereInput;
}
