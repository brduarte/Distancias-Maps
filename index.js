const components = {
    inputs: require('./tools/inputs')
}

start();

async function start() {

    const content = {}

    await inputUser(content);
    console.log(content);


}


async function inputUser(content) {

    content.origins = await components.inputs.inputText('Informe o ponto de origem:(Nome da Cidade, CEP, Cordenadas)');
    content.destinations = await components.inputs.inputText('Informe o ponto de origem:(Nome da Cidade, CEP, Cordenadas)');
    content.mode = await components.inputs.inputList('Selecione um modo de transporte:', [
        'Dirigindo',
        'Caminhando',
        'Ciclismo'
    ]);

}