# Kirby Flags

Kirby Flags adds page methods and a panel field for multiple types of flags.

Forked from medienbaecker/kirby-likes for the core design and functionality. 

## Frontend

You can either use the `toggle` route or ...

```php
<a href="<?= $page->url() ?>/like/toggle">❤️ <?= $page->likeCount() ?></a>

```


## Backend

```yml
fields:
  likes:
    label: Likes
    type: likes
```

## Disclaimer

Significant diversion in purpose from medienbaecker/kirby-likes and not to be merged back, ever.

Customized specificaly for an internal cms. No pull requests will be aproved.
