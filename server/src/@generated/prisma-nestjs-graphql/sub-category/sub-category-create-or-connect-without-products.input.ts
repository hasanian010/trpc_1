import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubCategoryWhereUniqueInput } from './sub-category-where-unique.input';
import { Type } from 'class-transformer';
import { SubCategoryCreateWithoutProductsInput } from './sub-category-create-without-products.input';

@InputType()
export class SubCategoryCreateOrConnectWithoutProductsInput {

    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>;

    @Field(() => SubCategoryCreateWithoutProductsInput, {nullable:false})
    @Type(() => SubCategoryCreateWithoutProductsInput)
    create!: SubCategoryCreateWithoutProductsInput;
}
