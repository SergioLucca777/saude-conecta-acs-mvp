// Funções JavaScript simples para o MVP de Apresentação

// Função para simular a exibição do indicador offline (chamada no botão de registrar visita)
function showOfflineIndicator() {
    const indicator = document.getElementById('offline-status');
    if (indicator) {
        indicator.style.display = 'block';
        // Esconde o indicador após alguns segundos para simulação
        setTimeout(() => {
            indicator.style.display = 'none';
        }, 5000); // Mostra por 5 segundos
    }
}

// Adiciona a classe 'active' ao link de navegação da página atual (exemplo simples)
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop(); // Pega o nome do arquivo atual
    if (currentPage) {
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
});

console.log("Script MVP Saúde Conecta ACS carregado.");

