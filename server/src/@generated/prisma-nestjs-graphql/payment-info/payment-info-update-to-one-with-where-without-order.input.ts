import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentInfoWhereInput } from './payment-info-where.input';
import { Type } from 'class-transformer';
import { PaymentInfoUpdateWithoutOrderInput } from './payment-info-update-without-order.input';

@InputType()
export class PaymentInfoUpdateToOneWithWhereWithoutOrderInput {

    @Field(() => PaymentInfoWhereInput, {nullable:true})
    @Type(() => PaymentInfoWhereInput)
    where?: PaymentInfoWhereInput;

    @Field(() => PaymentInfoUpdateWithoutOrderInput, {nullable:false})
    @Type(() => PaymentInfoUpdateWithoutOrderInput)
    data!: PaymentInfoUpdateWithoutOrderInput;
}
