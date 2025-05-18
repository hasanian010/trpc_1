import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductCreateWithoutVariationsInput } from './order-product-create-without-variations.input';
import { Type } from 'class-transformer';
import { OrderProductCreateOrConnectWithoutVariationsInput } from './order-product-create-or-connect-without-variations.input';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';

@InputType()
export class OrderProductCreateNestedOneWithoutVariationsInput {

    @Field(() => OrderProductCreateWithoutVariationsInput, {nullable:true})
    @Type(() => OrderProductCreateWithoutVariationsInput)
    create?: OrderProductCreateWithoutVariationsInput;

    @Field(() => OrderProductCreateOrConnectWithoutVariationsInput, {nullable:true})
    @Type(() => OrderProductCreateOrConnectWithoutVariationsInput)
    connectOrCreate?: OrderProductCreateOrConnectWithoutVariationsInput;

    @Field(() => OrderProductWhereUniqueInput, {nullable:true})
    @Type(() => OrderProductWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>;
}
