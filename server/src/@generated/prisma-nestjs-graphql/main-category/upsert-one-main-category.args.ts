import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MainCategoryWhereUniqueInput } from './main-category-where-unique.input';
import { Type } from 'class-transformer';
import { MainCategoryCreateInput } from './main-category-create.input';
import { MainCategoryUpdateInput } from './main-category-update.input';

@ArgsType()
export class UpsertOneMainCategoryArgs {

    @Field(() => MainCategoryWhereUniqueInput, {nullable:false})
    @Type(() => MainCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<MainCategoryWhereUniqueInput, 'id'>;

    @Field(() => MainCategoryCreateInput, {nullable:false})
    @Type(() => MainCategoryCreateInput)
    create!: MainCategoryCreateInput;

    @Field(() => MainCategoryUpdateInput, {nullable:false})
    @Type(() => MainCategoryUpdateInput)
    update!: MainCategoryUpdateInput;
}
