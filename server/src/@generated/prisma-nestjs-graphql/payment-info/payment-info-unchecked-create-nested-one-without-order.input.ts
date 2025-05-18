import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentInfoCreateWithoutOrderInput } from './payment-info-create-without-order.input';
import { Type } from 'class-transformer';
import { PaymentInfoCreateOrConnectWithoutOrderInput } from './payment-info-create-or-connect-without-order.input';
import { Prisma } from '@prisma/client';
import { PaymentInfoWhereUniqueInput } from './payment-info-where-unique.input';

@InputType()
export class PaymentInfoUncheckedCreateNestedOneWithoutOrderInput {

    @Field(() => PaymentInfoCreateWithoutOrderInput, {nullable:true})
    @Type(() => PaymentInfoCreateWithoutOrderInput)
    create?: PaymentInfoCreateWithoutOrderInput;

    @Field(() => PaymentInfoCreateOrConnectWithoutOrderInput, {nullable:true})
    @Type(() => PaymentInfoCreateOrConnectWithoutOrderInput)
    connectOrCreate?: PaymentInfoCreateOrConnectWithoutOrderInput;

    @Field(() => PaymentInfoWhereUniqueInput, {nullable:true})
    @Type(() => PaymentInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<PaymentInfoWhereUniqueInput, 'id' | 'orderId'>;
}
