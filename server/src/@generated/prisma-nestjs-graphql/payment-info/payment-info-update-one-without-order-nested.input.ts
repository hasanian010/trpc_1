import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentInfoCreateWithoutOrderInput } from './payment-info-create-without-order.input';
import { Type } from 'class-transformer';
import { PaymentInfoCreateOrConnectWithoutOrderInput } from './payment-info-create-or-connect-without-order.input';
import { PaymentInfoUpsertWithoutOrderInput } from './payment-info-upsert-without-order.input';
import { PaymentInfoWhereInput } from './payment-info-where.input';
import { Prisma } from '@prisma/client';
import { PaymentInfoWhereUniqueInput } from './payment-info-where-unique.input';
import { PaymentInfoUpdateToOneWithWhereWithoutOrderInput } from './payment-info-update-to-one-with-where-without-order.input';

@InputType()
export class PaymentInfoUpdateOneWithoutOrderNestedInput {

    @Field(() => PaymentInfoCreateWithoutOrderInput, {nullable:true})
    @Type(() => PaymentInfoCreateWithoutOrderInput)
    create?: PaymentInfoCreateWithoutOrderInput;

    @Field(() => PaymentInfoCreateOrConnectWithoutOrderInput, {nullable:true})
    @Type(() => PaymentInfoCreateOrConnectWithoutOrderInput)
    connectOrCreate?: PaymentInfoCreateOrConnectWithoutOrderInput;

    @Field(() => PaymentInfoUpsertWithoutOrderInput, {nullable:true})
    @Type(() => PaymentInfoUpsertWithoutOrderInput)
    upsert?: PaymentInfoUpsertWithoutOrderInput;

    @Field(() => PaymentInfoWhereInput, {nullable:true})
    @Type(() => PaymentInfoWhereInput)
    disconnect?: PaymentInfoWhereInput;

    @Field(() => PaymentInfoWhereInput, {nullable:true})
    @Type(() => PaymentInfoWhereInput)
    delete?: PaymentInfoWhereInput;

    @Field(() => PaymentInfoWhereUniqueInput, {nullable:true})
    @Type(() => PaymentInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<PaymentInfoWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => PaymentInfoUpdateToOneWithWhereWithoutOrderInput, {nullable:true})
    @Type(() => PaymentInfoUpdateToOneWithWhereWithoutOrderInput)
    update?: PaymentInfoUpdateToOneWithWhereWithoutOrderInput;
}
