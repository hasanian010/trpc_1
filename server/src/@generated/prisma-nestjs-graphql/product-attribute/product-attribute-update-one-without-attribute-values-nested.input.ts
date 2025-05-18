import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeCreateWithoutAttributeValuesInput } from './product-attribute-create-without-attribute-values.input';
import { Type } from 'class-transformer';
import { ProductAttributeCreateOrConnectWithoutAttributeValuesInput } from './product-attribute-create-or-connect-without-attribute-values.input';
import { ProductAttributeUpsertWithoutAttributeValuesInput } from './product-attribute-upsert-without-attribute-values.input';
import { ProductAttributeWhereInput } from './product-attribute-where.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';
import { ProductAttributeUpdateToOneWithWhereWithoutAttributeValuesInput } from './product-attribute-update-to-one-with-where-without-attribute-values.input';

@InputType()
export class ProductAttributeUpdateOneWithoutAttributeValuesNestedInput {

    @Field(() => ProductAttributeCreateWithoutAttributeValuesInput, {nullable:true})
    @Type(() => ProductAttributeCreateWithoutAttributeValuesInput)
    create?: ProductAttributeCreateWithoutAttributeValuesInput;

    @Field(() => ProductAttributeCreateOrConnectWithoutAttributeValuesInput, {nullable:true})
    @Type(() => ProductAttributeCreateOrConnectWithoutAttributeValuesInput)
    connectOrCreate?: ProductAttributeCreateOrConnectWithoutAttributeValuesInput;

    @Field(() => ProductAttributeUpsertWithoutAttributeValuesInput, {nullable:true})
    @Type(() => ProductAttributeUpsertWithoutAttributeValuesInput)
    upsert?: ProductAttributeUpsertWithoutAttributeValuesInput;

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    @Type(() => ProductAttributeWhereInput)
    disconnect?: ProductAttributeWhereInput;

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    @Type(() => ProductAttributeWhereInput)
    delete?: ProductAttributeWhereInput;

    @Field(() => ProductAttributeWhereUniqueInput, {nullable:true})
    @Type(() => ProductAttributeWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeUpdateToOneWithWhereWithoutAttributeValuesInput, {nullable:true})
    @Type(() => ProductAttributeUpdateToOneWithWhereWithoutAttributeValuesInput)
    update?: ProductAttributeUpdateToOneWithWhereWithoutAttributeValuesInput;
}
