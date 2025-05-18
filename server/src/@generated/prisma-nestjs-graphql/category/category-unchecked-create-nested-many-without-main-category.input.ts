import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutMainCategoryInput } from './category-create-without-main-category.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutMainCategoryInput } from './category-create-or-connect-without-main-category.input';
import { CategoryCreateManyMainCategoryInputEnvelope } from './category-create-many-main-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryUncheckedCreateNestedManyWithoutMainCategoryInput {

    @Field(() => [CategoryCreateWithoutMainCategoryInput], {nullable:true})
    @Type(() => CategoryCreateWithoutMainCategoryInput)
    create?: Array<CategoryCreateWithoutMainCategoryInput>;

    @Field(() => [CategoryCreateOrConnectWithoutMainCategoryInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutMainCategoryInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutMainCategoryInput>;

    @Field(() => CategoryCreateManyMainCategoryInputEnvelope, {nullable:true})
    @Type(() => CategoryCreateManyMainCategoryInputEnvelope)
    createMany?: CategoryCreateManyMainCategoryInputEnvelope;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
}
