import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutMainCategoryInput } from './category-create-without-main-category.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutMainCategoryInput } from './category-create-or-connect-without-main-category.input';
import { CategoryUpsertWithWhereUniqueWithoutMainCategoryInput } from './category-upsert-with-where-unique-without-main-category.input';
import { CategoryCreateManyMainCategoryInputEnvelope } from './category-create-many-main-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithWhereUniqueWithoutMainCategoryInput } from './category-update-with-where-unique-without-main-category.input';
import { CategoryUpdateManyWithWhereWithoutMainCategoryInput } from './category-update-many-with-where-without-main-category.input';
import { CategoryScalarWhereInput } from './category-scalar-where.input';

@InputType()
export class CategoryUpdateManyWithoutMainCategoryNestedInput {

    @Field(() => [CategoryCreateWithoutMainCategoryInput], {nullable:true})
    @Type(() => CategoryCreateWithoutMainCategoryInput)
    create?: Array<CategoryCreateWithoutMainCategoryInput>;

    @Field(() => [CategoryCreateOrConnectWithoutMainCategoryInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutMainCategoryInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutMainCategoryInput>;

    @Field(() => [CategoryUpsertWithWhereUniqueWithoutMainCategoryInput], {nullable:true})
    @Type(() => CategoryUpsertWithWhereUniqueWithoutMainCategoryInput)
    upsert?: Array<CategoryUpsertWithWhereUniqueWithoutMainCategoryInput>;

    @Field(() => CategoryCreateManyMainCategoryInputEnvelope, {nullable:true})
    @Type(() => CategoryCreateManyMainCategoryInputEnvelope)
    createMany?: CategoryCreateManyMainCategoryInputEnvelope;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryUpdateWithWhereUniqueWithoutMainCategoryInput], {nullable:true})
    @Type(() => CategoryUpdateWithWhereUniqueWithoutMainCategoryInput)
    update?: Array<CategoryUpdateWithWhereUniqueWithoutMainCategoryInput>;

    @Field(() => [CategoryUpdateManyWithWhereWithoutMainCategoryInput], {nullable:true})
    @Type(() => CategoryUpdateManyWithWhereWithoutMainCategoryInput)
    updateMany?: Array<CategoryUpdateManyWithWhereWithoutMainCategoryInput>;

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    @Type(() => CategoryScalarWhereInput)
    deleteMany?: Array<CategoryScalarWhereInput>;
}
