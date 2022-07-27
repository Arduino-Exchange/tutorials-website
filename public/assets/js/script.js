// Please change the HTTP to HTTPS using Cloudflares HTTP redirect feature. This is way faster than using JS.
function loadEnding() {
    //alert('sussy baka');
    const id = document.querySelector(".ending");
    id.innerHTML = `
       <h3>Noticed something wrong? Submit an Issue or a Pull Request on <a href="https://github.com/Arduino-Exchange/tutorials-website">Github!</a></h3>
       <h3>Arduino Exchange Tutorials is an open source, community driven project!</h3>
       <br><br><br><br>
       <footer>  © Arduino Exchange 2022 - Made with ❤️ by <a class="about-link" href="https://arduinoexchange.xyz/about">our developers.</a> </footer>`;
}  