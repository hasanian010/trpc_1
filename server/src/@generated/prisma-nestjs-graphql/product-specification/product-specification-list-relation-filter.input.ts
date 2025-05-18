import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductSpecificationWhereInput } from './product-specification-where.input';

@InputType()
export class ProductSpecificationListRelationFilter {

    @Field(() => ProductSpecificationWhereInput, {nullable:true})
    every?: ProductSpecificationWhereInput;

    @Field(() => ProductSpecificationWhereInput, {nullable:true})
    some?: ProductSpecificationWhereInput;

    @Field(() => ProductSpecificationWhereInput, {nullable:true})
    none?: ProductSpecificationWhereInput;
}
