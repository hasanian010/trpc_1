import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';
import { Type } from 'class-transformer';
import { SectionsUpdateWithoutCategoryInput } from './sections-update-without-category.input';

@InputType()
export class SectionsUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => SectionsWhereUniqueInput, {nullable:false})
    @Type(() => SectionsWhereUniqueInput)
    where!: Prisma.AtLeast<SectionsWhereUniqueInput, 'id'>;

    @Field(() => SectionsUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => SectionsUpdateWithoutCategoryInput)
    data!: SectionsUpdateWithoutCategoryInput;
}
