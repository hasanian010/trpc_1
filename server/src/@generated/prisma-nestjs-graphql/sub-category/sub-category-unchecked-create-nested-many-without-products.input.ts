import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubCategoryCreateWithoutProductsInput } from './sub-category-create-without-products.input';
import { Type } from 'class-transformer';
import { SubCategoryCreateOrConnectWithoutProductsInput } from './sub-category-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { SubCategoryWhereUniqueInput } from './sub-category-where-unique.input';

@InputType()
export class SubCategoryUncheckedCreateNestedManyWithoutProductsInput {

    @Field(() => [SubCategoryCreateWithoutProductsInput], {nullable:true})
    @Type(() => SubCategoryCreateWithoutProductsInput)
    create?: Array<SubCategoryCreateWithoutProductsInput>;

    @Field(() => [SubCategoryCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => SubCategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<SubCategoryCreateOrConnectWithoutProductsInput>;

    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>>;
}
