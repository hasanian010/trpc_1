import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutAttributeValuesInput } from './product-create-without-attribute-values.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutAttributeValuesInput } from './product-create-or-connect-without-attribute-values.input';
import { ProductUpsertWithoutAttributeValuesInput } from './product-upsert-without-attribute-values.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutAttributeValuesInput } from './product-update-to-one-with-where-without-attribute-values.input';

@InputType()
export class ProductUpdateOneRequiredWithoutAttributeValuesNestedInput {

    @Field(() => ProductCreateWithoutAttributeValuesInput, {nullable:true})
    @Type(() => ProductCreateWithoutAttributeValuesInput)
    create?: ProductCreateWithoutAttributeValuesInput;

    @Field(() => ProductCreateOrConnectWithoutAttributeValuesInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutAttributeValuesInput)
    connectOrCreate?: ProductCreateOrConnectWithoutAttributeValuesInput;

    @Field(() => ProductUpsertWithoutAttributeValuesInput, {nullable:true})
    @Type(() => ProductUpsertWithoutAttributeValuesInput)
    upsert?: ProductUpsertWithoutAttributeValuesInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutAttributeValuesInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutAttributeValuesInput)
    update?: ProductUpdateToOneWithWhereWithoutAttributeValuesInput;
}
