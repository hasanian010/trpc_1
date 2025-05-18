import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateWithoutWithdrawsInput } from './seller-create-without-withdraws.input';
import { Type } from 'class-transformer';
import { SellerCreateOrConnectWithoutWithdrawsInput } from './seller-create-or-connect-without-withdraws.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';

@InputType()
export class SellerCreateNestedOneWithoutWithdrawsInput {

    @Field(() => SellerCreateWithoutWithdrawsInput, {nullable:true})
    @Type(() => SellerCreateWithoutWithdrawsInput)
    create?: SellerCreateWithoutWithdrawsInput;

    @Field(() => SellerCreateOrConnectWithoutWithdrawsInput, {nullable:true})
    @Type(() => SellerCreateOrConnectWithoutWithdrawsInput)
    connectOrCreate?: SellerCreateOrConnectWithoutWithdrawsInput;

    @Field(() => SellerWhereUniqueInput, {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    connect?: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;
}
