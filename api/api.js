function start() {
    const PORT = 3000;
    console.log(`Rodando na porta ${PORT}`)
    return {  
        fetch(request) {
            return new Response("Welcome to Bun!");
        }
    };
}

start();