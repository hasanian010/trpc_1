import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutFlashInput } from './product-create-without-flash.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutFlashInput } from './product-create-or-connect-without-flash.input';
import { ProductUpsertWithWhereUniqueWithoutFlashInput } from './product-upsert-with-where-unique-without-flash.input';
import { ProductCreateManyFlashInputEnvelope } from './product-create-many-flash-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutFlashInput } from './product-update-with-where-unique-without-flash.input';
import { ProductUpdateManyWithWhereWithoutFlashInput } from './product-update-many-with-where-without-flash.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutFlashNestedInput {

    @Field(() => [ProductCreateWithoutFlashInput], {nullable:true})
    @Type(() => ProductCreateWithoutFlashInput)
    create?: Array<ProductCreateWithoutFlashInput>;

    @Field(() => [ProductCreateOrConnectWithoutFlashInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutFlashInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutFlashInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutFlashInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutFlashInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutFlashInput>;

    @Field(() => ProductCreateManyFlashInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyFlashInputEnvelope)
    createMany?: ProductCreateManyFlashInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutFlashInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutFlashInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutFlashInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutFlashInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutFlashInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutFlashInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
