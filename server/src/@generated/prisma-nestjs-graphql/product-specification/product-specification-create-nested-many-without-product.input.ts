import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductSpecificationCreateWithoutProductInput } from './product-specification-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductSpecificationCreateOrConnectWithoutProductInput } from './product-specification-create-or-connect-without-product.input';
import { ProductSpecificationCreateManyProductInputEnvelope } from './product-specification-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductSpecificationWhereUniqueInput } from './product-specification-where-unique.input';

@InputType()
export class ProductSpecificationCreateNestedManyWithoutProductInput {

    @Field(() => [ProductSpecificationCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductSpecificationCreateWithoutProductInput)
    create?: Array<ProductSpecificationCreateWithoutProductInput>;

    @Field(() => [ProductSpecificationCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductSpecificationCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductSpecificationCreateOrConnectWithoutProductInput>;

    @Field(() => ProductSpecificationCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductSpecificationCreateManyProductInputEnvelope)
    createMany?: ProductSpecificationCreateManyProductInputEnvelope;

    @Field(() => [ProductSpecificationWhereUniqueInput], {nullable:true})
    @Type(() => ProductSpecificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductSpecificationWhereUniqueInput, 'id'>>;
}
