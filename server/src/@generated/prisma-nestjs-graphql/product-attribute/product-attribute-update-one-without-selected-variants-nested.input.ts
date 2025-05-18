import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeCreateWithoutSelectedVariantsInput } from './product-attribute-create-without-selected-variants.input';
import { Type } from 'class-transformer';
import { ProductAttributeCreateOrConnectWithoutSelectedVariantsInput } from './product-attribute-create-or-connect-without-selected-variants.input';
import { ProductAttributeUpsertWithoutSelectedVariantsInput } from './product-attribute-upsert-without-selected-variants.input';
import { ProductAttributeWhereInput } from './product-attribute-where.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';
import { ProductAttributeUpdateToOneWithWhereWithoutSelectedVariantsInput } from './product-attribute-update-to-one-with-where-without-selected-variants.input';

@InputType()
export class ProductAttributeUpdateOneWithoutSelectedVariantsNestedInput {

    @Field(() => ProductAttributeCreateWithoutSelectedVariantsInput, {nullable:true})
    @Type(() => ProductAttributeCreateWithoutSelectedVariantsInput)
    create?: ProductAttributeCreateWithoutSelectedVariantsInput;

    @Field(() => ProductAttributeCreateOrConnectWithoutSelectedVariantsInput, {nullable:true})
    @Type(() => ProductAttributeCreateOrConnectWithoutSelectedVariantsInput)
    connectOrCreate?: ProductAttributeCreateOrConnectWithoutSelectedVariantsInput;

    @Field(() => ProductAttributeUpsertWithoutSelectedVariantsInput, {nullable:true})
    @Type(() => ProductAttributeUpsertWithoutSelectedVariantsInput)
    upsert?: ProductAttributeUpsertWithoutSelectedVariantsInput;

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    @Type(() => ProductAttributeWhereInput)
    disconnect?: ProductAttributeWhereInput;

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    @Type(() => ProductAttributeWhereInput)
    delete?: ProductAttributeWhereInput;

    @Field(() => ProductAttributeWhereUniqueInput, {nullable:true})
    @Type(() => ProductAttributeWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeUpdateToOneWithWhereWithoutSelectedVariantsInput, {nullable:true})
    @Type(() => ProductAttributeUpdateToOneWithWhereWithoutSelectedVariantsInput)
    update?: ProductAttributeUpdateToOneWithWhereWithoutSelectedVariantsInput;
}
