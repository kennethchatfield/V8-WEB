
const applyAttribute = (element, attrName, attribute) => {
    if( typeof attribute === 'object' && !Array.isArray(attribute)){
        applyAttributes(element[attrName],attribute);
    } else {
        element[attrName] = attribute;
    }
}

const applyAttributes = (element, attributes) => {
    Object.keys( attributes ).map( attrName => {
        const attribute = attributes[attrName];
        applyAttribute(element,attrName,attribute)
    })
}

const getElementById = document.getElementById;

const getAllElementsById = ( ids ) => ids.map(getElementById);
