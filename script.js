import { createElement, render } from "./libreria.js"

const Logo = createElement("img", {
    class: "logo",
    alt: "logo",
    src: "./images/logo.png"
})

const Nav = createElement("nav", {class:"main-nav"})

const Header = createElement("header", {
    class: "main-header"
}, [Logo, Nav])


render(Header, document.getElementById("root"))