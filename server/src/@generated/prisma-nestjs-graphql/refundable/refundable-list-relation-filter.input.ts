import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableWhereInput } from './refundable-where.input';

@InputType()
export class RefundableListRelationFilter {

    @Field(() => RefundableWhereInput, {nullable:true})
    every?: RefundableWhereInput;

    @Field(() => RefundableWhereInput, {nullable:true})
    some?: RefundableWhereInput;

    @Field(() => RefundableWhereInput, {nullable:true})
    none?: RefundableWhereInput;
}
