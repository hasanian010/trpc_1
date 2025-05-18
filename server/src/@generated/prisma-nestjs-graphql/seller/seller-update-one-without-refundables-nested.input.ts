import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateWithoutRefundablesInput } from './seller-create-without-refundables.input';
import { Type } from 'class-transformer';
import { SellerCreateOrConnectWithoutRefundablesInput } from './seller-create-or-connect-without-refundables.input';
import { SellerUpsertWithoutRefundablesInput } from './seller-upsert-without-refundables.input';
import { SellerWhereInput } from './seller-where.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { SellerUpdateToOneWithWhereWithoutRefundablesInput } from './seller-update-to-one-with-where-without-refundables.input';

@InputType()
export class SellerUpdateOneWithoutRefundablesNestedInput {

    @Field(() => SellerCreateWithoutRefundablesInput, {nullable:true})
    @Type(() => SellerCreateWithoutRefundablesInput)
    create?: SellerCreateWithoutRefundablesInput;

    @Field(() => SellerCreateOrConnectWithoutRefundablesInput, {nullable:true})
    @Type(() => SellerCreateOrConnectWithoutRefundablesInput)
    connectOrCreate?: SellerCreateOrConnectWithoutRefundablesInput;

    @Field(() => SellerUpsertWithoutRefundablesInput, {nullable:true})
    @Type(() => SellerUpsertWithoutRefundablesInput)
    upsert?: SellerUpsertWithoutRefundablesInput;

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    disconnect?: SellerWhereInput;

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    delete?: SellerWhereInput;

    @Field(() => SellerWhereUniqueInput, {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    connect?: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => SellerUpdateToOneWithWhereWithoutRefundablesInput, {nullable:true})
    @Type(() => SellerUpdateToOneWithWhereWithoutRefundablesInput)
    update?: SellerUpdateToOneWithWhereWithoutRefundablesInput;
}
