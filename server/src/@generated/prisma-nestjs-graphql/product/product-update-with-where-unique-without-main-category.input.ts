import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutMainCategoryInput } from './product-update-without-main-category.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutMainCategoryInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutMainCategoryInput, {nullable:false})
    @Type(() => ProductUpdateWithoutMainCategoryInput)
    data!: ProductUpdateWithoutMainCategoryInput;
}
