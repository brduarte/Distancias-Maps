const components = {
    inputs: require('./tools/inputs'),
    env: require('env')()
}

start();

async function start() {

    const content = {}


    console.log(env.get('REPOSITORI_API'))

    // await inputUser(content);
    // console.log(content);


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