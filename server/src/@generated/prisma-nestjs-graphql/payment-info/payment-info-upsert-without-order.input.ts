import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentInfoUpdateWithoutOrderInput } from './payment-info-update-without-order.input';
import { Type } from 'class-transformer';
import { PaymentInfoCreateWithoutOrderInput } from './payment-info-create-without-order.input';
import { PaymentInfoWhereInput } from './payment-info-where.input';

@InputType()
export class PaymentInfoUpsertWithoutOrderInput {

    @Field(() => PaymentInfoUpdateWithoutOrderInput, {nullable:false})
    @Type(() => PaymentInfoUpdateWithoutOrderInput)
    update!: PaymentInfoUpdateWithoutOrderInput;

    @Field(() => PaymentInfoCreateWithoutOrderInput, {nullable:false})
    @Type(() => PaymentInfoCreateWithoutOrderInput)
    create!: PaymentInfoCreateWithoutOrderInput;

    @Field(() => PaymentInfoWhereInput, {nullable:true})
    @Type(() => PaymentInfoWhereInput)
    where?: PaymentInfoWhereInput;
}
