# DD Radiadores

Site oficial da **DD Radiadores** – Curitiba/PR.

Landing page profissional para manutenção de radiadores e ar-condicionado (veículos leves e pesados).

## Stack

- HTML + Tailwind CSS (CDN)
- Mobile-first
- Schema.org LocalBusiness (AutoRepair)
- GA4 + Search Console ready
- Eventos de conversão (WhatsApp + Telefone)
- Sitemap + Robots.txt

## Deploy (Vercel)

1. Importe este repositório na Vercel
2. Framework Preset: **Other** (ou deixe auto)
3. Adicione o domínio `ddradiadores.com.br` + `www`
4. Pronto.

## Configurações de Agência (após deploy)

### 1. Google Search Console
1. Adicione a propriedade `ddradiadores.com.br`
2. Verificação por **meta tag**
3. Cole o código no `index.html` no lugar de:
   ```html
   <meta name="google-site-verification" content="COLE_O_CODIGO_DO_SEARCH_CONSOLE_AQUI" />
   ```
4. Envie o sitemap: `https://ddradiadores.com.br/sitemap.xml`

### 2. Google Analytics 4
1. Crie propriedade GA4
2. Substitua **todas** as ocorrências de `G-XXXXXXXXXX` no `index.html` pelo Measurement ID real
3. Eventos já configurados:
   - `generate_lead` no clique de WhatsApp e telefone

### 3. Google Ads / Meta Pixel (opcional)
Blocos comentados no `<head>` do `index.html` – basta descomentar e colocar os IDs.

## Contatos do cliente

| Canal     | Valor |
|-----------|-------|
| WhatsApp  | (41) 99934-3887 |
| Telefone  | (41) 3231-9088 |
| E-mail    | contato@ddradiadores.com.br |
| Instagram | [@radiadoresdd](https://www.instagram.com/radiadoresdd/) |
| Endereço  | R. Prof. Nivaldo Braga, 1922 – Capão da Imbuia – Curitiba/PR |
| CEP       | 82810-150 |
| CNPJ      | 24.394.046/0001-09 |

Mensagem padrão do WhatsApp:
> Olá, estou vindo do site, quero agendar um horário.

---

Desenvolvido para DD Radiadores · Bowl Digital
