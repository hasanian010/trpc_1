import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateWithoutBankInput } from './seller-create-without-bank.input';
import { Type } from 'class-transformer';
import { SellerCreateOrConnectWithoutBankInput } from './seller-create-or-connect-without-bank.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';

@InputType()
export class SellerCreateNestedOneWithoutBankInput {

    @Field(() => SellerCreateWithoutBankInput, {nullable:true})
    @Type(() => SellerCreateWithoutBankInput)
    create?: SellerCreateWithoutBankInput;

    @Field(() => SellerCreateOrConnectWithoutBankInput, {nullable:true})
    @Type(() => SellerCreateOrConnectWithoutBankInput)
    connectOrCreate?: SellerCreateOrConnectWithoutBankInput;

    @Field(() => SellerWhereUniqueInput, {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    connect?: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;
}
