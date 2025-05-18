import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionProductScalarWhereInput } from './section-product-scalar-where.input';
import { Type } from 'class-transformer';
import { SectionProductUpdateManyMutationInput } from './section-product-update-many-mutation.input';

@InputType()
export class SectionProductUpdateManyWithWhereWithoutSectionInput {

    @Field(() => SectionProductScalarWhereInput, {nullable:false})
    @Type(() => SectionProductScalarWhereInput)
    where!: SectionProductScalarWhereInput;

    @Field(() => SectionProductUpdateManyMutationInput, {nullable:false})
    @Type(() => SectionProductUpdateManyMutationInput)
    data!: SectionProductUpdateManyMutationInput;
}
