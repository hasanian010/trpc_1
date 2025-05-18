import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateWithoutIncomesInput } from './seller-create-without-incomes.input';
import { Type } from 'class-transformer';
import { SellerCreateOrConnectWithoutIncomesInput } from './seller-create-or-connect-without-incomes.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';

@InputType()
export class SellerCreateNestedOneWithoutIncomesInput {

    @Field(() => SellerCreateWithoutIncomesInput, {nullable:true})
    @Type(() => SellerCreateWithoutIncomesInput)
    create?: SellerCreateWithoutIncomesInput;

    @Field(() => SellerCreateOrConnectWithoutIncomesInput, {nullable:true})
    @Type(() => SellerCreateOrConnectWithoutIncomesInput)
    connectOrCreate?: SellerCreateOrConnectWithoutIncomesInput;

    @Field(() => SellerWhereUniqueInput, {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    connect?: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;
}
