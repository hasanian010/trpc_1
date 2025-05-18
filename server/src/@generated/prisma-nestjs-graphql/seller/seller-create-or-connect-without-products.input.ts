import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { Type } from 'class-transformer';
import { SellerCreateWithoutProductsInput } from './seller-create-without-products.input';

@InputType()
export class SellerCreateOrConnectWithoutProductsInput {

    @Field(() => SellerWhereUniqueInput, {nullable:false})
    @Type(() => SellerWhereUniqueInput)
    where!: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => SellerCreateWithoutProductsInput, {nullable:false})
    @Type(() => SellerCreateWithoutProductsInput)
    create!: SellerCreateWithoutProductsInput;
}
