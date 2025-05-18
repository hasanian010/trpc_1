import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubCategoryCreateWithoutProductsInput } from './sub-category-create-without-products.input';
import { Type } from 'class-transformer';
import { SubCategoryCreateOrConnectWithoutProductsInput } from './sub-category-create-or-connect-without-products.input';
import { SubCategoryUpsertWithWhereUniqueWithoutProductsInput } from './sub-category-upsert-with-where-unique-without-products.input';
import { Prisma } from '@prisma/client';
import { SubCategoryWhereUniqueInput } from './sub-category-where-unique.input';
import { SubCategoryUpdateWithWhereUniqueWithoutProductsInput } from './sub-category-update-with-where-unique-without-products.input';
import { SubCategoryUpdateManyWithWhereWithoutProductsInput } from './sub-category-update-many-with-where-without-products.input';
import { SubCategoryScalarWhereInput } from './sub-category-scalar-where.input';

@InputType()
export class SubCategoryUncheckedUpdateManyWithoutProductsNestedInput {

    @Field(() => [SubCategoryCreateWithoutProductsInput], {nullable:true})
    @Type(() => SubCategoryCreateWithoutProductsInput)
    create?: Array<SubCategoryCreateWithoutProductsInput>;

    @Field(() => [SubCategoryCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => SubCategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<SubCategoryCreateOrConnectWithoutProductsInput>;

    @Field(() => [SubCategoryUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => SubCategoryUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<SubCategoryUpsertWithWhereUniqueWithoutProductsInput>;

    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>>;

    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>>;

    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>>;

    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>>;

    @Field(() => [SubCategoryUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => SubCategoryUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<SubCategoryUpdateWithWhereUniqueWithoutProductsInput>;

    @Field(() => [SubCategoryUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => SubCategoryUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<SubCategoryUpdateManyWithWhereWithoutProductsInput>;

    @Field(() => [SubCategoryScalarWhereInput], {nullable:true})
    @Type(() => SubCategoryScalarWhereInput)
    deleteMany?: Array<SubCategoryScalarWhereInput>;
}
