<script>
  import puppeteer from 'puppeteer';

  async function runScraper() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('URL_DE_LA_PAGINA');

    const title = await page.title();
    console.log(`Título de la página: ${title}`);

    await browser.close();
  }
</script>

<main>
  <h1>Web Scraper en Svelte</h1>
  <button on:click={runScraper}>Ejecutar Scraper</button>
</main>

<style>
  main {
    text-align: center;
    margin: 2em;
  }

  button {
    padding: 1em;
    font-size: 1em;
  }
</style>
