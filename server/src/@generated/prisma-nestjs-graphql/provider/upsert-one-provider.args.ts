import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProviderWhereUniqueInput } from './provider-where-unique.input';
import { Type } from 'class-transformer';
import { ProviderCreateInput } from './provider-create.input';
import { ProviderUpdateInput } from './provider-update.input';

@ArgsType()
export class UpsertOneProviderArgs {

    @Field(() => ProviderWhereUniqueInput, {nullable:false})
    @Type(() => ProviderWhereUniqueInput)
    where!: Prisma.AtLeast<ProviderWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProviderCreateInput, {nullable:false})
    @Type(() => ProviderCreateInput)
    create!: ProviderCreateInput;

    @Field(() => ProviderUpdateInput, {nullable:false})
    @Type(() => ProviderUpdateInput)
    update!: ProviderUpdateInput;
}
