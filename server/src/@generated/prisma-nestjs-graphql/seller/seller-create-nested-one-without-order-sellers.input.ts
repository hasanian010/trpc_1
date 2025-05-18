import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateWithoutOrderSellersInput } from './seller-create-without-order-sellers.input';
import { Type } from 'class-transformer';
import { SellerCreateOrConnectWithoutOrderSellersInput } from './seller-create-or-connect-without-order-sellers.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';

@InputType()
export class SellerCreateNestedOneWithoutOrderSellersInput {

    @Field(() => SellerCreateWithoutOrderSellersInput, {nullable:true})
    @Type(() => SellerCreateWithoutOrderSellersInput)
    create?: SellerCreateWithoutOrderSellersInput;

    @Field(() => SellerCreateOrConnectWithoutOrderSellersInput, {nullable:true})
    @Type(() => SellerCreateOrConnectWithoutOrderSellersInput)
    connectOrCreate?: SellerCreateOrConnectWithoutOrderSellersInput;

    @Field(() => SellerWhereUniqueInput, {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    connect?: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;
}
