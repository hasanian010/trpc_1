import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { Type } from 'class-transformer';
import { SellerCreateWithoutBankInput } from './seller-create-without-bank.input';

@InputType()
export class SellerCreateOrConnectWithoutBankInput {

    @Field(() => SellerWhereUniqueInput, {nullable:false})
    @Type(() => SellerWhereUniqueInput)
    where!: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => SellerCreateWithoutBankInput, {nullable:false})
    @Type(() => SellerCreateWithoutBankInput)
    create!: SellerCreateWithoutBankInput;
}
