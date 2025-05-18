import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsCreateWithoutCategoryInput } from './sections-create-without-category.input';
import { Type } from 'class-transformer';
import { SectionsCreateOrConnectWithoutCategoryInput } from './sections-create-or-connect-without-category.input';
import { SectionsUpsertWithWhereUniqueWithoutCategoryInput } from './sections-upsert-with-where-unique-without-category.input';
import { SectionsCreateManyCategoryInputEnvelope } from './sections-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';
import { SectionsUpdateWithWhereUniqueWithoutCategoryInput } from './sections-update-with-where-unique-without-category.input';
import { SectionsUpdateManyWithWhereWithoutCategoryInput } from './sections-update-many-with-where-without-category.input';
import { SectionsScalarWhereInput } from './sections-scalar-where.input';

@InputType()
export class SectionsUpdateManyWithoutCategoryNestedInput {

    @Field(() => [SectionsCreateWithoutCategoryInput], {nullable:true})
    @Type(() => SectionsCreateWithoutCategoryInput)
    create?: Array<SectionsCreateWithoutCategoryInput>;

    @Field(() => [SectionsCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => SectionsCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<SectionsCreateOrConnectWithoutCategoryInput>;

    @Field(() => [SectionsUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => SectionsUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<SectionsUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => SectionsCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => SectionsCreateManyCategoryInputEnvelope)
    createMany?: SectionsCreateManyCategoryInputEnvelope;

    @Field(() => [SectionsWhereUniqueInput], {nullable:true})
    @Type(() => SectionsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SectionsWhereUniqueInput, 'id'>>;

    @Field(() => [SectionsWhereUniqueInput], {nullable:true})
    @Type(() => SectionsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SectionsWhereUniqueInput, 'id'>>;

    @Field(() => [SectionsWhereUniqueInput], {nullable:true})
    @Type(() => SectionsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SectionsWhereUniqueInput, 'id'>>;

    @Field(() => [SectionsWhereUniqueInput], {nullable:true})
    @Type(() => SectionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SectionsWhereUniqueInput, 'id'>>;

    @Field(() => [SectionsUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => SectionsUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<SectionsUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [SectionsUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => SectionsUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<SectionsUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [SectionsScalarWhereInput], {nullable:true})
    @Type(() => SectionsScalarWhereInput)
    deleteMany?: Array<SectionsScalarWhereInput>;
}
