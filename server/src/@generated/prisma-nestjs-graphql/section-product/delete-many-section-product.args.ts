import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionProductWhereInput } from './section-product-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManySectionProductArgs {

    @Field(() => SectionProductWhereInput, {nullable:true})
    @Type(() => SectionProductWhereInput)
    where?: SectionProductWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
