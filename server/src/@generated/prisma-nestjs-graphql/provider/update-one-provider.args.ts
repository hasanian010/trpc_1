import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProviderUpdateInput } from './provider-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProviderWhereUniqueInput } from './provider-where-unique.input';

@ArgsType()
export class UpdateOneProviderArgs {

    @Field(() => ProviderUpdateInput, {nullable:false})
    @Type(() => ProviderUpdateInput)
    data!: ProviderUpdateInput;

    @Field(() => ProviderWhereUniqueInput, {nullable:false})
    @Type(() => ProviderWhereUniqueInput)
    where!: Prisma.AtLeast<ProviderWhereUniqueInput, 'id' | 'userId'>;
}
