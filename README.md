## Check http://shouldiprefix.com/#grids to test if PostCss is prefixing our css props

---

## Read https://sass-guidelin.es/#architecture

```
sass/
|
|– abstracts/
| |– \_variables.scss # Sass Variables
| |– \_functions.scss # Sass Functions
| |– \_mixins.scss # Sass Mixins
| |– \_placeholders.scss # Sass Placeholders
|
|– base/
| |– \_reset.scss # Reset/normalize
| |– \_typography.scss # Typography rules
| … # Etc.
|
|– components/
| |– \_buttons.scss # Buttons
| |– \_carousel.scss # Carousel
| |– \_cover.scss # Cover
| |– \_dropdown.scss # Dropdown
| … # Etc.
|
|– layout/
| |– \_navigation.scss # Navigation
| |– \_grid.scss # Grid system
| |– \_header.scss # Header
| |– \_footer.scss # Footer
| |– \_sidebar.scss # Sidebar
| |– \_forms.scss # Forms
| … # Etc.
|
|– pages/
| |– \_home.scss # Home specific styles
| |– \_contact.scss # Contact specific styles
| … # Etc.
|
|– themes/
| |– \_theme.scss # Default theme
| |– \_admin.scss # Admin theme
| … # Etc.
|
|– vendors/
| |– \_bootstrap.scss # Bootstrap
| |– \_jquery-ui.scss # jQuery UI
| … # Etc.
|
`– main.scss # Main Sass file
```

---

> function used to set font-size edges and maybe also line height

![alt text](./src//assets//img/fs-compatibe.png 'font size')

> or even simpler where (`x > 0`)

![alt text](./src//assets//img/fs-simpler.png 'font size')

> but in all cases it's not easy to impliment

---

# check https://blog.logrocket.com/managing-dom-components-reactdom/ for modals
