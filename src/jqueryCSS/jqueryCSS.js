function $(selector) {
    const element = document.querySelector(selector);

    return {
        css: function css(property, value) {
            if(arguments.length === 1) {
                if(element === null) {
                    return undefined;
                }
                const value = element.style[property];
                return value === ""? undefined: value;
            }
            else if(arguments.length === 2) {
                if(element !== null) {
                    element.style[property] = value;
                }
                return this;
            }
            else {
                throw new Error("Invalid number of arguments");
            }
        }
    }
}