import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PreorderWhereUniqueInput } from './preorder-where-unique.input';
import { Type } from 'class-transformer';
import { PreorderCreateInput } from './preorder-create.input';
import { PreorderUpdateInput } from './preorder-update.input';

@ArgsType()
export class UpsertOnePreorderArgs {

    @Field(() => PreorderWhereUniqueInput, {nullable:false})
    @Type(() => PreorderWhereUniqueInput)
    where!: Prisma.AtLeast<PreorderWhereUniqueInput, 'id'>;

    @Field(() => PreorderCreateInput, {nullable:false})
    @Type(() => PreorderCreateInput)
    create!: PreorderCreateInput;

    @Field(() => PreorderUpdateInput, {nullable:false})
    @Type(() => PreorderUpdateInput)
    update!: PreorderUpdateInput;
}
