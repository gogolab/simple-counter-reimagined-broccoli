import h from "hyperscript";
import hh from "hyperscript-helpers";

const { div, button } = hh(h);

const initModel = 0;

function view(dispatch, model) {
    return div([
        div(`Counter: ${model}`),
        div([
            button(
                {
                    onclick: () => dispatch("plus")
                },
                "+"
            ),
            button(
                {
                    onclick: () => dispatch("minus")
                },
                "-"
            )
        ])
    ]);
}

function update(msg, model) {
    switch (msg) {
        case "plus":
            return model + 1;
        case "minus":
            return model - 1;
        default:
            return model;
    }
}

// Impure code below:

function app(initModel, view, update, node) {
    let model = initModel;
    let currentView = view(dispatch, model);
    node.appendChild(currentView);

    function dispatch(msg) {
        model = update(msg, model);
        const updatedView = view(dispatch, model);
        node.replaceChild(updatedView, currentView);
        currentView = updatedView;
    }
}

const rootNode = document.getElementById("app");
// rootNode.appendChild(view(update("minus", initModel)));

app(initModel, view, update, rootNode);
