import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { ProductUpdateimagesInput } from './product-updateimages.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SellerUpdateOneRequiredWithoutProductsNestedInput } from '../seller/seller-update-one-required-without-products-nested.input';
import { MainCategoryUpdateOneRequiredWithoutProductsNestedInput } from '../main-category/main-category-update-one-required-without-products-nested.input';
import { CategoryUpdateOneWithoutProductsNestedInput } from '../category/category-update-one-without-products-nested.input';
import { SubCategoryUpdateManyWithoutProductsNestedInput } from '../sub-category/sub-category-update-many-without-products-nested.input';
import { BrandUpdateOneWithoutProductsNestedInput } from '../brand/brand-update-one-without-products-nested.input';
import { TagUpdateManyWithoutProductsNestedInput } from '../tag/tag-update-many-without-products-nested.input';
import { FlashUpdateOneWithoutProductsNestedInput } from '../flash/flash-update-one-without-products-nested.input';
import { ProductAttributeValuesUpdateManyWithoutProductNestedInput } from '../product-attribute-values/product-attribute-values-update-many-without-product-nested.input';
import { ProductAttributeVariantUpdateManyWithoutProductNestedInput } from '../product-attribute-variant/product-attribute-variant-update-many-without-product-nested.input';
import { ProductAttributeUpdateManyWithoutProductNestedInput } from '../product-attribute/product-attribute-update-many-without-product-nested.input';
import { ProductSpecificationUpdateManyWithoutProductNestedInput } from '../product-specification/product-specification-update-many-without-product-nested.input';
import { ProductMetaUpdateOneWithoutProductNestedInput } from '../product-meta/product-meta-update-one-without-product-nested.input';
import { RefundableUpdateManyWithoutProductNestedInput } from '../refundable/refundable-update-many-without-product-nested.input';
import { WishlistUpdateManyWithoutProductNestedInput } from '../wishlist/wishlist-update-many-without-product-nested.input';
import { ReviewUpdateManyWithoutProductNestedInput } from '../review/review-update-many-without-product-nested.input';
import { SectionProductUpdateManyWithoutProductNestedInput } from '../section-product/section-product-update-many-without-product-nested.input';

@InputType()
export class ProductUpdateWithoutOrderProductsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    unit?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    minPurchase?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    refundAble?: BoolFieldUpdateOperationsInput;

    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: ProductUpdateimagesInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    youtubeLink?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    price?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quantity?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    discount?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    discountUnit?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    visibility?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isApproved?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    estimateDelivery?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    warranty?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showStock?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tax?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    taxUnit?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    totalPrice?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    disclaimer?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => SellerUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    seller?: SellerUpdateOneRequiredWithoutProductsNestedInput;

    @Field(() => MainCategoryUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    mainCategory?: MainCategoryUpdateOneRequiredWithoutProductsNestedInput;

    @Field(() => CategoryUpdateOneWithoutProductsNestedInput, {nullable:true})
    category?: CategoryUpdateOneWithoutProductsNestedInput;

    @Field(() => SubCategoryUpdateManyWithoutProductsNestedInput, {nullable:true})
    subCategories?: SubCategoryUpdateManyWithoutProductsNestedInput;

    @Field(() => BrandUpdateOneWithoutProductsNestedInput, {nullable:true})
    brand?: BrandUpdateOneWithoutProductsNestedInput;

    @Field(() => TagUpdateManyWithoutProductsNestedInput, {nullable:true})
    tags?: TagUpdateManyWithoutProductsNestedInput;

    @Field(() => FlashUpdateOneWithoutProductsNestedInput, {nullable:true})
    flash?: FlashUpdateOneWithoutProductsNestedInput;

    @Field(() => ProductAttributeValuesUpdateManyWithoutProductNestedInput, {nullable:true})
    attributeValues?: ProductAttributeValuesUpdateManyWithoutProductNestedInput;

    @Field(() => ProductAttributeVariantUpdateManyWithoutProductNestedInput, {nullable:true})
    attributeVariants?: ProductAttributeVariantUpdateManyWithoutProductNestedInput;

    @Field(() => ProductAttributeUpdateManyWithoutProductNestedInput, {nullable:true})
    productAttribute?: ProductAttributeUpdateManyWithoutProductNestedInput;

    @Field(() => ProductSpecificationUpdateManyWithoutProductNestedInput, {nullable:true})
    specifications?: ProductSpecificationUpdateManyWithoutProductNestedInput;

    @Field(() => ProductMetaUpdateOneWithoutProductNestedInput, {nullable:true})
    meta?: ProductMetaUpdateOneWithoutProductNestedInput;

    @Field(() => RefundableUpdateManyWithoutProductNestedInput, {nullable:true})
    refundables?: RefundableUpdateManyWithoutProductNestedInput;

    @Field(() => WishlistUpdateManyWithoutProductNestedInput, {nullable:true})
    wishlists?: WishlistUpdateManyWithoutProductNestedInput;

    @Field(() => ReviewUpdateManyWithoutProductNestedInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutProductNestedInput;

    @Field(() => SectionProductUpdateManyWithoutProductNestedInput, {nullable:true})
    sectionProducts?: SectionProductUpdateManyWithoutProductNestedInput;
}
