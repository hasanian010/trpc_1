import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundCreateInput } from './refund-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRefundArgs {

    @Field(() => RefundCreateInput, {nullable:false})
    @Type(() => RefundCreateInput)
    data!: RefundCreateInput;
}
