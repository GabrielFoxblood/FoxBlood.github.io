// Dados de progresso (exemplo)
const progressData = {
    never7: ?, // ? completo
    kikokugai: ? // ? completo
};

// Função para atualizar as barras de progresso
function updateProgress() {
    const progressNever7 = document.getElementById('progress-never7');
    const statusNever7 = document.getElementById('status-never7');
    progressNever7.style.width = progressData.never7 + '%';
    statusNever7.textContent = progressData.never7 + '% Completo';

    const progressKikokugai = document.getElementById('progress-kikokugai');
    const statusKikokugai = document.getElementById('status-kikokugai');
    progressKikokugai.style.width = progressData.kikokugai + '%';
    statusKikokugai.textContent = progressData.kikokugai + '% Completo';
}

// Chame a função quando a página carregar
document.addEventListener('DOMContentLoaded', updateProgress);
