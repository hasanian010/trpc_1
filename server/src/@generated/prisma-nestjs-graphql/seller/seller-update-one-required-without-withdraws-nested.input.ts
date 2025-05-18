import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateWithoutWithdrawsInput } from './seller-create-without-withdraws.input';
import { Type } from 'class-transformer';
import { SellerCreateOrConnectWithoutWithdrawsInput } from './seller-create-or-connect-without-withdraws.input';
import { SellerUpsertWithoutWithdrawsInput } from './seller-upsert-without-withdraws.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { SellerUpdateToOneWithWhereWithoutWithdrawsInput } from './seller-update-to-one-with-where-without-withdraws.input';

@InputType()
export class SellerUpdateOneRequiredWithoutWithdrawsNestedInput {

    @Field(() => SellerCreateWithoutWithdrawsInput, {nullable:true})
    @Type(() => SellerCreateWithoutWithdrawsInput)
    create?: SellerCreateWithoutWithdrawsInput;

    @Field(() => SellerCreateOrConnectWithoutWithdrawsInput, {nullable:true})
    @Type(() => SellerCreateOrConnectWithoutWithdrawsInput)
    connectOrCreate?: SellerCreateOrConnectWithoutWithdrawsInput;

    @Field(() => SellerUpsertWithoutWithdrawsInput, {nullable:true})
    @Type(() => SellerUpsertWithoutWithdrawsInput)
    upsert?: SellerUpsertWithoutWithdrawsInput;

    @Field(() => SellerWhereUniqueInput, {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    connect?: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => SellerUpdateToOneWithWhereWithoutWithdrawsInput, {nullable:true})
    @Type(() => SellerUpdateToOneWithWhereWithoutWithdrawsInput)
    update?: SellerUpdateToOneWithWhereWithoutWithdrawsInput;
}
