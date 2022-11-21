'use strict'

const app = document.querySelector(".app");

// 1
class Component {
   constructor(selector) {
      this.selector = selector;
      this.item = document.createElement(selector);
   }

   create() {
      return app.append(this.item);
   }

   show() {
      this.item.style.display = "block";
   }

   hide() {
      this.item.style.display = "none";
   }
}

// 2
class BlockElement extends Component {
   constructor(options) {
      super(options.selector);

      this.options = options;

      delete options.selector;
      Object.assign(this.item.style, options);
   }
}

let redBlock = new BlockElement({ selector: "div", background: "red", width: "100px", height: "100px" });
let blueBlock = new BlockElement({ selector: "div", background: "blue", width: "120px", height: "120px" });

redBlock.create(); blueBlock.create();

// 3
class Circle extends BlockElement {
   constructor(options, diameter) {
      super(options);

      this.diameter = diameter;
      this.item.style.width = `${diameter}px`;
      this.item.style.height = `${diameter}px`;
      this.item.style.borderRadius = "50%";
   }
}

let greenCircle = new Circle({ selector: "div", background: "green" }, 90);
greenCircle.create(); app.append(document.createElement("br"));

// 4
class Button extends Component {
   constructor() {
      super("button");
      this.item.innerHTML = "Button Class";
   }
}

class Input extends Component {
   constructor() {
      super("input");

      this.item.setAttribute("value", "Input Class");
   }
}

class SimpleButton extends Button {
   constructor() {
      super();

      Object.assign(this.item.style, {
         "width": "230px",
         "height": "40px",
         "padding": "10px 15px",
         "color": "#fff",
         "border": "none",
         "font-size": "14px",
         "background": "#F86923",
      });
   }
}

class SelectedButton extends Button {
   constructor() {
      super();

      this.item.setAttribute("aria-selected", "true");

      Object.assign(this.item.style, {
         "width": "230px",
         "height": "40px",
         "padding": "10px 15px",
         "color": "#fff",
         "border": "none",
         "font-size": "14px",
         "background": "red",
      });
   }
}

class DisabledButton extends Button {
   constructor() {
      super();

      this.item.setAttribute("aria-disabled", "true");

      Object.assign(this.item.style, {
         "width": "230px",
         "height": "40px",
         "padding": "10px 15px",
         "color": "#fff",
         "border": "none",
         "font-size": "14px",
         "background": "#955F44",
      });
   }
}

class TextInput extends Input {
   constructor() {
      super();

      this.item.setAttribute("type", "text");

      Object.assign(this.item.style, {
         "width": "200px",
         "height": "20px",
         "padding": "10px 15px",
         "color": "#000",
         "border": "1px solid black",
         "outline": "none",
         "font-size": "14px",
      });
   }
}

class RadioInput extends Input {
   constructor() {
      super();

      this.item.setAttribute("type", "radio");
      this.item.setAttribute("id", "radio");

      Object.assign(this.item.style, {
         "width": "15px",
         "height": "15px",
      });

      let label = document.createElement("label");
      label.setAttribute("for", "radio");
      label.style.fontSize = "14px";
      label.innerHTML = "Input Class";
      app.append(label);
   }
}

class ButtonInput extends Input {
   constructor() {
      super();

      this.item.setAttribute("type", "button");
      this.item.setAttribute("onclick", "alert('Hello World!')");

      Object.assign(this.item.style, {
         "width": "230px",
         "height": "40px",
         "padding": "10px 15px",
         "color": "#000",
         "background": "grey",
         "font-size": "14px",
         "border": "none",
      });
   }
}

let input_1 = new TextInput(); input_1.create(); app.append(document.createElement("br"));
let input_2 = new RadioInput(); input_2.create(); app.append(document.createElement("br"));
let input_3 = new ButtonInput(); input_3.create(); app.append(document.createElement("br"));

let button_1 = new SimpleButton(); button_1.create(); app.append(document.createElement("br"));
let button_2 = new SelectedButton(); button_2.create(); app.append(document.createElement("br"));
let button_3 = new DisabledButton(); button_3.create(); app.append(document.createElement("br"));