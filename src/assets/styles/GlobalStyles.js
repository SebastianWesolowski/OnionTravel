import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
	box-sizing: border-box;
	/* https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth  */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}


/* More info: https://bit.ly/2PsCnzk */
/* *+* {
	margin-top: 1rem;
} */


/* Remove default padding */
/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
	padding: 0;
	list-style: none;
}


body,
html {
	vertical-align: baseline;
	margin: 0;
	/* remove margin for the main div that Gatsby mounts into */
	>div {
		margin-top: 0;
	}
}

html {
	-ms-overflow-style: scrollbar;
}

/* Set core body defaults */
body {
	min-height: 100vh;
	scroll-behavior: smooth;
	text-rendering: optimizeSpeed;
	line-height: 1.5;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
  font-family: "Roboto", sans-serif;
}


/* A elements that don't have a class get default styles */
a:not([class]) {
	text-decoration-skip-ink: auto;
}


/* Make images easier to work with */
img {
	max-width: 100%;
	display: block;
}


/* Natural flow and rhythm in articles by default */
/* article>*+*, {
	margin-top: 1em;
} */


/* .row > * {
  margin-top: 0
} */


/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
	font: inherit;
}


/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
	* {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
		scroll-behavior: auto !important;
	}
}


/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
	margin: 0;
	vertical-align: baseline;
}
`;
