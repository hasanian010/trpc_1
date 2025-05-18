import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { Type } from 'class-transformer';
import { SellerCreateInput } from './seller-create.input';
import { SellerUpdateInput } from './seller-update.input';

@ArgsType()
export class UpsertOneSellerArgs {

    @Field(() => SellerWhereUniqueInput, {nullable:false})
    @Type(() => SellerWhereUniqueInput)
    where!: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => SellerCreateInput, {nullable:false})
    @Type(() => SellerCreateInput)
    create!: SellerCreateInput;

    @Field(() => SellerUpdateInput, {nullable:false})
    @Type(() => SellerUpdateInput)
    update!: SellerUpdateInput;
}
