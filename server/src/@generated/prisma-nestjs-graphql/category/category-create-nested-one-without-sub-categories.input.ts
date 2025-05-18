import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutSubCategoriesInput } from './category-create-without-sub-categories.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutSubCategoriesInput } from './category-create-or-connect-without-sub-categories.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutSubCategoriesInput {

    @Field(() => CategoryCreateWithoutSubCategoriesInput, {nullable:true})
    @Type(() => CategoryCreateWithoutSubCategoriesInput)
    create?: CategoryCreateWithoutSubCategoriesInput;

    @Field(() => CategoryCreateOrConnectWithoutSubCategoriesInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutSubCategoriesInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
}
