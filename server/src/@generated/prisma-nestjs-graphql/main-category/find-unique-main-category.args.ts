import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MainCategoryWhereUniqueInput } from './main-category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMainCategoryArgs {

    @Field(() => MainCategoryWhereUniqueInput, {nullable:false})
    @Type(() => MainCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<MainCategoryWhereUniqueInput, 'id'>;
}
