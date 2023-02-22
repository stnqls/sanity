> https://my-blog-nextjs.sanity.studio

# Sanity.io

Sanity는 블로그 등에서 사용하는 여러 컨텐츠를 편리하게 관리할 수 있는 콘텐츠 관리 시스템이다.

# Sanity 사용하기

```
npm i @sanity/cli -g
sanity login
sanity init
```

# Query

```
*[_type == 'post']{
  title,
  subtitle,
  createdAt,
  'content':content[]{
  ...,
  ...select(_type == 'imageGallery'->{'images':images[] {...,'url':asset ->url}})
  },
  'slug':slug.current,
  'thumbnail': {
    'alt': thumbnail.alt,
    'imageUrl': thumbnail.asset -> url
  },
  'author': author -> {
    name,
    role,
    'image': image.asset -> url
  },
    'tag': tag -> {
    title,
    'slug': slug.current
    }
}
```
