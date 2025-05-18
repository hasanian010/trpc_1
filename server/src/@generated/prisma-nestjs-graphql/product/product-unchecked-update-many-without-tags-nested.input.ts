import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutTagsInput } from './product-create-without-tags.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutTagsInput } from './product-create-or-connect-without-tags.input';
import { ProductUpsertWithWhereUniqueWithoutTagsInput } from './product-upsert-with-where-unique-without-tags.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutTagsInput } from './product-update-with-where-unique-without-tags.input';
import { ProductUpdateManyWithWhereWithoutTagsInput } from './product-update-many-with-where-without-tags.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutTagsNestedInput {

    @Field(() => [ProductCreateWithoutTagsInput], {nullable:true})
    @Type(() => ProductCreateWithoutTagsInput)
    create?: Array<ProductCreateWithoutTagsInput>;

    @Field(() => [ProductCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutTagsInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutTagsInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutTagsInput>;

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

    @Field(() => [ProductUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutTagsInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutTagsInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutTagsInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutTagsInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
