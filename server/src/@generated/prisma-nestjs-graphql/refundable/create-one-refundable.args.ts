import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundableCreateInput } from './refundable-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRefundableArgs {

    @Field(() => RefundableCreateInput, {nullable:false})
    @Type(() => RefundableCreateInput)
    data!: RefundableCreateInput;
}
