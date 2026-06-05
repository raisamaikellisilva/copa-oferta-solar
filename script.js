let vendedores = JSON.parse(localStorage.getItem("vendedores")) || [

{nome:"Nunes",meta:104000,vendas:0,metaAvaliacoes:15,avaliacoes:0},
{nome:"Léo",meta:85000,vendas:0,metaAvaliacoes:15,avaliacoes:0},
{nome:"David",meta:71000,vendas:0,metaAvaliacoes:15,avaliacoes:0},
{nome:"Amanda",meta:57000,vendas:0,metaAvaliacoes:15,avaliacoes:0},
{nome:"Keu",meta:39000,vendas:0,metaAvaliacoes:10,avaliacoes:0},
{nome:"Arthur",meta:30000,vendas:0,metaAvaliacoes:5,avaliacoes:0},
{nome:"Thomas",meta:30000,vendas:0,metaAvaliacoes:5,avaliacoes:0},
{nome:"Railan",meta:30000,vendas:0,metaAvaliacoes:5,avaliacoes:0},
{nome:"Renata",meta:76000,vendas:0,metaAvaliacoes:15,avaliacoes:0},
{nome:"Karine",meta:30000,vendas:0,metaAvaliacoes:5,avaliacoes:0},
{nome:"Ricardo",meta:35000,vendas:0,metaAvaliacoes:10,avaliacoes:0},
{nome:"Thalis",meta:43000,vendas:0,metaAvaliacoes:15,avaliacoes:0},
{nome:"Jalmiro",meta:40000,vendas:0,metaAvaliacoes:15,avaliacoes:0}

];

vendedores.sort((a,b)=>
(b.vendas/b.meta) - (a.vendas/a.meta)
);

const pistas = document.getElementById("pistas");

let metaTotal = 0;
let vendidoTotal = 0;

vendedores.forEach(v=>{

metaTotal += v.meta;
vendidoTotal += v.vendas;

});

document.getElementById("metaTotal").innerText =
metaTotal.toLocaleString('pt-BR',{
style:'currency',
currency:'BRL'
});

document.getElementById("vendidoTotal").innerText =
vendidoTotal.toLocaleString('pt-BR',{
style:'currency',
currency:'BRL'
});

if(vendedores[0])
document.getElementById("primeiroNome").innerText =
vendedores[0].nome;

if(vendedores[1])
document.getElementById("segundoNome").innerText =
vendedores[1].nome;

if(vendedores[2])
document.getElementById("terceiroNome").innerText =
vendedores[2].nome;

vendedores.forEach((v,index)=>{

let porcentagem =
((v.vendas/v.meta)*100);

if(porcentagem > 100)
porcentagem = 100;

let pistaLargura = porcentagem * 0.9;

pistas.innerHTML += `

<div class="pista-card">

<div class="vendedor-header">

<div class="nome-vendedor">
#${index+1} - ${v.nome}
</div>

<div class="porcentagem">
${porcentagem.toFixed(1)}%
</div>

</div>

<div class="pista">

<div
class="carro"
style="left:${pistaLargura}%;">
🏎️
</div>

<div class="bandeira">
🏁
</div>

</div>

<div class="detalhes">

<div>
Meta:
${v.meta.toLocaleString('pt-BR',{
style:'currency',
currency:'BRL'
})}
</div>

<div>
Vendido:
${v.vendas.toLocaleString('pt-BR',{
style:'currency',
currency:'BRL'
})}
</div>

<div>
⭐ ${v.avaliacoes}/${v.metaAvaliacoes}
</div>

<div class="${v.vendas>=v.meta ? 'meta-batida':''}">
${v.vendas>=v.meta ? '🔥 META BATIDA' : ''}
</div>

</div>

</div>

`;

});

const dataFinal =
new Date("2026-06-15");

const hoje =
new Date();

const diferenca =
dataFinal - hoje;

const dias =
Math.ceil(
diferenca /
(1000*60*60*24)
);

document.getElementById("contador")
.innerText = dias > 0 ? dias : "ENCERRADO";