import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreorderUpdateInput } from './preorder-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PreorderWhereUniqueInput } from './preorder-where-unique.input';

@ArgsType()
export class UpdateOnePreorderArgs {

    @Field(() => PreorderUpdateInput, {nullable:false})
    @Type(() => PreorderUpdateInput)
    data!: PreorderUpdateInput;

    @Field(() => PreorderWhereUniqueInput, {nullable:false})
    @Type(() => PreorderWhereUniqueInput)
    where!: Prisma.AtLeast<PreorderWhereUniqueInput, 'id'>;
}
