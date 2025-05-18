import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutSubCategoriesInput } from './product-create-without-sub-categories.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutSubCategoriesInput } from './product-create-or-connect-without-sub-categories.input';
import { ProductUpsertWithWhereUniqueWithoutSubCategoriesInput } from './product-upsert-with-where-unique-without-sub-categories.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutSubCategoriesInput } from './product-update-with-where-unique-without-sub-categories.input';
import { ProductUpdateManyWithWhereWithoutSubCategoriesInput } from './product-update-many-with-where-without-sub-categories.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutSubCategoriesNestedInput {

    @Field(() => [ProductCreateWithoutSubCategoriesInput], {nullable:true})
    @Type(() => ProductCreateWithoutSubCategoriesInput)
    create?: Array<ProductCreateWithoutSubCategoriesInput>;

    @Field(() => [ProductCreateOrConnectWithoutSubCategoriesInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutSubCategoriesInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutSubCategoriesInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutSubCategoriesInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutSubCategoriesInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutSubCategoriesInput>;

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

    @Field(() => [ProductUpdateWithWhereUniqueWithoutSubCategoriesInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutSubCategoriesInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutSubCategoriesInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutSubCategoriesInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutSubCategoriesInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutSubCategoriesInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
