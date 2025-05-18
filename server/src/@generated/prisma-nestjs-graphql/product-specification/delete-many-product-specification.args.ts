import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductSpecificationWhereInput } from './product-specification-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyProductSpecificationArgs {

    @Field(() => ProductSpecificationWhereInput, {nullable:true})
    @Type(() => ProductSpecificationWhereInput)
    where?: ProductSpecificationWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
