import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionProductUpdateManyMutationInput } from './section-product-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SectionProductWhereInput } from './section-product-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySectionProductArgs {

    @Field(() => SectionProductUpdateManyMutationInput, {nullable:false})
    @Type(() => SectionProductUpdateManyMutationInput)
    data!: SectionProductUpdateManyMutationInput;

    @Field(() => SectionProductWhereInput, {nullable:true})
    @Type(() => SectionProductWhereInput)
    where?: SectionProductWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
