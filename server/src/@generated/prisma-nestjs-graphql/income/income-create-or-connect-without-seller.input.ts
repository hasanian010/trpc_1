import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IncomeWhereUniqueInput } from './income-where-unique.input';
import { Type } from 'class-transformer';
import { IncomeCreateWithoutSellerInput } from './income-create-without-seller.input';

@InputType()
export class IncomeCreateOrConnectWithoutSellerInput {

    @Field(() => IncomeWhereUniqueInput, {nullable:false})
    @Type(() => IncomeWhereUniqueInput)
    where!: Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>;

    @Field(() => IncomeCreateWithoutSellerInput, {nullable:false})
    @Type(() => IncomeCreateWithoutSellerInput)
    create!: IncomeCreateWithoutSellerInput;
}
