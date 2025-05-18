import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionProductCreateWithoutSectionInput } from './section-product-create-without-section.input';
import { Type } from 'class-transformer';
import { SectionProductCreateOrConnectWithoutSectionInput } from './section-product-create-or-connect-without-section.input';
import { SectionProductUpsertWithWhereUniqueWithoutSectionInput } from './section-product-upsert-with-where-unique-without-section.input';
import { SectionProductCreateManySectionInputEnvelope } from './section-product-create-many-section-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SectionProductWhereUniqueInput } from './section-product-where-unique.input';
import { SectionProductUpdateWithWhereUniqueWithoutSectionInput } from './section-product-update-with-where-unique-without-section.input';
import { SectionProductUpdateManyWithWhereWithoutSectionInput } from './section-product-update-many-with-where-without-section.input';
import { SectionProductScalarWhereInput } from './section-product-scalar-where.input';

@InputType()
export class SectionProductUncheckedUpdateManyWithoutSectionNestedInput {

    @Field(() => [SectionProductCreateWithoutSectionInput], {nullable:true})
    @Type(() => SectionProductCreateWithoutSectionInput)
    create?: Array<SectionProductCreateWithoutSectionInput>;

    @Field(() => [SectionProductCreateOrConnectWithoutSectionInput], {nullable:true})
    @Type(() => SectionProductCreateOrConnectWithoutSectionInput)
    connectOrCreate?: Array<SectionProductCreateOrConnectWithoutSectionInput>;

    @Field(() => [SectionProductUpsertWithWhereUniqueWithoutSectionInput], {nullable:true})
    @Type(() => SectionProductUpsertWithWhereUniqueWithoutSectionInput)
    upsert?: Array<SectionProductUpsertWithWhereUniqueWithoutSectionInput>;

    @Field(() => SectionProductCreateManySectionInputEnvelope, {nullable:true})
    @Type(() => SectionProductCreateManySectionInputEnvelope)
    createMany?: SectionProductCreateManySectionInputEnvelope;

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

    @Field(() => [SectionProductUpdateWithWhereUniqueWithoutSectionInput], {nullable:true})
    @Type(() => SectionProductUpdateWithWhereUniqueWithoutSectionInput)
    update?: Array<SectionProductUpdateWithWhereUniqueWithoutSectionInput>;

    @Field(() => [SectionProductUpdateManyWithWhereWithoutSectionInput], {nullable:true})
    @Type(() => SectionProductUpdateManyWithWhereWithoutSectionInput)
    updateMany?: Array<SectionProductUpdateManyWithWhereWithoutSectionInput>;

    @Field(() => [SectionProductScalarWhereInput], {nullable:true})
    @Type(() => SectionProductScalarWhereInput)
    deleteMany?: Array<SectionProductScalarWhereInput>;
}
