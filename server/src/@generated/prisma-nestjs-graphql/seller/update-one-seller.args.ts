import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SellerUpdateInput } from './seller-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';

@ArgsType()
export class UpdateOneSellerArgs {

    @Field(() => SellerUpdateInput, {nullable:false})
    @Type(() => SellerUpdateInput)
    data!: SellerUpdateInput;

    @Field(() => SellerWhereUniqueInput, {nullable:false})
    @Type(() => SellerWhereUniqueInput)
    where!: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;
}
