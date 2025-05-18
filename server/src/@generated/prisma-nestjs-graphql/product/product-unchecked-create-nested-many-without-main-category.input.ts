import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutMainCategoryInput } from './product-create-without-main-category.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutMainCategoryInput } from './product-create-or-connect-without-main-category.input';
import { ProductCreateManyMainCategoryInputEnvelope } from './product-create-many-main-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductUncheckedCreateNestedManyWithoutMainCategoryInput {

    @Field(() => [ProductCreateWithoutMainCategoryInput], {nullable:true})
    @Type(() => ProductCreateWithoutMainCategoryInput)
    create?: Array<ProductCreateWithoutMainCategoryInput>;

    @Field(() => [ProductCreateOrConnectWithoutMainCategoryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutMainCategoryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutMainCategoryInput>;

    @Field(() => ProductCreateManyMainCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyMainCategoryInputEnvelope)
    createMany?: ProductCreateManyMainCategoryInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
