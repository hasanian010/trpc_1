import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutOrderProductsInput } from './product-create-without-order-products.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutOrderProductsInput } from './product-create-or-connect-without-order-products.input';
import { ProductUpsertWithoutOrderProductsInput } from './product-upsert-without-order-products.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutOrderProductsInput } from './product-update-to-one-with-where-without-order-products.input';

@InputType()
export class ProductUpdateOneRequiredWithoutOrderProductsNestedInput {

    @Field(() => ProductCreateWithoutOrderProductsInput, {nullable:true})
    @Type(() => ProductCreateWithoutOrderProductsInput)
    create?: ProductCreateWithoutOrderProductsInput;

    @Field(() => ProductCreateOrConnectWithoutOrderProductsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutOrderProductsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutOrderProductsInput;

    @Field(() => ProductUpsertWithoutOrderProductsInput, {nullable:true})
    @Type(() => ProductUpsertWithoutOrderProductsInput)
    upsert?: ProductUpsertWithoutOrderProductsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutOrderProductsInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutOrderProductsInput)
    update?: ProductUpdateToOneWithWhereWithoutOrderProductsInput;
}
