import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutProductAttributeInput } from './product-create-without-product-attribute.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutProductAttributeInput } from './product-create-or-connect-without-product-attribute.input';
import { ProductUpsertWithoutProductAttributeInput } from './product-upsert-without-product-attribute.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutProductAttributeInput } from './product-update-to-one-with-where-without-product-attribute.input';

@InputType()
export class ProductUpdateOneRequiredWithoutProductAttributeNestedInput {

    @Field(() => ProductCreateWithoutProductAttributeInput, {nullable:true})
    @Type(() => ProductCreateWithoutProductAttributeInput)
    create?: ProductCreateWithoutProductAttributeInput;

    @Field(() => ProductCreateOrConnectWithoutProductAttributeInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductAttributeInput)
    connectOrCreate?: ProductCreateOrConnectWithoutProductAttributeInput;

    @Field(() => ProductUpsertWithoutProductAttributeInput, {nullable:true})
    @Type(() => ProductUpsertWithoutProductAttributeInput)
    upsert?: ProductUpsertWithoutProductAttributeInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutProductAttributeInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutProductAttributeInput)
    update?: ProductUpdateToOneWithWhereWithoutProductAttributeInput;
}
