import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { Type } from 'class-transformer';
import { SellerCreateWithoutWithdrawsInput } from './seller-create-without-withdraws.input';

@InputType()
export class SellerCreateOrConnectWithoutWithdrawsInput {

    @Field(() => SellerWhereUniqueInput, {nullable:false})
    @Type(() => SellerWhereUniqueInput)
    where!: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => SellerCreateWithoutWithdrawsInput, {nullable:false})
    @Type(() => SellerCreateWithoutWithdrawsInput)
    create!: SellerCreateWithoutWithdrawsInput;
}
