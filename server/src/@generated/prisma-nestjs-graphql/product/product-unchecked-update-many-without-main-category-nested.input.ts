import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutMainCategoryInput } from './product-create-without-main-category.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutMainCategoryInput } from './product-create-or-connect-without-main-category.input';
import { ProductUpsertWithWhereUniqueWithoutMainCategoryInput } from './product-upsert-with-where-unique-without-main-category.input';
import { ProductCreateManyMainCategoryInputEnvelope } from './product-create-many-main-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutMainCategoryInput } from './product-update-with-where-unique-without-main-category.input';
import { ProductUpdateManyWithWhereWithoutMainCategoryInput } from './product-update-many-with-where-without-main-category.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutMainCategoryNestedInput {

    @Field(() => [ProductCreateWithoutMainCategoryInput], {nullable:true})
    @Type(() => ProductCreateWithoutMainCategoryInput)
    create?: Array<ProductCreateWithoutMainCategoryInput>;

    @Field(() => [ProductCreateOrConnectWithoutMainCategoryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutMainCategoryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutMainCategoryInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutMainCategoryInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutMainCategoryInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutMainCategoryInput>;

    @Field(() => ProductCreateManyMainCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyMainCategoryInputEnvelope)
    createMany?: ProductCreateManyMainCategoryInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutMainCategoryInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutMainCategoryInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutMainCategoryInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutMainCategoryInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutMainCategoryInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutMainCategoryInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
