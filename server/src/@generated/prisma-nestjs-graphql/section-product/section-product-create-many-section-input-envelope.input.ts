import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionProductCreateManySectionInput } from './section-product-create-many-section.input';
import { Type } from 'class-transformer';

@InputType()
export class SectionProductCreateManySectionInputEnvelope {

    @Field(() => [SectionProductCreateManySectionInput], {nullable:false})
    @Type(() => SectionProductCreateManySectionInput)
    data!: Array<SectionProductCreateManySectionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
