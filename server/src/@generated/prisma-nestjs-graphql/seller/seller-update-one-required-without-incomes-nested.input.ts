import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateWithoutIncomesInput } from './seller-create-without-incomes.input';
import { Type } from 'class-transformer';
import { SellerCreateOrConnectWithoutIncomesInput } from './seller-create-or-connect-without-incomes.input';
import { SellerUpsertWithoutIncomesInput } from './seller-upsert-without-incomes.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { SellerUpdateToOneWithWhereWithoutIncomesInput } from './seller-update-to-one-with-where-without-incomes.input';

@InputType()
export class SellerUpdateOneRequiredWithoutIncomesNestedInput {

    @Field(() => SellerCreateWithoutIncomesInput, {nullable:true})
    @Type(() => SellerCreateWithoutIncomesInput)
    create?: SellerCreateWithoutIncomesInput;

    @Field(() => SellerCreateOrConnectWithoutIncomesInput, {nullable:true})
    @Type(() => SellerCreateOrConnectWithoutIncomesInput)
    connectOrCreate?: SellerCreateOrConnectWithoutIncomesInput;

    @Field(() => SellerUpsertWithoutIncomesInput, {nullable:true})
    @Type(() => SellerUpsertWithoutIncomesInput)
    upsert?: SellerUpsertWithoutIncomesInput;

    @Field(() => SellerWhereUniqueInput, {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    connect?: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => SellerUpdateToOneWithWhereWithoutIncomesInput, {nullable:true})
    @Type(() => SellerUpdateToOneWithWhereWithoutIncomesInput)
    update?: SellerUpdateToOneWithWhereWithoutIncomesInput;
}
