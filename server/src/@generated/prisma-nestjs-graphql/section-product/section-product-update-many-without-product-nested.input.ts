import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionProductCreateWithoutProductInput } from './section-product-create-without-product.input';
import { Type } from 'class-transformer';
import { SectionProductCreateOrConnectWithoutProductInput } from './section-product-create-or-connect-without-product.input';
import { SectionProductUpsertWithWhereUniqueWithoutProductInput } from './section-product-upsert-with-where-unique-without-product.input';
import { SectionProductCreateManyProductInputEnvelope } from './section-product-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SectionProductWhereUniqueInput } from './section-product-where-unique.input';
import { SectionProductUpdateWithWhereUniqueWithoutProductInput } from './section-product-update-with-where-unique-without-product.input';
import { SectionProductUpdateManyWithWhereWithoutProductInput } from './section-product-update-many-with-where-without-product.input';
import { SectionProductScalarWhereInput } from './section-product-scalar-where.input';

@InputType()
export class SectionProductUpdateManyWithoutProductNestedInput {

    @Field(() => [SectionProductCreateWithoutProductInput], {nullable:true})
    @Type(() => SectionProductCreateWithoutProductInput)
    create?: Array<SectionProductCreateWithoutProductInput>;

    @Field(() => [SectionProductCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => SectionProductCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<SectionProductCreateOrConnectWithoutProductInput>;

    @Field(() => [SectionProductUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => SectionProductUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<SectionProductUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => SectionProductCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => SectionProductCreateManyProductInputEnvelope)
    createMany?: SectionProductCreateManyProductInputEnvelope;

    @Field(() => [SectionProductWhereUniqueInput], {nullable:true})
    @Type(() => SectionProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SectionProductWhereUniqueInput, 'id'>>;

    @Field(() => [SectionProductWhereUniqueInput], {nullable:true})
    @Type(() => SectionProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SectionProductWhereUniqueInput, 'id'>>;

    @Field(() => [SectionProductWhereUniqueInput], {nullable:true})
    @Type(() => SectionProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SectionProductWhereUniqueInput, 'id'>>;

    @Field(() => [SectionProductWhereUniqueInput], {nullable:true})
    @Type(() => SectionProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SectionProductWhereUniqueInput, 'id'>>;

    @Field(() => [SectionProductUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => SectionProductUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<SectionProductUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [SectionProductUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => SectionProductUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<SectionProductUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [SectionProductScalarWhereInput], {nullable:true})
    @Type(() => SectionProductScalarWhereInput)
    deleteMany?: Array<SectionProductScalarWhereInput>;
}
