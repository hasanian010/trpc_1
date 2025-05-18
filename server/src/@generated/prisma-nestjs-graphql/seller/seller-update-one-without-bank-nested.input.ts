import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateWithoutBankInput } from './seller-create-without-bank.input';
import { Type } from 'class-transformer';
import { SellerCreateOrConnectWithoutBankInput } from './seller-create-or-connect-without-bank.input';
import { SellerUpsertWithoutBankInput } from './seller-upsert-without-bank.input';
import { SellerWhereInput } from './seller-where.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { SellerUpdateToOneWithWhereWithoutBankInput } from './seller-update-to-one-with-where-without-bank.input';

@InputType()
export class SellerUpdateOneWithoutBankNestedInput {

    @Field(() => SellerCreateWithoutBankInput, {nullable:true})
    @Type(() => SellerCreateWithoutBankInput)
    create?: SellerCreateWithoutBankInput;

    @Field(() => SellerCreateOrConnectWithoutBankInput, {nullable:true})
    @Type(() => SellerCreateOrConnectWithoutBankInput)
    connectOrCreate?: SellerCreateOrConnectWithoutBankInput;

    @Field(() => SellerUpsertWithoutBankInput, {nullable:true})
    @Type(() => SellerUpsertWithoutBankInput)
    upsert?: SellerUpsertWithoutBankInput;

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    disconnect?: SellerWhereInput;

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    delete?: SellerWhereInput;

    @Field(() => SellerWhereUniqueInput, {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    connect?: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => SellerUpdateToOneWithWhereWithoutBankInput, {nullable:true})
    @Type(() => SellerUpdateToOneWithWhereWithoutBankInput)
    update?: SellerUpdateToOneWithWhereWithoutBankInput;
}
