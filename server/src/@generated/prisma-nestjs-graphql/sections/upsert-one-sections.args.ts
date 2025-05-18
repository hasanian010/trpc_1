import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';
import { Type } from 'class-transformer';
import { SectionsCreateInput } from './sections-create.input';
import { SectionsUpdateInput } from './sections-update.input';

@ArgsType()
export class UpsertOneSectionsArgs {

    @Field(() => SectionsWhereUniqueInput, {nullable:false})
    @Type(() => SectionsWhereUniqueInput)
    where!: Prisma.AtLeast<SectionsWhereUniqueInput, 'id'>;

    @Field(() => SectionsCreateInput, {nullable:false})
    @Type(() => SectionsCreateInput)
    create!: SectionsCreateInput;

    @Field(() => SectionsUpdateInput, {nullable:false})
    @Type(() => SectionsUpdateInput)
    update!: SectionsUpdateInput;
}
