import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutSubCategoriesInput } from './product-create-without-sub-categories.input';

@InputType()
export class ProductCreateOrConnectWithoutSubCategoriesInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => ProductCreateWithoutSubCategoriesInput)
    create!: ProductCreateWithoutSubCategoriesInput;
}
