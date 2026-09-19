# ⚡ trinit() | Infraestrutura de Inteligência B2B

A **trinit()** é um motor autônomo de mineração, higienização e modelagem relacional de dados. O objetivo da arquitetura é reduzir a zero o tempo gasto por equipes comerciais na filtragem de planilhas de prospecção, entregando dossiês de alta conversão diretamente na ponta.

---

## 🏗️ Arquitetura do Sistema

O pipeline opera em três módulos sequenciais isolados:

* **`>_ trinit().signals` (Varredura Georreferenciada)**
  Extração em massa de domínios corporativos cruzando Nichos de Mercado x Regiões Geográficas utilizando a API do DuckDuckGo.
  
* **`>_ trinit().clean` (Higienização & Modelagem Relacional)**
  Ingestão dos dados via **Polars** e filtro de quarentena via **DuckDB**. O motor exclui CNPJs inativos, valida a infraestrutura digital e aplica modelagem cruzando tecnologias ativas (Ex: Meta Pixel, GTM, CRMs).

* **`>_ trinit().data` (Dossiê Executivo & Entrega)**
  Geração do pacote de dados final `.xlsx` (Dossiê) e disparo assíncrono via webhook utilizando **n8n**, entregando o ativo diretamente num canal do **Telegram**.

---

## 🛠️ Stack Tecnológico

- **Linguagem:** Python 3.14+
- **Engenharia de Dados:** DuckDB (banco analítico local), Polars (processamento de dataframes de alta performance).
- **Automação & Orquestração:** n8n (Webhooks) e Telegram Bot API.
- **Front-end (Vitrine):** HTML5, Tailwind CSS.

---

## 📂 Estrutura de Diretórios

```text
motor_de_dados_padrao/
├── config.json               # Matriz de cruzamento (Nichos, Cidades e Blacklist)
├── main.py                   # Orquestrador principal do pipeline
├── script/
│   ├── extracao.py           # Módulo de mineração e API
│   ├── auditoria.py          # Auditoria de tags e infraestrutura (Polars)
│   └── disparo_n8n.py        # Gatilho de entrega do dossiê final
├── dados/
│   └── historico_b2b.duckdb  # Banco de dados local para quarentena Anti-Join
├── index.html                # Landing page institucional (trinit-infra)
└── README.md
