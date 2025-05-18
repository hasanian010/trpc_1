import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutSubCategoriesInput } from './product-create-without-sub-categories.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutSubCategoriesInput } from './product-create-or-connect-without-sub-categories.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutSubCategoriesInput {

    @Field(() => [ProductCreateWithoutSubCategoriesInput], {nullable:true})
    @Type(() => ProductCreateWithoutSubCategoriesInput)
    create?: Array<ProductCreateWithoutSubCategoriesInput>;

    @Field(() => [ProductCreateOrConnectWithoutSubCategoriesInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutSubCategoriesInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutSubCategoriesInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
