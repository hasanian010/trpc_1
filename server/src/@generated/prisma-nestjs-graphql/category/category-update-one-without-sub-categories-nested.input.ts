import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutSubCategoriesInput } from './category-create-without-sub-categories.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutSubCategoriesInput } from './category-create-or-connect-without-sub-categories.input';
import { CategoryUpsertWithoutSubCategoriesInput } from './category-upsert-without-sub-categories.input';
import { CategoryWhereInput } from './category-where.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateToOneWithWhereWithoutSubCategoriesInput } from './category-update-to-one-with-where-without-sub-categories.input';

@InputType()
export class CategoryUpdateOneWithoutSubCategoriesNestedInput {

    @Field(() => CategoryCreateWithoutSubCategoriesInput, {nullable:true})
    @Type(() => CategoryCreateWithoutSubCategoriesInput)
    create?: CategoryCreateWithoutSubCategoriesInput;

    @Field(() => CategoryCreateOrConnectWithoutSubCategoriesInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutSubCategoriesInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput;

    @Field(() => CategoryUpsertWithoutSubCategoriesInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutSubCategoriesInput)
    upsert?: CategoryUpsertWithoutSubCategoriesInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    disconnect?: CategoryWhereInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    delete?: CategoryWhereInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryUpdateToOneWithWhereWithoutSubCategoriesInput, {nullable:true})
    @Type(() => CategoryUpdateToOneWithWhereWithoutSubCategoriesInput)
    update?: CategoryUpdateToOneWithWhereWithoutSubCategoriesInput;
}
