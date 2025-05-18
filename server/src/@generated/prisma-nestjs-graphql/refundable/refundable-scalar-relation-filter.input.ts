import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableWhereInput } from './refundable-where.input';

@InputType()
export class RefundableScalarRelationFilter {

    @Field(() => RefundableWhereInput, {nullable:true})
    is?: RefundableWhereInput;

    @Field(() => RefundableWhereInput, {nullable:true})
    isNot?: RefundableWhereInput;
}
