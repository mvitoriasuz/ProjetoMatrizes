function calcular() {
    // Mercado 1 - Sanduíche 1
    const precoPaoMercado1Lanche1 = parseFloat(document.getElementById("preco_pao_mercado1_lanche1").value);
    const quantidadePaoMercado1Lanche1 = parseFloat(document.getElementById("quantidade_pao_mercado1_lanche1").value);
    const precoQueijoMercado1Lanche1 = parseFloat(document.getElementById("preco_queijo_mercado1_lanche1").value);
    const quantidadeQueijoMercado1Lanche1 = parseFloat(document.getElementById("quantidade_queijo_mercado1_lanche1").value);
    const precoPresuntoMercado1Lanche1 = parseFloat(document.getElementById("preco_presunto_mercado1_lanche1").value);
    const quantidadePresuntoMercado1Lanche1 = parseFloat(document.getElementById("quantidade_presunto_mercado1_lanche1").value);
    const precoAcemMercado1Lanche1 = parseFloat(document.getElementById("preco_acem_mercado1_lanche1").value);
    const quantidadeAcemMercado1Lanche1 = parseFloat(document.getElementById("quantidade_acem_mercado1_lanche1").value);

    // multiplicaçao do preço com a quantidade
    const precoLanche1Mercado1 = calcularPrecoComLucro((precoPaoMercado1Lanche1 * quantidadePaoMercado1Lanche1) + 
                                                       (precoQueijoMercado1Lanche1 * quantidadeQueijoMercado1Lanche1) + 
                                                       (precoPresuntoMercado1Lanche1 * quantidadePresuntoMercado1Lanche1) + 
                                                       (precoAcemMercado1Lanche1 * quantidadeAcemMercado1Lanche1));
    // Mercado 1 - Sanduíche 2
    const precoPaoMercado1Lanche2 = parseFloat(document.getElementById("preco_pao_mercado1_lanche2").value);
    const quantidadePaoMercado1Lanche2 = parseFloat(document.getElementById("quantidade_pao_mercado1_lanche2").value);
    const precoQueijoMercado1Lanche2 = parseFloat(document.getElementById("preco_queijo_mercado1_lanche2").value);
    const quantidadeQueijoMercado1Lanche2 = parseFloat(document.getElementById("quantidade_queijo_mercado1_lanche2").value);
    const precoPresuntoMercado1Lanche2 = parseFloat(document.getElementById("preco_presunto_mercado1_lanche2").value);
    const quantidadePresuntoMercado1Lanche2 = parseFloat(document.getElementById("quantidade_presunto_mercado1_lanche2").value);
    const precoAcemMercado1Lanche2 = parseFloat(document.getElementById("preco_acem_mercado1_lanche2").value);
    const quantidadeAcemMercado1Lanche2 = parseFloat(document.getElementById("quantidade_acem_mercado1_lanche2").value);
    
    // multiplicaçao do preço com a quantidade
    const precoLanche2Mercado1 = calcularPrecoComLucro((precoPaoMercado1Lanche2 * quantidadePaoMercado1Lanche2)+ 
                                                       (precoQueijoMercado1Lanche2 * quantidadeQueijoMercado1Lanche2)+ 
                                                       (precoPresuntoMercado1Lanche2 * quantidadePresuntoMercado1Lanche2)+ 
                                                       (precoAcemMercado1Lanche2 * quantidadeAcemMercado1Lanche2));

    // Mercado 2 - Sanduíche 1
    const precoPaoMercado2Lanche1 = parseFloat(document.getElementById("preco_pao_mercado2_lanche1").value);
    const quantidadePaoMercado2Lanche1 = parseFloat(document.getElementById("quantidade_pao_mercado2_lanche1").value);
    const precoQueijoMercado2Lanche1 = parseFloat(document.getElementById("preco_queijo_mercado2_lanche1").value);
    const quantidadeQueijoMercado2Lanche1 = parseFloat(document.getElementById("quantidade_queijo_mercado2_lanche1").value);
    const precoPresuntoMercado2Lanche1 = parseFloat(document.getElementById("preco_presunto_mercado2_lanche1").value);
    const quantidadePresuntoMercado2Lanche1 = parseFloat(document.getElementById("quantidade_presunto_mercado2_lanche1").value);
    const precoAcemMercado2Lanche1 = parseFloat(document.getElementById("preco_acem_mercado2_lanche1").value);
    const quantidadeAcemMercado2Lanche1 = parseFloat(document.getElementById("quantidade_acem_mercado2_lanche1").value);
    
    // multiplicaçao do preço com a quantidade
    const precoLanche1Mercado2 = calcularPrecoComLucro((precoPaoMercado2Lanche1 * quantidadePaoMercado2Lanche1) + 
                                                       (precoQueijoMercado2Lanche1 * quantidadeQueijoMercado2Lanche1) + 
                                                       (precoPresuntoMercado2Lanche1 * quantidadePresuntoMercado2Lanche1) + 
                                                       (precoAcemMercado2Lanche1 * quantidadeAcemMercado2Lanche1));
    // Mercado 2 - Sanduíche 2
    const precoPaoMercado2Lanche2 = parseFloat(document.getElementById("preco_pao_mercado2_lanche2").value);
    const quantidadePaoMercado2Lanche2 = parseFloat(document.getElementById("quantidade_pao_mercado2_lanche2").value);
    const precoQueijoMercado2Lanche2 = parseFloat(document.getElementById("preco_queijo_mercado2_lanche2").value);
    const quantidadeQueijoMercado2Lanche2 = parseFloat(document.getElementById("quantidade_queijo_mercado2_lanche2").value);
    const precoPresuntoMercado2Lanche2 = parseFloat(document.getElementById("preco_presunto_mercado2_lanche2").value);
    const quantidadePresuntoMercado2Lanche2 = parseFloat(document.getElementById("quantidade_presunto_mercado2_lanche2").value);
    const precoAcemMercado2Lanche2 = parseFloat(document.getElementById("preco_acem_mercado2_lanche2").value);
    const quantidadeAcemMercado2Lanche2 = parseFloat(document.getElementById("quantidade_acem_mercado2_lanche1").value);
    
    // multiplicacao do preço com a quantidade
    const precoLanche2Mercado2 = calcularPrecoComLucro((precoPaoMercado2Lanche2 * quantidadePaoMercado2Lanche2)+ 
                                                       (precoQueijoMercado2Lanche2 * quantidadeQueijoMercado2Lanche2)+ 
                                                       (precoPresuntoMercado2Lanche2 * quantidadePresuntoMercado2Lanche2)+ 
                                                       (precoAcemMercado2Lanche2 * quantidadeAcemMercado2Lanche2));

    // Exibir os resultados
    document.getElementById("preco_mercado1_lanche1").textContent = "R$ " + precoLanche1Mercado1.toFixed(2);
    document.getElementById("preco_mercado1_lanche2").textContent = "R$ " + precoLanche2Mercado1.toFixed(2);
    document.getElementById("preco_mercado2_lanche1").textContent = "R$ " + precoLanche1Mercado2.toFixed(2);
    document.getElementById("preco_mercado2_lanche2").textContent = "R$ " + precoLanche2Mercado2.toFixed(2);
}

// funçao de aplicar o lucro na tabela 
function calcularPrecoComLucro(preco) {
    return preco * 1.5; // Lucro de 50%
}
