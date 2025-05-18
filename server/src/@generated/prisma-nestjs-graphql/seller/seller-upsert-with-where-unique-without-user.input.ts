import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { Type } from 'class-transformer';
import { SellerUpdateWithoutUserInput } from './seller-update-without-user.input';
import { SellerCreateWithoutUserInput } from './seller-create-without-user.input';

@InputType()
export class SellerUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => SellerWhereUniqueInput, {nullable:false})
    @Type(() => SellerWhereUniqueInput)
    where!: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => SellerUpdateWithoutUserInput, {nullable:false})
    @Type(() => SellerUpdateWithoutUserInput)
    update!: SellerUpdateWithoutUserInput;

    @Field(() => SellerCreateWithoutUserInput, {nullable:false})
    @Type(() => SellerCreateWithoutUserInput)
    create!: SellerCreateWithoutUserInput;
}
