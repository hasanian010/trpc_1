import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';
import { Type } from 'class-transformer';
import { SectionsCreateWithoutCategoryInput } from './sections-create-without-category.input';

@InputType()
export class SectionsCreateOrConnectWithoutCategoryInput {

    @Field(() => SectionsWhereUniqueInput, {nullable:false})
    @Type(() => SectionsWhereUniqueInput)
    where!: Prisma.AtLeast<SectionsWhereUniqueInput, 'id'>;

    @Field(() => SectionsCreateWithoutCategoryInput, {nullable:false})
    @Type(() => SectionsCreateWithoutCategoryInput)
    create!: SectionsCreateWithoutCategoryInput;
}
