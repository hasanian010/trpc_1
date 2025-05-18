import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateWithoutProductsInput } from './seller-create-without-products.input';
import { Type } from 'class-transformer';
import { SellerCreateOrConnectWithoutProductsInput } from './seller-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';

@InputType()
export class SellerCreateNestedOneWithoutProductsInput {

    @Field(() => SellerCreateWithoutProductsInput, {nullable:true})
    @Type(() => SellerCreateWithoutProductsInput)
    create?: SellerCreateWithoutProductsInput;

    @Field(() => SellerCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => SellerCreateOrConnectWithoutProductsInput)
    connectOrCreate?: SellerCreateOrConnectWithoutProductsInput;

    @Field(() => SellerWhereUniqueInput, {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    connect?: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;
}
