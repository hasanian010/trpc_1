import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeCreateWithoutAttributesInput } from './product-attribute-create-without-attributes.input';
import { Type } from 'class-transformer';
import { ProductAttributeCreateOrConnectWithoutAttributesInput } from './product-attribute-create-or-connect-without-attributes.input';
import { ProductAttributeUpsertWithWhereUniqueWithoutAttributesInput } from './product-attribute-upsert-with-where-unique-without-attributes.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';
import { ProductAttributeUpdateWithWhereUniqueWithoutAttributesInput } from './product-attribute-update-with-where-unique-without-attributes.input';
import { ProductAttributeUpdateManyWithWhereWithoutAttributesInput } from './product-attribute-update-many-with-where-without-attributes.input';
import { ProductAttributeScalarWhereInput } from './product-attribute-scalar-where.input';

@InputType()
export class ProductAttributeUncheckedUpdateManyWithoutAttributesNestedInput {

    @Field(() => [ProductAttributeCreateWithoutAttributesInput], {nullable:true})
    @Type(() => ProductAttributeCreateWithoutAttributesInput)
    create?: Array<ProductAttributeCreateWithoutAttributesInput>;

    @Field(() => [ProductAttributeCreateOrConnectWithoutAttributesInput], {nullable:true})
    @Type(() => ProductAttributeCreateOrConnectWithoutAttributesInput)
    connectOrCreate?: Array<ProductAttributeCreateOrConnectWithoutAttributesInput>;

    @Field(() => [ProductAttributeUpsertWithWhereUniqueWithoutAttributesInput], {nullable:true})
    @Type(() => ProductAttributeUpsertWithWhereUniqueWithoutAttributesInput)
    upsert?: Array<ProductAttributeUpsertWithWhereUniqueWithoutAttributesInput>;

    @Field(() => [ProductAttributeWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>>;

    @Field(() => [ProductAttributeWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>>;

    @Field(() => [ProductAttributeWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>>;

    @Field(() => [ProductAttributeWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>>;

    @Field(() => [ProductAttributeUpdateWithWhereUniqueWithoutAttributesInput], {nullable:true})
    @Type(() => ProductAttributeUpdateWithWhereUniqueWithoutAttributesInput)
    update?: Array<ProductAttributeUpdateWithWhereUniqueWithoutAttributesInput>;

    @Field(() => [ProductAttributeUpdateManyWithWhereWithoutAttributesInput], {nullable:true})
    @Type(() => ProductAttributeUpdateManyWithWhereWithoutAttributesInput)
    updateMany?: Array<ProductAttributeUpdateManyWithWhereWithoutAttributesInput>;

    @Field(() => [ProductAttributeScalarWhereInput], {nullable:true})
    @Type(() => ProductAttributeScalarWhereInput)
    deleteMany?: Array<ProductAttributeScalarWhereInput>;
}
