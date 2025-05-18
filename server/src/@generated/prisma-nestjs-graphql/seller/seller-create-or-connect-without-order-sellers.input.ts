import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { Type } from 'class-transformer';
import { SellerCreateWithoutOrderSellersInput } from './seller-create-without-order-sellers.input';

@InputType()
export class SellerCreateOrConnectWithoutOrderSellersInput {

    @Field(() => SellerWhereUniqueInput, {nullable:false})
    @Type(() => SellerWhereUniqueInput)
    where!: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => SellerCreateWithoutOrderSellersInput, {nullable:false})
    @Type(() => SellerCreateWithoutOrderSellersInput)
    create!: SellerCreateWithoutOrderSellersInput;
}
