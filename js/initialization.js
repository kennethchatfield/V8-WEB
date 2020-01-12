



const onWindowLoad = () => {
    if( config.defaultAttributes ){
        const elementIds = Object.keys(config.defaultAttributes);
        const elements = getAllElementsById(elementIds);
        for (let i = 0; i < elements.length; i++) {
            const elementId = elementIds[i];
            const element = elements[i];
            applyAttributes(element, config.defaultAttributes[elementId])
        }
    }
}

window.onload = onWindowLoad;