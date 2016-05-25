# Tools

We have adopted [PostCSS](http://postcss.org/) to manage our CSS. PostCSS allows us to add specific plugins and enrich the development experience. Among the many options to make our CSS life better we started with just a few simple ones but we are planning on adding others in the future.

We currently make use of the following plugins:

- **Autoprefix**: no need to add any vendor prefix for browser compatibility it does that automatically
- **PreCss**: Sass mixins, nesting and more
- **CSSNano**: minifies the css automatically

## Structure

All of the CSS files can be found inside the `stylesheets` folder. The structure proposed is as follow:

- `components`: here you can find `button.css`, `footer.css` and `header.css`, you can add any other item or styling that can be reused across the whole project (unfortunately we don't have that many). To further explain the main `footer` and `header` don't really belong to any specific page but they are used everywhere. Same for `button`, here you can find the starting styles for each button along with the respective modifiers (e.g. `.btn--round`, `.btn--shadow`, ...).
- `config`: here are stored values used in different classes like fonts size, colors, z-index. This is the place where we want to store variables to use across the project. We don't want to clutter the project with many different font sizes, colors or z-indexes that grow up to 999999. For this reason we only pick font sizes color and z-indexes among the ones provided in the respective file.
- `pages`: just like the jsx files here you can find the specific style for each page, if a page requires major css it can be split in a subfolder with separate css files (e.g. the home page is represented by many sections each with a complete different styling, to keep things organized we have a `home` subfolder with each section style separate).
- `utils`: here you can find the reset file, animations, background colors, text classes and various other classes that are useful to use across the project (e.g. `.uppercase`, `.text-center`, `.text-left`, `.bg-blue`, ...).

Then we have the `main.css` that wires everything up and contains some styling regarding the main container and that's it. Nothing else goes in here.

## Styling 'rules'

It's hard to call them rules because they are more suggestions than anything, we try to keep the css as coherent as possible so it will be easier for everyone to develop and understand everyone's contribution.

### !important

Never use `!important` for styling, the only exception is when you need to override Material UI elements which are at times hard do style, in some peculiar cases there is no other way than using `!important`. Other than that we highly discourage the use of it.

### Mixins

On the other hand we highly encourage the use of `mixins`. These are powerful tools to make the css cleaner allowing to save some tedious typing. For the time being the mixins that are currently in the project (`utils/mixins.css`) are mostly short-hands. Even if you are not very familiar with Sass you will understand them in an instant and will probably enjoy using them anytime you can. If you feel that some specific blocks of styles are used quite often we invite you to add a mixin that anyone can take advantage of.

### Nesting

Nesting can also make CSS cleaner but **don't abuse it !** It can easily get out of hand thus making the code hard to interpret. As a general rule of thumb try to use one **1 level** of nesting, to target HTML tags. This is where BEM comes in handy to allow avoiding creating confusing CSS with multiple nesting. As an example:

```
.intro {
  .intro__header {
    padding: 10px;
  }
}
```

In this case nesting is not necessary, it doesn't bring more readability in any way. You can easily go like:

```
.intro__header{
  padding: 10px;
}
```

A good example of nesting is the following:

```
.intro__content {
  padding: 10px;
  text-align: right;
  p {
    margin-top: 10px;
  }
}
```

In this case there is no need to use an additional class to target the `p` tag. So do what you think is best and come back to these example if you are unsure.

## Naming
Things get interesting here, we decided to go with [BEM](http://getbem.com/introduction/) among the many different possibilities. We are not going to worry about the global scope of CSS classes using some extra PostCSS plugin, this project is not too large and we did not incur in any similar problem during development. BEM in this case is more than sufficient to avoid any possible collision.

## Disclaimer

We are by no means CSS experts. These are some of the rules that we try to follow that helped us keep the code very clean and easy to read. There are so many plugins and tools out there that we will probably update and change rules here and there. If there is any convention you like that you think would be good for the project let us know!
