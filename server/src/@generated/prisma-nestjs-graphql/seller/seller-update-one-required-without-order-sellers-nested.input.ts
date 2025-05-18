import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateWithoutOrderSellersInput } from './seller-create-without-order-sellers.input';
import { Type } from 'class-transformer';
import { SellerCreateOrConnectWithoutOrderSellersInput } from './seller-create-or-connect-without-order-sellers.input';
import { SellerUpsertWithoutOrderSellersInput } from './seller-upsert-without-order-sellers.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { SellerUpdateToOneWithWhereWithoutOrderSellersInput } from './seller-update-to-one-with-where-without-order-sellers.input';

@InputType()
export class SellerUpdateOneRequiredWithoutOrderSellersNestedInput {

    @Field(() => SellerCreateWithoutOrderSellersInput, {nullable:true})
    @Type(() => SellerCreateWithoutOrderSellersInput)
    create?: SellerCreateWithoutOrderSellersInput;

    @Field(() => SellerCreateOrConnectWithoutOrderSellersInput, {nullable:true})
    @Type(() => SellerCreateOrConnectWithoutOrderSellersInput)
    connectOrCreate?: SellerCreateOrConnectWithoutOrderSellersInput;

    @Field(() => SellerUpsertWithoutOrderSellersInput, {nullable:true})
    @Type(() => SellerUpsertWithoutOrderSellersInput)
    upsert?: SellerUpsertWithoutOrderSellersInput;

    @Field(() => SellerWhereUniqueInput, {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    connect?: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => SellerUpdateToOneWithWhereWithoutOrderSellersInput, {nullable:true})
    @Type(() => SellerUpdateToOneWithWhereWithoutOrderSellersInput)
    update?: SellerUpdateToOneWithWhereWithoutOrderSellersInput;
}
