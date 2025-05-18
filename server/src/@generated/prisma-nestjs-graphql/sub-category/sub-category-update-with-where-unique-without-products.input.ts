import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubCategoryWhereUniqueInput } from './sub-category-where-unique.input';
import { Type } from 'class-transformer';
import { SubCategoryUpdateWithoutProductsInput } from './sub-category-update-without-products.input';

@InputType()
export class SubCategoryUpdateWithWhereUniqueWithoutProductsInput {

    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>;

    @Field(() => SubCategoryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => SubCategoryUpdateWithoutProductsInput)
    data!: SubCategoryUpdateWithoutProductsInput;
}
