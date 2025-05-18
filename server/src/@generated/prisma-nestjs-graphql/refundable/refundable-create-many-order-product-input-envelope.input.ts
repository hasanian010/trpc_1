import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateManyOrderProductInput } from './refundable-create-many-order-product.input';
import { Type } from 'class-transformer';

@InputType()
export class RefundableCreateManyOrderProductInputEnvelope {

    @Field(() => [RefundableCreateManyOrderProductInput], {nullable:false})
    @Type(() => RefundableCreateManyOrderProductInput)
    data!: Array<RefundableCreateManyOrderProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
