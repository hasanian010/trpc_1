import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutSectionProductsInput } from './product-create-without-section-products.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutSectionProductsInput } from './product-create-or-connect-without-section-products.input';
import { ProductUpsertWithoutSectionProductsInput } from './product-upsert-without-section-products.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutSectionProductsInput } from './product-update-to-one-with-where-without-section-products.input';

@InputType()
export class ProductUpdateOneRequiredWithoutSectionProductsNestedInput {

    @Field(() => ProductCreateWithoutSectionProductsInput, {nullable:true})
    @Type(() => ProductCreateWithoutSectionProductsInput)
    create?: ProductCreateWithoutSectionProductsInput;

    @Field(() => ProductCreateOrConnectWithoutSectionProductsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutSectionProductsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutSectionProductsInput;

    @Field(() => ProductUpsertWithoutSectionProductsInput, {nullable:true})
    @Type(() => ProductUpsertWithoutSectionProductsInput)
    upsert?: ProductUpsertWithoutSectionProductsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutSectionProductsInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutSectionProductsInput)
    update?: ProductUpdateToOneWithWhereWithoutSectionProductsInput;
}
