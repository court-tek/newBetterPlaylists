import { h, app } from "hyperapp"
import "./style.css"
import "./reset.css"

//colors 
let waterfall = "68829E";
let moss = "#AEBD38";
let meadow = "#598234"
let defaultStyle = {
  color: "#fff",
}

let aggStyle = {
  // width: "40%",
  display: "inline-block"
}

let listStyle = {
  fontSize: "25px",
}

let headerStyle = {
  fontSize: "40px",
  textAlign: "center",
  fontWeight: "700"
}

let playFlex = {
  flex: "0 0 calc(100% / 12 * 4)"
}

const initialState = {
  name: "Joe",
  num: 2 + 2
}

const Aggregate = state => 
  h("div", {style: aggStyle }, [
    h("h3", {style: defaultStyle}, "Number Text")
  ])

const Filter = state =>
  h("input", {type: 'text'})

const Playlist = state => 
  h("div",{style: {width: "100%", padding: "20px"}}, [
    h("h3", {style: {fontSize: "30px"}}, "Playlist Name"),
    h("ul",null, [
      h("li",{style: {...listStyle}}, "Killing Me"),
      h("li",{style: {...listStyle}}, "Celebrate"),
      h("li",{style: {...listStyle}}, "Feather"),
      h("li",{style: {...listStyle}}, "Little Man")
    ])
  ])

const view = state => 
 h("div", {style: {...defaultStyle, ...headerStyle}}, ["Title",
  h("div",{}, [
    Aggregate(),
    Aggregate(),
  ]),
  Filter(),
  h("div", {style: {display: "flex", justifyContent: "center", flexWrap: "wrap"}}, [
    h("div", {style: {...playFlex}}, [
      Playlist(),
      Playlist(),
    ]),
    h("div", {style: {...playFlex}}, [
      Playlist(),
      Playlist(),
    ]),
    h("div", {style: {...playFlex}}, [
      Playlist(),
      Playlist(),
    ]),
  ])
 ])

app({
  init: initialState,
  view: view,
  node: document.getElementById("app")
})
