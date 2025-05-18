import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { Type } from 'class-transformer';
import { SellerCreateWithoutIncomesInput } from './seller-create-without-incomes.input';

@InputType()
export class SellerCreateOrConnectWithoutIncomesInput {

    @Field(() => SellerWhereUniqueInput, {nullable:false})
    @Type(() => SellerWhereUniqueInput)
    where!: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => SellerCreateWithoutIncomesInput, {nullable:false})
    @Type(() => SellerCreateWithoutIncomesInput)
    create!: SellerCreateWithoutIncomesInput;
}
