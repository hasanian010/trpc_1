import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentInfoUpdateManyMutationInput } from './payment-info-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PaymentInfoWhereInput } from './payment-info-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPaymentInfoArgs {

    @Field(() => PaymentInfoUpdateManyMutationInput, {nullable:false})
    @Type(() => PaymentInfoUpdateManyMutationInput)
    data!: PaymentInfoUpdateManyMutationInput;

    @Field(() => PaymentInfoWhereInput, {nullable:true})
    @Type(() => PaymentInfoWhereInput)
    where?: PaymentInfoWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
