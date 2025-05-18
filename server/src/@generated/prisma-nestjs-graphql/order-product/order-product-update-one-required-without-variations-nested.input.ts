import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductCreateWithoutVariationsInput } from './order-product-create-without-variations.input';
import { Type } from 'class-transformer';
import { OrderProductCreateOrConnectWithoutVariationsInput } from './order-product-create-or-connect-without-variations.input';
import { OrderProductUpsertWithoutVariationsInput } from './order-product-upsert-without-variations.input';
import { Prisma } from '@prisma/client';
import { OrderProductWhereUniqueInput } from './order-product-where-unique.input';
import { OrderProductUpdateToOneWithWhereWithoutVariationsInput } from './order-product-update-to-one-with-where-without-variations.input';

@InputType()
export class OrderProductUpdateOneRequiredWithoutVariationsNestedInput {

    @Field(() => OrderProductCreateWithoutVariationsInput, {nullable:true})
    @Type(() => OrderProductCreateWithoutVariationsInput)
    create?: OrderProductCreateWithoutVariationsInput;

    @Field(() => OrderProductCreateOrConnectWithoutVariationsInput, {nullable:true})
    @Type(() => OrderProductCreateOrConnectWithoutVariationsInput)
    connectOrCreate?: OrderProductCreateOrConnectWithoutVariationsInput;

    @Field(() => OrderProductUpsertWithoutVariationsInput, {nullable:true})
    @Type(() => OrderProductUpsertWithoutVariationsInput)
    upsert?: OrderProductUpsertWithoutVariationsInput;

    @Field(() => OrderProductWhereUniqueInput, {nullable:true})
    @Type(() => OrderProductWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderProductWhereUniqueInput, 'id'>;

    @Field(() => OrderProductUpdateToOneWithWhereWithoutVariationsInput, {nullable:true})
    @Type(() => OrderProductUpdateToOneWithWhereWithoutVariationsInput)
    update?: OrderProductUpdateToOneWithWhereWithoutVariationsInput;
}
