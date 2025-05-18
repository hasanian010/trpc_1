import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateManySellerInput } from './refundable-create-many-seller.input';
import { Type } from 'class-transformer';

@InputType()
export class RefundableCreateManySellerInputEnvelope {

    @Field(() => [RefundableCreateManySellerInput], {nullable:false})
    @Type(() => RefundableCreateManySellerInput)
    data!: Array<RefundableCreateManySellerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
