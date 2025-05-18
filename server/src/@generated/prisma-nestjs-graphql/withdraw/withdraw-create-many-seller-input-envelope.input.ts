import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawCreateManySellerInput } from './withdraw-create-many-seller.input';
import { Type } from 'class-transformer';

@InputType()
export class WithdrawCreateManySellerInputEnvelope {

    @Field(() => [WithdrawCreateManySellerInput], {nullable:false})
    @Type(() => WithdrawCreateManySellerInput)
    data!: Array<WithdrawCreateManySellerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
