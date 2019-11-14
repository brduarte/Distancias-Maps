const components = {
    inputs: require('./tools/inputs'),
    googleService: require('./service/googleService')
}

start();

async function start() {

    const content = {}

    await inputUser(content);
    await manipulateRoutes(content);
    diplayResponse(content);

}

async function inputUser(content) {

    content.origins = await components.inputs.inputText('Informe o ponto de origem:(Nome da Cidade, CEP, Cordenadas)');
    content.destinations = await components.inputs.inputText('Informe o ponto de origem:(Nome da Cidade, CEP, Cordenadas)');
    content.mode = await components.inputs.inputList('Selecione um modo de transporte:', [
        {
            name: 'Dirigindo',
            value: 'driving'
        },
        {
            name: 'Caminhando',
            value: 'walking'
        },
        {
            name: 'Ciclismo',
            value: 'bicycling'
        },
    ]);

}

async function manipulateRoutes(content) {

    const response = await components.googleService.getDistanceMatrix(content);

    content.origins = response.destination_addresses;
    content.destinations = response.origin_addresses;

    response.rows.forEach(elements => {
        content.data = [];
        content.data.push(elements)
    });

}

function diplayResponse(content) {
 
    console.log('Ponto de partida ----------> ' + content.origins);
    console.log('Ponto de destino ----------> ' + content.destinations);
    console.log('Distancia ---------> ' + content.data[0].elements[0].distance.text);
    console.log('Tempo ----> ' + content.data[0].elements[0].duration.text);

}