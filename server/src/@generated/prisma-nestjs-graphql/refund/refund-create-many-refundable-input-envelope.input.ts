import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundCreateManyRefundableInput } from './refund-create-many-refundable.input';
import { Type } from 'class-transformer';

@InputType()
export class RefundCreateManyRefundableInputEnvelope {

    @Field(() => [RefundCreateManyRefundableInput], {nullable:false})
    @Type(() => RefundCreateManyRefundableInput)
    data!: Array<RefundCreateManyRefundableInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
