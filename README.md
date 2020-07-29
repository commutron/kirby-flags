# Kirby Flags

Kirby Flags adds page methods and a panel field for multiple types of flags.

Forked from medienbaecker/kirby-likes for the core design and functionality.

Still includes 'like' ❤️ but also adds 'strike' ⛔, 'bell' 🔔, 'edit' ✍ and 'photo' 📷.




## Frontend 

### Toggle



As a PHP string

```php

<a href="<?= $page->url() ?>/flag/like/toggle">❤️</a>

```

or as Twig Template

```php

<a href="{{ page.url() }}/flag/like">❤️</a>

```



#### Modules

Totally understandable if this part seems weird and hacky. Its for specific behavior needed in the Commutron CMS. In a different context where you don't need all that it works just fine if you ignore this part.

For use with 'medienbaecker/kirby-modules' plugin; the page URL needs to point to the module and a third parameter is required for redirect.




```php

<a href="<?= page.parent.parent.url() ?> . '/modules/' . <?= page.slug ?> . '/flag/photo/ ' . <?= page.parent.parent.uri ?>">📷</a>

```



In addition it accepts URL content query strings and anchor/hash tags.

But to avoid the query strings from being stripped out; the `?` must be replaced with `~*~`.


```php

<a href="<?= page.parent.parent.url() ?> . '/modules/' . <?= page.slug ?> . '/flag/photo/ ' . <?= page.parent.parent.uri ?> . '~*~m=' . <?= page.slug ?> . '#' . <?= page.slug ?>">📷</a>

```



#### Full Twig String

```php

<a href="{{ page.parent.parent.url() }}/modules/{{ page.slug }}/flag/edit/{{ page.parent.parent.uri }}~*~m={{ page.slug }}#{{ page.slug }}">✍</a>


```



### Display Binary


Did the current visitor toggle the flag. Does not read login, only uses a hashed IP address as identifier `md5(kirby->visitor->ip())`.

```php

didLike();

didStrike();

didBell();

didEdit();

didPhoto();

returns 1 or 0
    
```




### Display Count

```php

likeCount();

strikeCount();

editCount();

bellCount();

photoCount();

```



PHP Template

```php

<?= page->strikeCount() ? "⛔" . page.strikeCount() ?>

```

or as Twig Template

```php

{{ page.bellCount() ? "🔔" ~ page.bellCount() }}

```



## Backend

YAML Blueprint

```yml
fields:
  likes:
    label: Likes
    type: likes
  strikes:
    label: Strikes
    type: strikes
  edits:
    label: Edits
    type: edits
  bells:
    label: Bells
    type: bells
  photos:
    label: Photos
    type: photos
```

Individual flags cannot be removed but each count can be reset to zero.



## Gotcha

Does Not function on 'Home' pages. 

The route pattern for this was included in 'kirby-likes' but it was unnecessary for this context.



## Disclaimer

Significant diversion in purpose from medienbaecker/kirby-likes and not to be merged back, ever.

Customized specifically for an internal CMS. No pull requests will be approved but by all means fork and copy. 



## Thanks

All the credit and ❤️ to Thomas Günther @ https://github.com/medienbaecker.