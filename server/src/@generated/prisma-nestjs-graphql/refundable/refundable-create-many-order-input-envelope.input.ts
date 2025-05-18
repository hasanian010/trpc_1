import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateManyOrderInput } from './refundable-create-many-order.input';
import { Type } from 'class-transformer';

@InputType()
export class RefundableCreateManyOrderInputEnvelope {

    @Field(() => [RefundableCreateManyOrderInput], {nullable:false})
    @Type(() => RefundableCreateManyOrderInput)
    data!: Array<RefundableCreateManyOrderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
