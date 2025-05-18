import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionProductCreateInput } from './section-product-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSectionProductArgs {

    @Field(() => SectionProductCreateInput, {nullable:false})
    @Type(() => SectionProductCreateInput)
    data!: SectionProductCreateInput;
}
