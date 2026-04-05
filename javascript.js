        // --- 0. AJUSTE AUTOMÁTICO DE PADDING (Header Fixo) ---
        function adjustMainPadding() {
            const header = document.getElementById('mainHeader');
            const main = document.getElementById('mainContent');
            if (header && main) {
                // Pega a altura real do header + um respiro de 30px
                const headerHeight = header.offsetHeight;
                main.style.paddingTop = (headerHeight + 30) + 'px';
            }
        }
        
        // Executa ao carregar e ao redimensionar a tela
        window.addEventListener('load', adjustMainPadding);
        window.addEventListener('resize', adjustMainPadding);

        // --- 1. CONFIGURAÇÃO DE TEMA ---
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        function toggleTheme() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        }

        // --- 2. BASE DE DADOS MULTI-MÊS ---
        
        // Dados de JANEIRO 2026
        const db_janeiro_2026 = [
            {
                id: "ministerios", label: "Ministérios", category: "Ministérios", icon: "fa-bullhorn",
                items: [
                    { date: "07/01 (Qua)", role: "Direção", name: "Profecia" },
                    { date: "14/01 (Qua)", role: "Direção", name: "Adolescente e Criança" },
                    { date: "21/01 (Qua)", role: "Direção", name: "Lar e Família" },
                    { date: "28/01 (Qua)", role: "Direção", name: "MM (Mulher)" },
                    { date: "10/01 (Sáb)", role: "Direção", name: "Ministério Pessoal" },
                    { date: "17/01 (Sáb)", role: "Direção", name: "Diretoria" },
                    { date: "24/01 (Sáb)", role: "Direção", name: "Escola Sabatina" },
                    { date: "11/01 (Dom)", role: "Direção", name: "Aventureiros" },
                    { date: "18/01 (Dom)", role: "Direção", name: "Desbravador" },
                    { date: "25/01 (Dom)", role: "Direção", name: "Jovens" }
                ]
            },
            {
                id: "musica", label: "Música / Louvor", category: "Música", icon: "fa-music",
                items: [
                    { date: "11/01 (Dom)", role: "Cânticos", name: "Bia / Cleonice", songs: ["1. SOU AVENTUREIRO", "2. EU SOU FELIZ", "3. QUEM FEZ"] },
                    { date: "18/01 (Dom)", role: "Cânticos", name: "Mateus / Karina", songs: ["1. INABALÁVEL", "2. ENQUANTO EU VIVER", "3. ESPERA EM DEUS"] },
                    { date: "25/01 (Dom)", role: "Cânticos", name: "Evini / Vinícius", songs: ["1. MISSÃO", "2. EU PERTENÇO A LUZ", "3. ESTOU AQUI"] },
                    { date: "07/01 (Qua)", role: "Cânticos", name: "Thor / Mateus", songs: ["1. MAIOR QUE TUDO", "2. NÃO DESISTIR", "3. ALVO MAIS QUE A NEVE"] },
                    { date: "14/01 (Qua)", role: "Cânticos", name: "Helen / Camila", songs: ["1. CHEGOU A HORA", "2. FIRME NAS PROMESSAS", "3. ENTREGO A TI"] },
                    { date: "21/01 (Qua)", role: "Cânticos", name: "Alice / Evelyn", songs: ["1. O SANTO ESPÍRITO", "2. A ESPERANÇA É JESUS", "3. SALMOS DOS SALMOS"] },
                    { date: "28/01 (Qua)", role: "Cânticos", name: "Camila / Angela", songs: ["1. REI DOS REIS", "2. INFINITA GRAÇA", "3. RENOVA-ME"] },
                    { date: "10/01 (Sáb)", role: "Cânticos", name: "Artur / Fabiano", songs: ["1. OH, QUE ESPERANÇA", "2. NÃO HÁ O QUE TEMER", "3. DEUS NOS OUVIRA"] },
                    { date: "17/01 (Sáb)", role: "Cânticos", name: "Gil / Angela", songs: ["1. EM TUAS MÃOS", "2. SANTO SOMENTE É O SENHOR", "3. MANANCIAL"] },
                    { date: "24/01 (Sáb)", role: "Cânticos", name: "Lucia / Helen", songs: ["1. CONFIEI NO MEU SENHOR", "2. FALAR COM DEUS", "3. DEUS NOS OUVIRÁ"] },
                    { date: "31/01 (Sáb)", role: "Cânticos", name: "Alice / Ana", songs: ["1. ELE É EXALTADO", "2. VEM, SANTO ESPÍRITO", "3. QUASE NO LAR"] }
                ]
            },
            {
                id: "sonoplastia", label: "Sonoplastia", category: "Sonoplastia", icon: "fa-sliders-h",
                items: [
                    { date: "07/01 (Qua)", role: "Mesa de Som", name: "Mateus Filipe" },
                    { date: "10/01 (Sáb)", role: "Mesa de Som", name: "Ana Paula" },
                    { date: "11/01 (Dom)", role: "Mesa de Som", name: "Karina Bezerra" },
                    { date: "14/01 (Qua)", role: "Mesa de Som", name: "Mateus Filipe" },
                    { date: "17/01 (Sáb)", role: "Mesa de Som", name: "Fabiano Araújo" },
                    { date: "18/01 (Dom)", role: "Mesa de Som", name: "Evelyn Thaina" },
                    { date: "21/01 (Qua)", role: "Mesa de Som", name: "Mateus Filipe" },
                    { date: "24/01 (Sáb)", role: "Mesa de Som", name: "Karina Bezerra" },
                    { date: "25/01 (Dom)", role: "Mesa de Som", name: "Evelyn Thaina" },
                    { date: "28/01 (Qua)", role: "Mesa de Som", name: "Mateus Filipe" },
                    { date: "31/01 (Sáb)", role: "Mesa de Som", name: "Karina Bezerra" }
                ]
            },
            {
                id: "dizimos", label: "Dízimos", category: "Dízimos", icon: "fa-hand-holding-dollar",
                items: [
                    { date: "10/01 (Sáb)", role: "Recolhimento", name: "Cleonice" },
                    { date: "17/01 (Sáb)", role: "Recolhimento", name: "Camila" },
                    { date: "24/01 (Sáb)", role: "Recolhimento", name: "Angela" },
                    { date: "31/01 (Sáb)", role: "Recolhimento", name: "Mina" },
                    { date: "11/01 (Dom)", role: "Recolhimento", name: "Welma" },
                    { date: "18/01 (Dom)", role: "Recolhimento", name: "Helen" },
                    { date: "25/01 (Dom)", role: "Recolhimento", name: "Mina" },
                    { date: "07/01 (Qua)", role: "Recolhimento", name: "Angela" },
                    { date: "14/01 (Qua)", role: "Recolhimento", name: "Gil" },
                    { date: "21/01 (Qua)", role: "Recolhimento", name: "Helen" },
                    { date: "28/01 (Qua)", role: "Recolhimento", name: "Camila" }
                ]
            },
            {
                id: "diaconos", label: "Diáconos", category: "Diáconos", icon: "fa-user-tie",
                items: [
                    { date: "10/01 (Sáb)", role: "Plantão", name: "Fabiano" },
                    { date: "17/01 (Sáb)", role: "Plantão", name: "Damião" },
                    { date: "24/01 (Sáb)", role: "Plantão", name: "Elivonaldo" },
                    { date: "31/01 (Sáb)", role: "Plantão", name: "Ednaldo" },
                    { date: "11/01 (Dom)", role: "Plantão", name: "Elivonaldo" },
                    { date: "18/01 (Dom)", role: "Plantão", name: "Ednaldo" },
                    { date: "25/01 (Dom)", role: "Plantão", name: "Givaldo" },
                    { date: "07/01 (Qua)", role: "Plantão", name: "Ednaldo" },
                    { date: "14/01 (Qua)", role: "Plantão", name: "Givaldo" },
                    { date: "21/01 (Qua)", role: "Plantão", name: "Fabiano" },
                    { date: "28/01 (Qua)", role: "Plantão", name: "Damião" }
                ]
            },
            {
                id: "recepcao", label: "Recepção", category: "Recepção", icon: "fa-heart",
                items: [
                    { date: "10/01 (Sáb)", role: "Equipe", name: "Mina e Igreja" },
                    { date: "17/01 (Sáb)", role: "Equipe", name: "Welma e Igreja" },
                    { date: "24/01 (Sáb)", role: "Equipe", name: "Evini e Igreja" },
                    { date: "31/01 (Sáb)", role: "Equipe", name: "Angela e Igreja" },
                    { date: "11/01 (Dom)", role: "Equipe", name: "Welma" },
                    { date: "18/01 (Dom)", role: "Equipe", name: "Evini" },
                    { date: "25/01 (Dom)", role: "Equipe", name: "Equipe Igreja" },
                    { date: "07/01 (Qua)", role: "Equipe", name: "Equipe Igreja" },
                    { date: "14/01 (Qua)", role: "Equipe", name: "Equipe Igreja" },
                    { date: "21/01 (Qua)", role: "Equipe", name: "Equipe Igreja" },
                    { date: "28/01 (Qua)", role: "Equipe", name: "Equipe Igreja" }
                ]
            },
            {
                id: "adoracao_infantil", label: "Adoração Infantil", category: "Adoração Infantil", icon: "fa-child",
                items: [
                    { date: "10/01 (Sáb)", role: "História", name: "Helen" },
                    { date: "17/01 (Sáb)", role: "História", name: "Camila" },
                    { date: "24/01 (Sáb)", role: "História", name: "Gil" },
                    { date: "31/01 (Sáb)", role: "História", name: "Fabiano" }
                ]
            },
            {
                id: "limpeza", label: "Limpeza", category: "Limpeza", icon: "fa-broom",
                items: [
                    { date: "09/01 (Sex)", role: "Equipe", name: "Helen" },
                    { date: "16/01 (Sex)", role: "Equipe", name: "Mina" },
                    { date: "23/01 (Sex)", role: "Equipe", name: "Cleonice" },
                    { date: "30/01 (Sex)", role: "Equipe", name: "Sandra" },
                    { date: "11/01 (Dom)", role: "Equipe", name: "Gil" },
                    { date: "18/01 (Dom)", role: "Equipe", name: "Welma" },
                    { date: "25/01 (Dom)", role: "Equipe", name: "Duda" },
                    { date: "07/01 (Qua)", role: "Equipe", name: "Angela" },
                    { date: "14/01 (Qua)", role: "Equipe", name: "Lúcia" },
                    { date: "21/01 (Qua)", role: "Equipe", name: "Dilma" },
                    { date: "28/01 (Qua)", role: "Equipe", name: "Helen" }
                ]
            }
        ];

        // Dados de FEVEREIRO 2026
        const db_fevereiro_2026 = [
            {
                id: "organizacao", label: "Organização", category: "Organização", icon: "fa-bullhorn",
                items: [
                    // Quartas
                    { date: "04/02 (Qua)", role: "Direção", name: "Ministério da Saúde" },
                    { date: "11/02 (Qua)", role: "Direção", name: "Adolescentes e Crianças" },
                    { date: "18/02 (Qua)", role: "Direção", name: "Ministério da Mulher" },
                    { date: "25/02 (Qua)", role: "Direção", name: "Lar e Família" },
                    // Sábados
                    { date: "07/02 (Sáb)", role: "Direção", name: "Ministério Pessoal" },
                    { date: "14/02 (Sáb)", role: "Direção", name: "Mordomia Cristã" },
                    { date: "21/02 (Sáb)", role: "Direção", name: "Direção" },
                    { date: "28/02 (Sáb)", role: "Direção", name: "Escola Sabatina" },
                    // Domingos
                    { date: "01/02 (Dom)", role: "Direção", name: "Ministério do Homem" },
                    { date: "08/02 (Dom)", role: "Direção", name: "Aventureiros" },
                    { date: "15/02 (Dom)", role: "Direção", name: "Desbravadores" },
                    { date: "22/02 (Dom)", role: "Direção", name: "Jovens" }
                ]
            },
            {
                id: "musica", label: "Música / Louvor", category: "Música", icon: "fa-music",
                items: []
            },
            {
                id: "sonoplastia", label: "Sonoplastia", category: "Sonoplastia", icon: "fa-sliders-h",
                items: [
                    // Quartas
                    { date: "04/02 (Qua)", role: "Mesa de Som", name: "Mateus Filipe" },
                    { date: "11/02 (Qua)", role: "Mesa de Som", name: "Evelyn Thaina" },
                    { date: "18/02 (Qua)", role: "Mesa de Som", name: "Evelyn Thaina" },
                    { date: "25/02 (Qua)", role: "Mesa de Som", name: "Mateus Filipe" },
                    // Sábados
                    { date: "07/02 (Sáb)", role: "Mesa de Som", name: "Karina Bezerra" },
                    { date: "14/02 (Sáb)", role: "Mesa de Som", name: "Ana Paula" },
                    { date: "21/02 (Sáb)", role: "Mesa de Som", name: "Fabiano Araújo" },
                    { date: "28/02 (Sáb)", role: "Mesa de Som", name: "Fabiano Araújo" },
                    // Domingos
                    { date: "01/02 (Dom)", role: "Mesa de Som", name: "Fabiano Araújo" },
                    { date: "08/02 (Dom)", role: "Mesa de Som", name: "Mateus Filipe" },
                    { date: "15/02 (Dom)", role: "Mesa de Som", name: "Karina Bezerra" },
                    { date: "22/02 (Dom)", role: "Mesa de Som", name: "Karina Bezerra" }
                ]
            },
            {
                id: "diaconisas", label: "Diaconisas", category: "Diaconisas", icon: "fa-hand-holding-heart",
                items: [
                    // Quartas
                    { date: "04/02 (Qua)", role: "Equipe", name: "Helen" },
                    { date: "11/02 (Qua)", role: "Equipe", name: "Welma" },
                    { date: "18/02 (Qua)", role: "Equipe", name: "Gilsandra" },
                    { date: "25/02 (Qua)", role: "Equipe", name: "Ângela" },
                    // Sábados
                    { date: "07/02 (Sáb)", role: "Equipe", name: "Evini" },
                    { date: "14/02 (Sáb)", role: "Equipe", name: "Cleonice" },
                    { date: "21/02 (Sáb)", role: "Equipe", name: "Helen" },
                    { date: "28/02 (Sáb)", role: "Equipe", name: "Felismina" },
                    // Domingos
                    { date: "01/02 (Dom)", role: "Equipe", name: "Camila" },
                    { date: "08/02 (Dom)", role: "Equipe", name: "Felismina" },
                    { date: "15/02 (Dom)", role: "Equipe", name: "Cleonice" },
                    { date: "22/02 (Dom)", role: "Equipe", name: "Evini" }
                ]
            },
            {
                id: "diaconos", label: "Diáconos", category: "Diáconos", icon: "fa-user-tie",
                items: []
            },
            {
                id: "recepcao", label: "Recepção", category: "Recepção", icon: "fa-heart",
                items: [
                    // Quartas
                    { date: "04/02 (Qua)", role: "Equipe", name: "Igreja" },
                    { date: "11/02 (Qua)", role: "Equipe", name: "Igreja" },
                    { date: "18/02 (Qua)", role: "Equipe", name: "Igreja" },
                    { date: "25/02 (Qua)", role: "Equipe", name: "Igreja" },
                    // Sábados
                    { date: "07/02 (Sáb)", role: "Equipe", name: "Felismina e Evini" },
                    { date: "14/02 (Sáb)", role: "Equipe", name: "Ângela e Welma" },
                    { date: "21/02 (Sáb)", role: "Equipe", name: "Evini e Igreja" },
                    { date: "28/02 (Sáb)", role: "Equipe", name: "Ângela e Felismina" },
                    // Domingos
                    { date: "01/02 (Dom)", role: "Equipe", name: "Felismina" },
                    { date: "08/02 (Dom)", role: "Equipe", name: "Welma" },
                    { date: "15/02 (Dom)", role: "Equipe", name: "Evini" },
                    { date: "22/02 (Dom)", role: "Equipe", name: "Igreja" }
                ]
            },
            {
                id: "adoracao_infantil", label: "Adoração Infantil", category: "Adoração Infantil", icon: "fa-child",
                items: [
                    { date: "07/02 (Sáb)", role: "História", name: "Karina" },
                    { date: "14/02 (Sáb)", role: "História", name: "Helen" },
                    { date: "21/02 (Sáb)", role: "História", name: "Gilsandra" },
                    { date: "28/02 (Sáb)", role: "História", name: "Camila" }
                ]
            },
            {
                id: "limpeza", label: "Limpeza", category: "Limpeza", icon: "fa-broom",
                items: [
                    // Quartas
                    { date: "04/02 (Qua)", role: "Limpeza", name: "Camila" },
                    { date: "11/02 (Qua)", role: "Limpeza", name: "Cleonice" },
                    { date: "18/02 (Qua)", role: "Limpeza", name: "Ângela" },
                    { date: "25/02 (Qua)", role: "Limpeza", name: "Sandra" },
                    // Sextas
                    { date: "06/02 (Sex)", role: "Limpeza", name: "Helen" },
                    { date: "13/02 (Sex)", role: "Limpeza", name: "Felismina" },
                    { date: "20/02 (Sex)", role: "Limpeza", name: "Edilma" },
                    { date: "27/02 (Sex)", role: "Limpeza", name: "Lúcia" },
                    // Domingos
                    { date: "01/02 (Dom)", role: "Limpeza", name: "Gilsandra" },
                    { date: "08/02 (Dom)", role: "Limpeza", name: "Evini" },
                    { date: "15/02 (Dom)", role: "Limpeza", name: "Welma" },
                    { date: "22/02 (Dom)", role: "Limpeza", name: "Duda" }
                ]
            }
        ];

        // Dados de MARÇO 2026
        const db_marco_2026 = [
            {
                id: "organizacao", label: "Organização", category: "Organização", icon: "fa-bullhorn",
                items: [
                    // Quartas
                    { date: "04/03 (Qua)", role: "Direção", name: "Ministério da Saúde" },
                    { date: "11/03 (Qua)", role: "Direção", name: "Adolescentes e Crianças" },
                    { date: "18/03 (Qua)", role: "Direção", name: "Ministério da Mulher" },
                    { date: "25/03 (Qua)", role: "Direção", name: "Lar e Família" },
                    // Sábados
                    { date: "07/03 (Sáb)", role: "Direção", name: "Ministério Pessoal" },
                    { date: "14/03 (Sáb)", role: "Direção", name: "Mordomia Cristã" },
                    { date: "21/03 (Sáb)", role: "Direção", name: "Direção" },
                    { date: "28/03 (Sáb)", role: "Direção", name: "Escola Sabatina" },
                    // Domingos
                    { date: "01/03 (Dom)", role: "Direção", name: "Ministério do Homem" },
                    { date: "08/03 (Dom)", role: "Direção", name: "Aventureiros" },
                    { date: "15/03 (Dom)", role: "Direção", name: "Desbravadores" },
                    { date: "22/03 (Dom)", role: "Direção", name: "Jovens" },
                    { date: "29/03 (Dom)", role: "Direção", name: "Direção" }
                ]
            },
            {
                id: "musica", label: "Música / Louvor", category: "Música", icon: "fa-music",
                items: [
                    // Quartas
                    { date: "04/03 (Qua)", role: "Cânticos", name: "Luciana e Pedro", songs: [] },
                    { date: "11/03 (Qua)", role: "Cânticos", name: "Wilson e Adriel", songs: [] },
                    { date: "18/03 (Qua)", role: "Cânticos", name: "Vinicius e Karina", songs: [] },
                    { date: "25/03 (Qua)", role: "Cânticos", name: "Duda e Mina", songs: [] },
                    // Sábados
                    { date: "07/03 (Sáb)", role: "Cânticos", name: "Gil e Ana paula", songs: [] },
                    { date: "14/03 (Sáb)", role: "Cânticos", name: "Ângela e Edilma", songs: [] },
                    { date: "21/03 (Sáb)", role: "Cânticos", name: "Fabiano e Evini", songs: [] },
                    { date: "28/03 (Sáb)", role: "Cânticos", name: "Cleonice e Lúcia", songs: [] },
                    // Domingos
                    { date: "01/03 (Dom)", role: "Cânticos", name: "Ângela e Mateus", songs: [] },
                    { date: "08/03 (Dom)", role: "Cânticos", name: "Beatriz e Alice", songs: [] },
                    { date: "15/03 (Dom)", role: "Cânticos", name: "Sandra e Damião", songs: [] },
                    { date: "22/03 (Dom)", role: "Cânticos", name: "Helen e Givaldo", songs: [] },
                    { date: "29/03 (Dom)", role: "Cânticos", name: "Camila e Artur", songs: [] }
                ]
            },
{
                id: "sonoplastia", label: "Sonoplastia", category: "Sonoplastia", icon: "fa-sliders-h",
                items: [
                    // Quartas
                    { date: "04/03 (Qua)", role: "Mesa de Som", name: "Mateus Filipe" },
                    { date: "11/03 (Qua)", role: "Mesa de Som", name: "Evelyn Thaina" },
                    { date: "18/03 (Qua)", role: "Mesa de Som", name: "Adriel Antônio" },
                    { date: "25/03 (Qua)", role: "Mesa de Som", name: "Adriel Antônio" },
                    // Sábados
                    { date: "07/03 (Sáb)", role: "Mesa de Som", name: "Fabiano Araújo" },
                    { date: "14/03 (Sáb)", role: "Mesa de Som", name: "Karina Bezerra" },
                    { date: "21/03 (Sáb)", role: "Mesa de Som", name: "Ana Paula" },
                    { date: "28/03 (Sáb)", role: "Mesa de Som", name: "Karina Bezerra" },
                    // Domingos
                    { date: "01/03 (Dom)", role: "Mesa de Som", name: "Fabiano Araújo" },
                    { date: "08/03 (Dom)", role: "Mesa de Som", name: "Evelyn Thaina" },
                    { date: "15/03 (Dom)", role: "Mesa de Som", name: "Ana Paula" },
                    { date: "22/03 (Dom)", role: "Mesa de Som", name: "Evelyn Thaina" },
                    { date: "29/03 (Dom)", role: "Mesa de Som", name: "Mateus Filipe" }
                ]
            },
            {
                id: "diaconisas", label: "Diaconisas", category: "Diaconisas", icon: "fa-hand-holding-heart",
                items: [
                    // Quartas
                    { date: "04/03 (Qua)", role: "Equipe", name: "Luciana" },
                    { date: "11/03 (Qua)", role: "Equipe", name: "Ângela" },
                    { date: "18/03 (Qua)", role: "Equipe", name: "Mina" },
                    { date: "25/03 (Qua)", role: "Equipe", name: "Gil" },
                    // Sábados
                    { date: "07/03 (Sáb)", role: "Equipe", name: "Welma" },
                    { date: "14/03 (Sáb)", role: "Equipe", name: "Cleonice" },
                    { date: "21/03 (Sáb)", role: "Equipe", name: "Ângela" },
                    { date: "28/03 (Sáb)", role: "Equipe", name: "Helen" },
                    // Domingos
                    { date: "01/03 (Dom)", role: "Equipe", name: "Mina" },
                    { date: "08/03 (Dom)", role: "Equipe", name: "Helen" },
                    { date: "15/03 (Dom)", role: "Equipe", name: "Camila" },
                    { date: "22/03 (Dom)", role: "Equipe", name: "Evini" },
                    { date: "29/03 (Dom)", role: "Equipe", name: "Gil" }
                ]
            },
            {
                id: "diaconos", label: "Diáconos", category: "Diáconos", icon: "fa-user-tie",
                items: [] // Adicione os itens de Diáconos aqui se houver
            },
            {
                id: "recepcao", label: "Recepção", category: "Recepção", icon: "fa-heart",
                items: [
                    // Quartas
                    { date: "04/03 (Qua)", role: "Equipe", name: "Welma" },
                    { date: "11/03 (Qua)", role: "Equipe", name: "Mina" },
                    { date: "18/03 (Qua)", role: "Equipe", name: "Ângela" },
                    { date: "25/03 (Qua)", role: "Equipe", name: "Igreja" },
                    // Sábados
                    { date: "07/03 (Sáb)", role: "Equipe", name: "Igreja e Evini" },
                    { date: "14/03 (Sáb)", role: "Equipe", name: "Welma e Igreja" },
                    { date: "21/03 (Sáb)", role: "Equipe", name: "Mina e Igreja" },
                    { date: "28/03 (Sáb)", role: "Equipe", name: "Evini e Igreja" },
                    // Domingos
                    { date: "01/03 (Dom)", role: "Equipe", name: "Igreja" },
                    { date: "08/03 (Dom)", role: "Equipe", name: "Igreja" },
                    { date: "15/03 (Dom)", role: "Equipe", name: "Igreja" },
                    { date: "22/03 (Dom)", role: "Equipe", name: "Igreja" },
                    { date: "29/03 (Dom)", role: "Equipe", name: "Ângela" }
                ]
            },
            {
                id: "adoracao_infantil", label: "Adoração Infantil", category: "Adoração Infantil", icon: "fa-child",
                items: [
                    // Sábados
                    { date: "07/03 (Sáb)", role: "História", name: "Fabiano" },
                    { date: "14/03 (Sáb)", role: "História", name: "Gilsandra" },
                    { date: "21/03 (Sáb)", role: "História", name: "Helen" },
                    { date: "28/03 (Sáb)", role: "História", name: "Camila" }
                ]
            },
            {
                id: "limpeza", label: "Limpeza", category: "Limpeza", icon: "fa-broom",
                items: [
                    // Quartas
                    { date: "04/03 (Qua)", role: "Limpeza", name: "Ângela" },
                    { date: "11/03 (Qua)", role: "Limpeza", name: "Edilma" },
                    { date: "18/03 (Qua)", role: "Limpeza", name: "Mina" },
                    { date: "25/03 (Qua)", role: "Limpeza", name: "Welma" },
                    // Sextas
                    { date: "06/03 (Sex)", role: "Limpeza", name: "Camila" },
                    { date: "13/03 (Sex)", role: "Limpeza", name: "Sandra" },
                    { date: "20/03 (Sex)", role: "Limpeza", name: "Lúcia" },
                    { date: "27/03 (Sex)", role: "Limpeza", name: "Cleonice" },
                    // Domingos
                    { date: "01/03 (Dom)", role: "Limpeza", name: "Helen" },
                    { date: "08/03 (Dom)", role: "Limpeza", name: "Gil" },
                    { date: "15/03 (Dom)", role: "Limpeza", name: "Evini" },
                    { date: "22/03 (Dom)", role: "Limpeza", name: "Duda" },
                    { date: "29/03 (Dom)", role: "Limpeza", name: "Evini" }
                ]
            }
        ];

        // Dados de ABRIL 2026
        const db_abril_2026 = [
            {
                id: "organizacao", label: "Organização", category: "Organização", icon: "fa-bullhorn",
                items: [
                    { date: "01/04 (Qua)", role: "Direção", name: "Ministério da Saúde" },
                    { date: "08/04 (Qua)", role: "Direção", name: "Adolescentes e Crianças" },
                    { date: "15/04 (Qua)", role: "Direção", name: "Ministério da Mulher" },
                    { date: "22/04 (Qua)", role: "Direção", name: "Ministério Lar e Família" },
                    { date: "29/04 (Qua)", role: "Direção", name: "Direção" },
                    { date: "04/04 (Sáb)", role: "Direção", name: "Ministério Pessoal" },
                    { date: "11/04 (Sáb)", role: "Direção", name: "Ministério de Mordomia" },
                    { date: "18/04 (Sáb)", role: "Direção", name: "Escola Sabatina" },
                    { date: "25/04 (Sáb)", role: "Direção", name: "Direção" },
                    { date: "05/04 (Dom)", role: "Direção", name: "Profecias" },
                    { date: "12/04 (Dom)", role: "Direção", name: "Aventureiros" },
                    { date: "19/04 (Dom)", role: "Direção", name: "Desbravadores" },
                    { date: "26/04 (Dom)", role: "Direção", name: "Ministério Jovem" }
                ]
            },
            {
                id: "musica", label: "Música / Louvor", category: "Música", icon: "fa-music",
                items: [
                    { date: "01/04 (Qua)", role: "Cânticos", name: "Wilson e Pedro", songs: ["Hino 409", "Hino 296", "Hino 46"] },
                    { date: "08/04 (Qua)", role: "Cânticos", name: "Gil e Ângela", songs: ["Hino 458", "Hino 327", "Hino 367"] },
                    { date: "15/04 (Qua)", role: "Cânticos", name: "Mina e Karina", songs: ["Hino 48", "Hino 344", "Hino 336"] },
                    { date: "22/04 (Qua)", role: "Cânticos", name: "Helen e Camila", songs: ["Hino 361", "Hino 44", "Hino 42"] },
                    { date: "29/04 (Qua)", role: "Cânticos", name: "Cleonice e Beatriz", songs: [] },
                    { date: "04/04 (Sáb)", role: "Cânticos", name: "Artur e Fabiano", songs: ["Hino 369", "Hino 103", "Hino 135"] },
                    { date: "11/04 (Sáb)", role: "Cânticos", name: "Welma e Lúcia", songs: ["Hino 117", "Hino 129", "Hino 143"] },
                    { date: "18/04 (Sáb)", role: "Cânticos", name: "Thor e Givaldo", songs: ["Hino 115", "Hino 151", "Hino 156"] },
                    { date: "25/04 (Sáb)", role: "Cânticos", name: "Evini e Paulinha", songs: ["Hino 440", "Hino 441", "Hino 444"] },
                    { date: "05/04 (Dom)", role: "Cânticos", name: "Alice e Camila", songs: ["Hino 469", "Hino 35", "Hino 45"] },
                    { date: "12/04 (Dom)", role: "Cânticos", name: "Ângela e Adriel", songs: ["Hino 517", "Hino 514", "Hino 551"] },
                    { date: "19/04 (Dom)", role: "Cânticos", name: "Damião e Wilson", songs: ["Hino 207", "Hino 211", "Hino 235"] },
                    { date: "26/04 (Dom)", role: "Cânticos", name: "Luciana e Edilma", songs: ["Hino 269", "Hino 288", "Hino 240"] }
                ]
            },
            {
                id: "sonoplastia", label: "Sonoplastia", category: "Sonoplastia", icon: "fa-sliders-h",
                items: [
                    { date: "01/04 (Qua)", role: "Mesa de Som", name: "Mateus Filipe" },
                    { date: "08/04 (Qua)", role: "Mesa de Som", name: "Evelyn Thaina" },
                    { date: "15/04 (Qua)", role: "Mesa de Som", name: "Adriel Antônio" },
                    { date: "22/04 (Qua)", role: "Mesa de Som", name: "Adriel Antônio" },
                    { date: "29/04 (Qua)", role: "Mesa de Som", name: "Mateus Filipe" },
                    { date: "04/04 (Sáb)", role: "Mesa de Som", name: "Fabiano Araújo" },
                    { date: "11/04 (Sáb)", role: "Mesa de Som", name: "Karina Bezerra" },
                    { date: "18/04 (Sáb)", role: "Mesa de Som", name: "Ana Paula" },
                    { date: "25/04 (Sáb)", role: "Mesa de Som", name: "Karina Bezerra" },
                    { date: "05/04 (Dom)", role: "Mesa de Som", name: "Mateus Filipe" },
                    { date: "12/04 (Dom)", role: "Mesa de Som", name: "Evelyn Thaina" },
                    { date: "19/04 (Dom)", role: "Mesa de Som", name: "Ana Paula" },
                    { date: "26/04 (Dom)", role: "Mesa de Som", name: "Evelyn Thaina" }
                ]
            },
            {
                id: "diaconisas", label: "Diaconisas", category: "Diaconisas", icon: "fa-hand-holding-heart",
                items: [
                    { date: "01/04 (Qua)", role: "Equipe", name: "Ângela" },
                    { date: "08/04 (Qua)", role: "Equipe", name: "Gil" },
                    { date: "15/04 (Qua)", role: "Equipe", name: "Mina" },
                    { date: "22/04 (Qua)", role: "Equipe", name: "Helen" },
                    { date: "29/04 (Qua)", role: "Equipe", name: "Cleonice" },
                    { date: "04/04 (Sáb)", role: "Equipe", name: "Mina" },
                    { date: "11/04 (Sáb)", role: "Equipe", name: "Welma" },
                    { date: "18/04 (Sáb)", role: "Equipe", name: "Gil" },
                    { date: "25/04 (Sáb)", role: "Equipe", name: "Evini" },
                    { date: "05/04 (Dom)", role: "Equipe", name: "Cleonice" },
                    { date: "12/04 (Dom)", role: "Equipe", name: "Camila" },
                    { date: "19/04 (Dom)", role: "Equipe", name: "Ângela" },
                    { date: "26/04 (Dom)", role: "Equipe", name: "Luciana" }
                ]
            },
            {
                id: "diaconos", label: "Diáconos", category: "Diáconos", icon: "fa-user-tie",
                items: [
                    { date: "01/04 (Qua)", role: "Plantão", name: "Givaldo" },
                    { date: "08/04 (Qua)", role: "Plantão", name: "Ednaldo" },
                    { date: "15/04 (Qua)", role: "Plantão", name: "Elivonaldo" },
                    { date: "22/04 (Qua)", role: "Plantão", name: "Damião" },
                    { date: "29/04 (Qua)", role: "Plantão", name: "Fabiano" },
                    { date: "04/04 (Sáb)", role: "Plantão", name: "Ednaldo" },
                    { date: "11/04 (Sáb)", role: "Plantão", name: "Damião" },
                    { date: "18/04 (Sáb)", role: "Plantão", name: "Fabiano" },
                    { date: "25/04 (Sáb)", role: "Plantão", name: "Elivonaldo" },
                    { date: "05/04 (Dom)", role: "Plantão", name: "Givaldo" },
                    { date: "12/04 (Dom)", role: "Plantão", name: "Wilson" },
                    { date: "19/04 (Dom)", role: "Plantão", name: "Ednaldo" },
                    { date: "26/04 (Dom)", role: "Plantão", name: "Givaldo" }
                ]
            },
            {
                id: "recepcao", label: "Recepção", category: "Recepção", icon: "fa-heart",
                items: [
                    { date: "01/04 (Qua)", role: "Equipe", name: "Ângela" },
                    { date: "08/04 (Qua)", role: "Equipe", name: "Mina" },
                    { date: "15/04 (Qua)", role: "Equipe", name: "Luciana" },
                    { date: "22/04 (Qua)", role: "Equipe", name: "Pedro" },
                    { date: "29/04 (Qua)", role: "Equipe", name: "Paulinha" },
                    { date: "04/04 (Sáb)", role: "Equipe", name: "Gil e Welma" },
                    { date: "11/04 (Sáb)", role: "Equipe", name: "Evini e Gil" },
                    { date: "18/04 (Sáb)", role: "Equipe", name: "Welma e Ângela" },
                    { date: "25/04 (Sáb)", role: "Equipe", name: "Dilma e Helen" },
                    { date: "05/04 (Dom)", role: "Equipe", name: "Wilson" },
                    { date: "12/04 (Dom)", role: "Equipe", name: "Alice" },
                    { date: "19/04 (Dom)", role: "Equipe", name: "Thor" },
                    { date: "26/04 (Dom)", role: "Equipe", name: "Evelin" }
                ]
            },
            {
                id: "adoracao_infantil", label: "Adoração Infantil", category: "Adoração Infantil", icon: "fa-child",
                items: [
                    { date: "04/04 (Sáb)", role: "História", name: "Fabiano" },
                    { date: "11/04 (Sáb)", role: "História", name: "Gilsandra" },
                    { date: "18/04 (Sáb)", role: "História", name: "Helen" },
                    { date: "25/04 (Sáb)", role: "História", name: "Camila" }
                ]
            },
            {
                id: "limpeza", label: "Limpeza", category: "Limpeza", icon: "fa-broom",
                items: [
                    { date: "01/04 (Qua)", role: "Limpeza", name: "Evini" },
                    { date: "08/04 (Qua)", role: "Limpeza", name: "Edilma" },
                    { date: "15/04 (Qua)", role: "Limpeza", name: "Ângela" },
                    { date: "22/04 (Qua)", role: "Limpeza", name: "Cleonice" },
                    { date: "29/04 (Qua)", role: "Limpeza", name: "Luciana" },
                    { date: "03/04 (Sex)", role: "Limpeza", name: "Mina" },
                    { date: "10/04 (Sex)", role: "Limpeza", name: "Camila" },
                    { date: "17/04 (Sex)", role: "Limpeza", name: "Sandra" },
                    { date: "24/04 (Sex)", role: "Limpeza", name: "Helen" },
                    { date: "05/04 (Dom)", role: "Limpeza", name: "Duda" },
                    { date: "12/04 (Dom)", role: "Limpeza", name: "Welma" },
                    { date: "19/04 (Dom)", role: "Limpeza", name: "Lúcia" },
                    { date: "26/04 (Dom)", role: "Limpeza", name: "Gil" }
                ]
            }
        ];

        // --- 3. CONTROLE DE DADOS ---
        const databases = {
            'janeiro_2026': { label: 'Janeiro 2026', data: db_janeiro_2026 },
            'fevereiro_2026': { label: 'Fevereiro 2026', data: db_fevereiro_2026 },
            'marco_2026': { label: 'Março 2026', data: db_marco_2026 },
            'abril_2026': { label: 'Abril 2026', data: db_abril_2026 }
        };

        let currentMonthKey = 'abril_2026';
        let dataBase = databases[currentMonthKey].data;
        let currentTab = 'geral';
       
        // Elementos DOM
        const searchInput = document.getElementById('searchInput');
        const clearBtn = document.getElementById('clearBtn');
        const contentContainer = document.getElementById('contentContainer');
        const pageTitle = document.getElementById('pageTitle');
        const monthSelector = document.getElementById('monthSelector');

        function renderMonthSelector() {
            monthSelector.innerHTML = Object.keys(databases).map(key => `
                <option value="${key}" ${key === currentMonthKey ? 'selected' : ''}>${databases[key].label}</option>
            `).join('');
        }

        function changeMonth(monthKey) {
            currentMonthKey = monthKey;
            dataBase = databases[monthKey].data;
            renderTabs();
            renderContent(searchInput.value);
        }

        function normalizeString(str) {
            return str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";
        }

        function getDateSortValue(dateStr) {
            const parts = dateStr.split(' ')[0].split('/');
            return parseInt(parts[1]) * 100 + parseInt(parts[0]);
        }
        
        function getCurrentFormattedDate() {
            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
            const weekDay = weekDays[date.getDay()];
            return `${day}/${month} (${weekDay})`;
        }

        function getMergedData() {
            const events = {};
            dataBase.forEach(cat => {
                cat.items.forEach(item => {
                    if (!events[item.date]) {
                        events[item.date] = {
                            dateStr: item.date,
                            sortValue: getDateSortValue(item.date),
                            ministerio: null,
                            dizimos: null,
                            diaconos: null,
                            diaconisas: null,
                            recepcao: null,
                            limpeza: null,
                            musica_canticos: null,
                            musica_louvores: null,
                            sonoplastia: null,
                            adoracao: null
                        };
                    }
                    if(cat.id === 'ministerios' || cat.id === 'organizacao') events[item.date].ministerio = item.name;
                    if(cat.id === 'diaconos') events[item.date].diaconos = item.name;
                    if(cat.id === 'dizimos' || cat.id === 'diaconisas') events[item.date].diaconisas = item.name;
                    if(cat.id === 'recepcao') events[item.date].recepcao = item.name;
                    if(cat.id === 'limpeza') events[item.date].limpeza = item.name;
                    if(cat.id === 'adoracao_infantil') events[item.date].adoracao = item.name;
                    if(cat.id === 'musica') {
                        events[item.date].musica_canticos = item.name;
                        events[item.date].musica_louvores = item.songs;
                    }
                    if(cat.id === 'sonoplastia') events[item.date].sonoplastia = item.name;
                });
            });
            return Object.values(events).sort((a, b) => a.sortValue - b.sortValue);
        }

        function renderTabs() {
            const tabs = [
                { id: 'geral', label: 'Visão Geral' },
                ...dataBase.map(db => ({ id: db.id, label: db.category }))
            ];

            const tabsContainer = document.getElementById('tabsContainer');
            if (tabsContainer) {
                tabsContainer.innerHTML = tabs.map(tab => `
                    <button 
                        onclick="switchTab('${tab.id}')"
                        class="tab-btn ${currentTab === tab.id ? 'active' : ''}"
                    >
                        ${tab.label}
                    </button>
                `).join('');
            }

            const tabsSelect = document.getElementById('tabsSelect');
            if (tabsSelect) {
                tabsSelect.innerHTML = tabs.map(tab => `
                    <option value="${tab.id}" ${currentTab === tab.id ? 'selected' : ''}>
                        ${tab.label}
                    </option>
                `).join('');
            }
        }

        function switchTab(tabId) {
            currentTab = tabId;
            renderTabs();
            renderContent(searchInput.value);
            
            if(tabId === 'geral') pageTitle.textContent = "Visão Geral";
            else {
                const category = dataBase.find(d => d.id === tabId);
                pageTitle.textContent = category ? category.label : "";
            }
        }

        function renderContent(filterQuery = "") {
            const normalizedQuery = normalizeString(filterQuery);
            
            // --- LÓGICA DE REINÍCIO DE ANIMAÇÃO ---
            contentContainer.innerHTML = '';
            contentContainer.classList.remove('animate-tab');
            void contentContainer.offsetWidth;
            contentContainer.classList.add('animate-tab');
            // --- FIM DA LÓGICA DE ANIMAÇÃO ---

            if (filterQuery) {
                document.getElementById('searchFeedback').classList.remove('hidden');
                document.getElementById('searchTermDisplay').textContent = filterQuery;
                clearBtn.classList.remove('hidden');
            } else {
                document.getElementById('searchFeedback').classList.add('hidden');
                clearBtn.classList.add('hidden');
            }

            if (currentTab === 'geral') {
                const mergedData = getMergedData();
                const currentFormattedDate = getCurrentFormattedDate();
                
                // Dashboard
                const todayData = mergedData.find(d => d.dateStr === currentFormattedDate);
                let dashboardHTML = '';

                if (!filterQuery && todayData) {
                      const showDashItem = (label, val, icon) => {
                        if(!val) return '';
                        return `
                        <div class="group flex items-center p-4 bg-[rgba(125,125,125,0.05)] rounded-xl border border-[var(--glass-border)] hover:border-[var(--brand-secondary)] transition-colors">
                            <div class="w-10 h-10 rounded-xl bg-[var(--highlight-sabado-bg)] flex items-center justify-center mr-3 text-[var(--brand-secondary)] shrink-0 border border-white/10">
                                <i class="fas ${icon}"></i>
                            </div>
                            <div class="overflow-hidden">
                                <p class="text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider truncate">${label}</p>
                                <p class="text-sm md:text-base font-bold text-[var(--text-heading)] leading-tight truncate" title="${val}">${val}</p>
                            </div>
                        </div>`;
                    };

                    const showDashSongs = (songs) => {
                        if (!songs || songs.length === 0) return '';
                        return `
                        <div class="col-span-1 md:col-span-2 lg:col-span-2 p-4 bg-[rgba(125,125,125,0.05)] rounded-xl border border-[var(--glass-border)] relative overflow-hidden">
                            <div class="flex items-center mb-3 relative z-10">
                                <div class="w-8 h-8 rounded-full bg-[var(--highlight-domingo-bg)] flex items-center justify-center mr-3 text-[var(--highlight-domingo-text)] shrink-0">
                                    <i class="fas fa-list-ol"></i>
                                </div>
                                <p class="text-xs uppercase font-bold text-[var(--text-muted)] tracking-wider">Louvores</p>
                            </div>
                            <ul class="space-y-2 relative z-10">
                                ${songs.map((s, index) => `
                                    <li class="flex items-start text-sm text-[var(--text-main)]">
                                        <span class="font-mono text-[var(--brand-secondary)] text-xs mr-2 mt-0.5 font-bold">${index + 1}.</span>
                                        <span class="font-medium">${s.replace(/^\d+\.\s*/, '')}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>`;
                    };

                    dashboardHTML = `
                    <div class="dashboard-card glass-panel fade-in">
                        <div class="dashboard-header">
                            <div class="flex items-center gap-3">
                                <span class="today-badge">Hoje</span>
                                <h3 class="text-lg md:text-xl font-black text-[var(--text-heading)] font-heading uppercase">${todayData.dateStr}</h3>
                            </div>
                            ${todayData.ministerio ? `<span class="badge-ministerio shadow-sm border border-[var(--brand-secondary)]">${todayData.ministerio}</span>` : ''}
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                            ${showDashItem('Sonoplastia', todayData.sonoplastia, 'fa-sliders-h')}
                            ${showDashItem('Cânticos', todayData.musica_canticos, 'fa-music')}
                            ${showDashItem('Adoração Inf.', todayData.adoracao, 'fa-child')}
                            ${showDashItem('Diaconisas', todayData.diaconisas, 'fa-hand-holding-heart')}
                            ${showDashItem('Diáconos', todayData.diaconos, 'fa-user-tie')}
                            ${showDashItem('Recepção', todayData.recepcao, 'fa-heart')}
                            ${showDashItem('Limpeza', todayData.limpeza, 'fa-broom')}
                            ${showDashSongs(todayData.musica_louvores)}
                        </div>
                    </div>
                    `;
                }

                const filteredData = mergedData.filter(day => {
                    if (!filterQuery) return true;
                    const allValues = [
                        day.dateStr, day.ministerio, day.diaconisas, day.diaconos, 
                        day.recepcao, day.limpeza, day.musica_canticos, day.sonoplastia,
                        day.adoracao
                    ];
                    if (day.musica_louvores) allValues.push(...day.musica_louvores);
                    
                    return allValues.some(val => 
                        val && typeof val === 'string' && normalizeString(val).includes(normalizedQuery)
                    );
                });

                if (filteredData.length === 0) {
                    document.getElementById('emptyState').classList.remove('hidden');
                    return;
                } else {
                    document.getElementById('emptyState').classList.add('hidden');
                }

                const desktopHTML = `
                <div class="hidden md:block glass-panel rounded-2xl overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="custom-table text-left">
                            <thead>
                                <tr>
                                    <th class="w-1/6 border-r border-[var(--glass-border)]">Data / Responsável</th>
                                    <th class="text-center"><i style="color: var(--brand-secondary);" class="fas fa-sliders-h mr-1"></i> Som</th>
                                    <th class="text-center"><i style="color: var(--brand-secondary);" class="fas fa-music mr-1"></i> Cânticos</th>
                                    <th class="w-1/6 text-center"><i style="color: var(--brand-secondary);" class="fas fa-list-ol mr-1"></i> Louvor</th>
                                    <th class="text-center"><i style="color: var(--brand-secondary);" class="fas fa-hand-holding-heart mr-1"></i> Diaconisas</th>
                                    <th class="text-center"><i style="color: var(--brand-secondary);" class="fas fa-user-tie mr-1"></i> Diáconos</th>
                                    <th class="text-center"><i style="color: var(--brand-secondary);" class="fas fa-heart mr-1"></i> Recepção</th>
                                    <th class="text-center"><i style="color: var(--brand-secondary);" class="fas fa-child mr-1"></i> Adoração Inf.</th>
                                    <th class="text-center"><i style="color: var(--brand-secondary);" class="fas fa-broom mr-1"></i> Limpeza</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${filteredData.map(day => {
                                    let dateStyle = "color: var(--text-muted);";
                                    let indicatorClass = "date-indicator-other";
                                    let rowBgStyle = "";
                                    
                                    if(day.dateStr.includes('Sáb')) { 
                                        dateStyle = "color: var(--highlight-sabado-text); font-weight: 700;"; 
                                        indicatorClass = "date-indicator-sab";
                                        rowBgStyle = "background-color: var(--highlight-sabado-bg);";
                                    }
                                    if(day.dateStr.includes('Dom')) { 
                                        dateStyle = "color: var(--highlight-domingo-text); font-weight: 700;"; 
                                        indicatorClass = "date-indicator-dom";
                                        rowBgStyle = "background-color: var(--highlight-domingo-bg);";
                                    }
                                    
                                    const ministerioHtml = day.ministerio 
                                        ? `<div class="mt-2"><span class="badge-ministerio">${day.ministerio}</span></div>` 
                                        : `<span class="block text-xs text-[var(--text-muted)] mt-2 font-light italic">Sem direção</span>`;
                                    
                                    const makeCell = (val) => val ? `<span class="font-medium text-[var(--text-main)] text-sm">${val}</span>` : `<span class="text-[var(--text-muted)] text-xs opacity-50">•</span>`;
                                    
                                    const makeSongsList = (songs) => {
                                        if (!songs || songs.length === 0) return `<span class="text-[var(--text-muted)] text-xs opacity-50">•</span>`;
                                        return `<ul class="text-xs text-[var(--text-main)] space-y-1">${songs.map(s => `<li>${s}</li>`).join('')}</ul>`;
                                    };

                                    return `
                                        <tr style="${rowBgStyle}">
                                            <td class="col-highlight align-top ${indicatorClass} pl-4">
                                                <span style="${dateStyle}" class="text-sm uppercase tracking-wider block font-heading">${day.dateStr}</span>
                                                ${ministerioHtml}
                                            </td>
                                            <td class="text-center align-top border-r border-[var(--glass-border)]">${makeCell(day.sonoplastia)}</td>
                                            <td class="text-center align-top border-r border-[var(--glass-border)]">${makeCell(day.musica_canticos)}</td>
                                            <td class="align-top border-r border-[var(--glass-border)] p-3">${makeSongsList(day.musica_louvores)}</td>
                                            <td class="text-center align-top border-r border-[var(--glass-border)]">${makeCell(day.diaconisas)}</td>
                                            <td class="text-center align-top border-r border-[var(--glass-border)]">${makeCell(day.diaconos)}</td>
                                            <td class="text-center align-top border-r border-[var(--glass-border)]">${makeCell(day.recepcao)}</td>
                                            <td class="text-center align-top border-r border-[var(--glass-border)]">${makeCell(day.adoracao)}</td>
                                            <td class="text-center align-top">${makeCell(day.limpeza)}</td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>`;

                const mobileHTML = `
                <div class="md:hidden space-y-4">
                    ${filteredData.map(day => {
                        let borderColorClass = "mobile-card-other";
                        let dateStyle = "color: var(--text-muted);";
                        
                        if(day.dateStr.includes('Sáb')) { borderColorClass = "mobile-card-sab"; dateStyle = "color: var(--highlight-sabado-text);"; }
                        if(day.dateStr.includes('Dom')) { borderColorClass = "mobile-card-dom"; dateStyle = "color: var(--highlight-domingo-text);"; }
                        
                        const showItem = (label, val, icon) => {
                            if(!val) return '';
                            return `
                            <div class="info-item">
                                <span class="info-label"><i style="color: var(--text-muted);" class="fas ${icon}"></i> ${label}</span>
                                <span class="text-sm font-semibold text-[var(--text-main)] leading-tight block">${val}</span>
                            </div>`;
                        };

                        const showSongs = (songs) => {
                            if (!songs || songs.length === 0) return '';
                            return `
                            <div class="music-block">
                                <span class="info-label"><i class="fas fa-list-ol"></i> Louvor (Músicas)</span>
                                <ul class="text-sm font-semibold text-[var(--text-main)] space-y-1 mt-1">
                                    ${songs.map(s => `<li>${s}</li>`).join('')}
                                </ul>
                            </div>`;
                        };

                        return `
                        <div class="mobile-card glass-panel ${borderColorClass}">
                            <div class="flex flex-col mb-3 border-b border-[var(--glass-border)] pb-3">
                                <span style="${dateStyle}" class="text-lg font-black font-heading tracking-wide">${day.dateStr}</span>
                                ${day.ministerio ? `<div class="mt-2"><span class="badge-ministerio">${day.ministerio}</span></div>` : ''}
                            </div>
                            
                            <div class="info-grid">
                                ${showItem('Sonoplastia', day.sonoplastia, 'fa-sliders-h')}
                                ${showItem('Cânticos', day.musica_canticos, 'fa-music')}
                                ${showSongs(day.musica_louvores)}
                                ${showItem('Adoração Infantil', day.adoracao, 'fa-child')}
                                ${showItem('Diaconisas', day.diaconisas, 'fa-hand-holding-heart')}
                                ${showItem('Diáconos', day.diaconos, 'fa-user-tie')}
                                ${showItem('Recepção', day.recepcao, 'fa-heart')}
                                ${showItem('Limpeza', day.limpeza, 'fa-broom')}
                            </div>
                        </div>`;
                    }).join('')}
                </div>`;

                contentContainer.innerHTML = dashboardHTML + desktopHTML + mobileHTML;

            } else {
                const categoryData = dataBase.find(d => d.id === currentTab);
                let items = categoryData ? [...categoryData.items].sort((a,b) => getDateSortValue(a.date) - getDateSortValue(b.date)) : [];

                if(filterQuery) {
                    items = items.filter(item => {
                       if (typeof item.name === 'string' && normalizeString(item.name).includes(normalizedQuery)) return true;
                       if (normalizeString(item.date).includes(normalizedQuery)) return true;
                       if (item.songs && item.songs.some(s => normalizeString(s).includes(normalizedQuery))) return true;
                       return false;
                    });
                }

                if (items.length === 0) {
                    document.getElementById('emptyState').classList.remove('hidden');
                    return;
                } else {
                    document.getElementById('emptyState').classList.add('hidden');
                }

                contentContainer.innerHTML = `
                <div class="glass-panel rounded-2xl overflow-hidden shadow-soft">
                    <table class="custom-table text-left">
                        <thead class="hidden md:table-header-group">
                            <tr>
                                <th class="w-1/4">Data</th>
                                <th class="w-3/4">Escalado(a) / Detalhes</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${items.map(item => {
                                let dateColor = "text-[var(--text-muted)]";
                                let rowBgStyle = "";
                                if(item.date.includes('Sáb')) { dateColor = "text-gold font-bold"; rowBgStyle = "background-color: var(--highlight-sabado-bg);"; }
                                if(item.date.includes('Dom')) { dateColor = "text-navy font-bold"; rowBgStyle = "background-color: var(--highlight-domingo-bg);"; }

                                let detailContent = `<span class="font-bold text-[var(--text-main)]">${item.name}</span>`;
                                if(item.songs) {
                                    detailContent += `<div class="mt-2 text-xs text-[var(--text-muted)]">
                                        <p class="font-semibold mb-1"><i class="fas fa-list mr-1"></i> Músicas:</p>
                                        <ul class="list-disc list-inside space-y-0.5">${item.songs.map(s => `<li>${s}</li>`).join('')}</ul>
                                    </div>`;
                                }

                                return `
                                    <tr style="${rowBgStyle}" class="flex flex-col md:table-row border-b md:border-b-0 border-[var(--glass-border)] last:border-0 p-4 md:p-0">
                                        <td class="${dateColor} md:border-r border-[var(--glass-border)] font-heading text-sm py-2 md:py-4 px-4 md:px-6 block md:table-cell align-top">
                                            ${item.date}
                                        </td>
                                        <td class="py-2 md:py-4 px-4 md:px-6 block md:table-cell">
                                            <div class="flex flex-col md:flex-row md:items-start">
                                                <div class="flex items-center mb-2 md:mb-0">
                                                    <div class="w-8 h-8 rounded-xl bg-[var(--glass-card-bg)] flex items-center justify-center mr-3 text-[var(--text-muted)] shadow-sm shrink-0 border border-[var(--glass-border)]">
                                                        <i class="fas ${categoryData.icon} text-xs"></i>
                                                    </div>
                                                </div>
                                                <div>${detailContent}</div>
                                            </div>
                                        </td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>`;
            }
        }

        function clearSearch() {
            searchInput.value = '';
            switchTab('geral');
        }

        searchInput.addEventListener('input', (e) => renderContent(e.target.value));

        document.addEventListener('DOMContentLoaded', () => {
            renderMonthSelector();
            renderTabs();
            renderContent();
        });
