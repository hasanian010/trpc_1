import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutMainCategoryInput } from './product-create-without-main-category.input';

@InputType()
export class ProductCreateOrConnectWithoutMainCategoryInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutMainCategoryInput, {nullable:false})
    @Type(() => ProductCreateWithoutMainCategoryInput)
    create!: ProductCreateWithoutMainCategoryInput;
}
