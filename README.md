# PELICANO
# 🦤 Projeto Pelicano

### Conscientização da Água e Análise de Comportamento

---

## 📌 Sobre o Projeto

O **Projeto Pelicano** é um trabalho em grupo com foco na conscientização do uso da água, utilizando um site interativo para análise de comportamento e educação do usuário.

---

## 📊 Visualização de Dados

O sistema utiliza gráficos para demonstrar o consumo de água com base nas ações do usuário.

---

## 📈 Exemplo de Implementação de Gráfico

### HTML

```html
<canvas id="graficoConsumo"></canvas>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="js/grafico.js"></script>
```

---

### JavaScript (Chart.js)

```javascript
const ctx = document.getElementById('graficoConsumo');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Banho', 'Lavar louça', 'Escovar dentes', 'Outros'],
        datasets: [{
            label: 'Consumo de água (litros)',
            data: [120, 40, 15, 25],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
```

---

## 🧠 Gráfico Dinâmico com Base no Usuário

O projeto também permite gerar gráficos com base nos dados inseridos pelo usuário.

### Exemplo:

```html
<input type="number" id="tempoBanho" placeholder="Tempo de banho (min)">
<button onclick="gerarGrafico()">Calcular</button>
<canvas id="graficoConsumo"></canvas>
```

```javascript
function gerarGrafico() {
    const tempo = document.getElementById('tempoBanho').value;
    const consumo = tempo * 10;

    const ctx = document.getElementById('graficoConsumo');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Seu consumo'],
            datasets: [{
                label: 'Litros de água',
                data: [consumo],
                borderWidth: 1
            }]
        }
    });
}
```

---

## 📊 Interpretação dos Resultados

Com base no consumo estimado:

* Até 50L → Consumo baixo ✅
* 50L a 100L → Consumo moderado ⚠️
* Acima de 100L → Alto consumo 🚨

---

## 🎯 Objetivo da Visualização

Os gráficos permitem que o usuário:

* Entenda seu consumo
* Compare com médias
* Visualize o impacto de seus hábitos
* Reflita sobre mudanças necessárias

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* Chart.js

---

## 🚀 Execução

1. Abrir `index.html`
2. Inserir dados no formulário
3. Visualizar gráfico gerado automaticamente

---

## 📌 Conclusão

O uso de gráficos transforma dados simples em informações visuais, facilitando a compreensão e incentivando a mudança de comportamento em relação ao uso da água.

---
