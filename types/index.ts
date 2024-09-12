export enum Status {
    Published = 'published',
    On_moderation = 'on_moderation',
    Draft = 'draft',
    Archive = 'archive'
}

export interface Rubric {
    id: number
    slug: string
    name_ru: string
    name_uz: string
    subject_slug: string
    subject_name_ru: string
    subject_name_uz: string
    description_ru?: string,
    description_uz?: string,
    icon?: string
    image?: string
    color?: string
}

export interface Post {
    id: number,
    slug: string
    title_ru: string
    title_uz: string
    excerpt_ru: string
    excerpt_uz: string
    status: Status
    type: string
    image_ru: string
    image_uz: string
    image_description_ru: string
    image_description_uz: string
    content_ru: string
    content_uz: string
    views_count: number
    rubric: Rubric
    published_at: string
}

export interface Breadcrumb {
    name_ru: string,
    name_uz: string
    path: string
}

export interface Seo {
    meta_title_ru: string
    meta_title_uz: string
    meta_description_ru: string
    meta_description_uz: string
    page_title_ru: string
    page_title_uz: string
}

export interface PageMeta {
    breadcrumbs: Breadcrumb[]
    seo: Seo
}
