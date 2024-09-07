# Frontend Mentor - Loopstudios landing page solution


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### Links

- Solution URL: (https://github.com/EAguayodev/frontendmentor-loopstudios-landing-page)
- Live Site URL: (https://frontendmentor-loopstudios-landing-page-mu.vercel.app/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Desktop-first workflow

### What I learned

I learned how to create two separate menu designs to display differently depending on the users device. Apply the clip-path property to clip the main image in the challenge as well as apply css grid methods.

To see how you can add code snippets, see below:

```html
<header>
    <nav class="navbar">
      <a href="index.html">
        <img class="logo" src="images/logo.svg" alt="logo">
      </a>

      <button type="button" class="hamburger" id="hamburger">
        <img class="open" id="icon-open" src="images/icon-hamburger.svg" alt="hamburger">
      </button>

      <ul class="menu show" id="menu-list">
        <img class="icon-close" id="icon-close" src="images/icon-close.svg" alt="close">
        <li>
          <a href="#about">
            About
          </a>
        </li>
        <li>
          <a href="#careers">
            Careers
          </a>
        </li>
        <li>
          <a href="#events">
            Events
          </a>
        </li>
        <li>
          <a href="#products">
            Products
          </a>
        </li>
        <li>
          <a href="#support">
            Support
          </a>
        </li>
      </ul>
    </nav>
    <div class="box-line">
      <h1>
        IMMERSIVE EXPERIENCES THAT DELIVER
      </h1>
    </div>
</header>
```
```css
.interactive_img {
    margin-left: -1rem;
    margin-top: -6rem;
    margin-bottom: 7rem;
    clip-path: polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 40%, 78% 40%, 78% 100%, 0 100%, 0% 85%);
}
```

### Continued development

For continued development I plan along the way to do the following:
- Continue the learning path for advanced css techniques.
- Impliment scss as my main css processor for future challenges.
- Use the next 5 months to continue diving deep into advanced css techniques, and Javascript.


### Useful resources

- [https://bennettfeely.com/clippy/] - This resource helped me find my solution to clip the bottom right of the image by applying the clip-path property to the image..



## Author

- Website - [Eric Aguayo Email Marketer | Content editor portfolio](https://www.ericaguayo.com)
- Frontend Mentor - [@EAguayodev](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/)
