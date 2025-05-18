import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductSpecificationCreateWithoutProductInput } from './product-specification-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductSpecificationCreateOrConnectWithoutProductInput } from './product-specification-create-or-connect-without-product.input';
import { ProductSpecificationUpsertWithWhereUniqueWithoutProductInput } from './product-specification-upsert-with-where-unique-without-product.input';
import { ProductSpecificationCreateManyProductInputEnvelope } from './product-specification-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductSpecificationWhereUniqueInput } from './product-specification-where-unique.input';
import { ProductSpecificationUpdateWithWhereUniqueWithoutProductInput } from './product-specification-update-with-where-unique-without-product.input';
import { ProductSpecificationUpdateManyWithWhereWithoutProductInput } from './product-specification-update-many-with-where-without-product.input';
import { ProductSpecificationScalarWhereInput } from './product-specification-scalar-where.input';

@InputType()
export class ProductSpecificationUncheckedUpdateManyWithoutProductNestedInput {

    @Field(() => [ProductSpecificationCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductSpecificationCreateWithoutProductInput)
    create?: Array<ProductSpecificationCreateWithoutProductInput>;

    @Field(() => [ProductSpecificationCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductSpecificationCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductSpecificationCreateOrConnectWithoutProductInput>;

    @Field(() => [ProductSpecificationUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductSpecificationUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ProductSpecificationUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ProductSpecificationCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductSpecificationCreateManyProductInputEnvelope)
    createMany?: ProductSpecificationCreateManyProductInputEnvelope;

    @Field(() => [ProductSpecificationWhereUniqueInput], {nullable:true})
    @Type(() => ProductSpecificationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductSpecificationWhereUniqueInput, 'id'>>;

    @Field(() => [ProductSpecificationWhereUniqueInput], {nullable:true})
    @Type(() => ProductSpecificationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductSpecificationWhereUniqueInput, 'id'>>;

    @Field(() => [ProductSpecificationWhereUniqueInput], {nullable:true})
    @Type(() => ProductSpecificationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductSpecificationWhereUniqueInput, 'id'>>;

    @Field(() => [ProductSpecificationWhereUniqueInput], {nullable:true})
    @Type(() => ProductSpecificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductSpecificationWhereUniqueInput, 'id'>>;

    @Field(() => [ProductSpecificationUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductSpecificationUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ProductSpecificationUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ProductSpecificationUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ProductSpecificationUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ProductSpecificationUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ProductSpecificationScalarWhereInput], {nullable:true})
    @Type(() => ProductSpecificationScalarWhereInput)
    deleteMany?: Array<ProductSpecificationScalarWhereInput>;
}
