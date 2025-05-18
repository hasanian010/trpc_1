import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MainCategoryWhereInput } from './main-category-where.input';
import { Type } from 'class-transformer';
import { MainCategoryOrderByWithRelationInput } from './main-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MainCategoryWhereUniqueInput } from './main-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MainCategoryScalarFieldEnum } from './main-category-scalar-field.enum';

@ArgsType()
export class FindFirstMainCategoryArgs {

    @Field(() => MainCategoryWhereInput, {nullable:true})
    @Type(() => MainCategoryWhereInput)
    where?: MainCategoryWhereInput;

    @Field(() => [MainCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MainCategoryOrderByWithRelationInput>;

    @Field(() => MainCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MainCategoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MainCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MainCategoryScalarFieldEnum}`>;
}
