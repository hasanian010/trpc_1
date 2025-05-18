import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutAttributeVariantsInput } from './product-create-without-attribute-variants.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutAttributeVariantsInput } from './product-create-or-connect-without-attribute-variants.input';
import { ProductUpsertWithoutAttributeVariantsInput } from './product-upsert-without-attribute-variants.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutAttributeVariantsInput } from './product-update-to-one-with-where-without-attribute-variants.input';

@InputType()
export class ProductUpdateOneRequiredWithoutAttributeVariantsNestedInput {

    @Field(() => ProductCreateWithoutAttributeVariantsInput, {nullable:true})
    @Type(() => ProductCreateWithoutAttributeVariantsInput)
    create?: ProductCreateWithoutAttributeVariantsInput;

    @Field(() => ProductCreateOrConnectWithoutAttributeVariantsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutAttributeVariantsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutAttributeVariantsInput;

    @Field(() => ProductUpsertWithoutAttributeVariantsInput, {nullable:true})
    @Type(() => ProductUpsertWithoutAttributeVariantsInput)
    upsert?: ProductUpsertWithoutAttributeVariantsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutAttributeVariantsInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutAttributeVariantsInput)
    update?: ProductUpdateToOneWithWhereWithoutAttributeVariantsInput;
}
