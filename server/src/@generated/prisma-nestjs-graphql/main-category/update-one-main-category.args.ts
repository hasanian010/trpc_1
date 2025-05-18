import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MainCategoryUpdateInput } from './main-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MainCategoryWhereUniqueInput } from './main-category-where-unique.input';

@ArgsType()
export class UpdateOneMainCategoryArgs {

    @Field(() => MainCategoryUpdateInput, {nullable:false})
    @Type(() => MainCategoryUpdateInput)
    data!: MainCategoryUpdateInput;

    @Field(() => MainCategoryWhereUniqueInput, {nullable:false})
    @Type(() => MainCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<MainCategoryWhereUniqueInput, 'id'>;
}
