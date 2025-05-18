import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateManyProductInput } from './refundable-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class RefundableCreateManyProductInputEnvelope {

    @Field(() => [RefundableCreateManyProductInput], {nullable:false})
    @Type(() => RefundableCreateManyProductInput)
    data!: Array<RefundableCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
