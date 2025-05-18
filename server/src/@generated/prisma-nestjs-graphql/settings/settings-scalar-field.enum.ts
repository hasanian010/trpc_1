import { registerEnumType } from '@nestjs/graphql';

export enum SettingsScalarFieldEnum {
    id = "id",
    logo = "logo",
    icon = "icon",
    siteTitle = "siteTitle",
    slogan = "slogan",
    metaTitle = "metaTitle",
    metaDescription = "metaDescription",
    metaTag = "metaTag",
    siteUrl = "siteUrl",
    ogTitle = "ogTitle",
    ogDescription = "ogDescription",
    ogImage = "ogImage",
    email = "email",
    phone = "phone",
    corporateOffice = "corporateOffice",
    headOffice = "headOffice",
    facebook = "facebook",
    instagram = "instagram",
    youtube = "youtube",
    twitter = "twitter",
    linkedIn = "linkedIn",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SettingsScalarFieldEnum, { name: 'SettingsScalarFieldEnum', description: undefined })
