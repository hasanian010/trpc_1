import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProviderWhereUniqueInput } from './provider-where-unique.input';
import { Type } from 'class-transformer';
import { ProviderCreateWithoutUserInput } from './provider-create-without-user.input';

@InputType()
export class ProviderCreateOrConnectWithoutUserInput {

    @Field(() => ProviderWhereUniqueInput, {nullable:false})
    @Type(() => ProviderWhereUniqueInput)
    where!: Prisma.AtLeast<ProviderWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProviderCreateWithoutUserInput, {nullable:false})
    @Type(() => ProviderCreateWithoutUserInput)
    create!: ProviderCreateWithoutUserInput;
}
