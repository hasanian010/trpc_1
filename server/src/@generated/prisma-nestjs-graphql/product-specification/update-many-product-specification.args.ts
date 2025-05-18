import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductSpecificationUpdateManyMutationInput } from './product-specification-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductSpecificationWhereInput } from './product-specification-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyProductSpecificationArgs {

    @Field(() => ProductSpecificationUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductSpecificationUpdateManyMutationInput)
    data!: ProductSpecificationUpdateManyMutationInput;

    @Field(() => ProductSpecificationWhereInput, {nullable:true})
    @Type(() => ProductSpecificationWhereInput)
    where?: ProductSpecificationWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
