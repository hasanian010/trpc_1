import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutSubCategoriesInput } from './product-update-without-sub-categories.input';
import { ProductCreateWithoutSubCategoriesInput } from './product-create-without-sub-categories.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutSubCategoriesInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutSubCategoriesInput)
    update!: ProductUpdateWithoutSubCategoriesInput;

    @Field(() => ProductCreateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => ProductCreateWithoutSubCategoriesInput)
    create!: ProductCreateWithoutSubCategoriesInput;
}
