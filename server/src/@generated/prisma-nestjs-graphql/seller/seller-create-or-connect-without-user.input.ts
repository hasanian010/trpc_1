import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { Type } from 'class-transformer';
import { SellerCreateWithoutUserInput } from './seller-create-without-user.input';

@InputType()
export class SellerCreateOrConnectWithoutUserInput {

    @Field(() => SellerWhereUniqueInput, {nullable:false})
    @Type(() => SellerWhereUniqueInput)
    where!: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => SellerCreateWithoutUserInput, {nullable:false})
    @Type(() => SellerCreateWithoutUserInput)
    create!: SellerCreateWithoutUserInput;
}
