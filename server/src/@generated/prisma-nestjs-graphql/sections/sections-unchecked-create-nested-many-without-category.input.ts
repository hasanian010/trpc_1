import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsCreateWithoutCategoryInput } from './sections-create-without-category.input';
import { Type } from 'class-transformer';
import { SectionsCreateOrConnectWithoutCategoryInput } from './sections-create-or-connect-without-category.input';
import { SectionsCreateManyCategoryInputEnvelope } from './sections-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';

@InputType()
export class SectionsUncheckedCreateNestedManyWithoutCategoryInput {

    @Field(() => [SectionsCreateWithoutCategoryInput], {nullable:true})
    @Type(() => SectionsCreateWithoutCategoryInput)
    create?: Array<SectionsCreateWithoutCategoryInput>;

    @Field(() => [SectionsCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => SectionsCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<SectionsCreateOrConnectWithoutCategoryInput>;

    @Field(() => SectionsCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => SectionsCreateManyCategoryInputEnvelope)
    createMany?: SectionsCreateManyCategoryInputEnvelope;

    @Field(() => [SectionsWhereUniqueInput], {nullable:true})
    @Type(() => SectionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SectionsWhereUniqueInput, 'id'>>;
}
