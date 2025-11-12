const SUPABASE_URL = "[SUA_URL_API]";
const SUPABASE_ANON_KEY="[SUA_ANON_KEY]"

let courses = [];

async function getCourses(){
    // Header Auth
    const response = await fetch(`${SUPABASE_URL}/rest/v1/courses?select=*`, {
        headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`
        }
    });

    const data = await response.json();
    courses = data;

    listCourses(courses);
}

// Função que irá listar os cursos de acordo com o parâmetro "data" da função
function listCourses(data){
    const resultado = document.getElementById("resultado-api");
    // innerHTML serve para passar/embutir um HTML em um elemento
    resultado.innerHTML = "";

    data.forEach((course) => {
        // createElement = criar um elemento HTML
        const cardCourse = document.createElement("div");
        cardCourse.className = "card-course";

        // ``: Template Literals: Concatenar variáveis com textos
        cardCourse.innerHTML = `
            <img src="${course.image || 'https://cdn-icons-png.flaticon.com/512/1695/1695213.png'}"
            alt="Imagem do curso ${course.name}" />
            <div class="card-content">
                <h3>${course.name}</h3>
                <p>${course.description || ""}</p>
                <p><strong>Categoria:</strong> ${course.category}</p>
                <div class="tags">
                    ${(course.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </div>
                <span class="badge-active ${course.active ? '' : 'badge-inactive'}">
                    ${course.active ? 'Ativo' : 'Inativo'}                
                </span>
            </div>
        `;

        // appendChild serve para adicionar um elemento filho dentro do elemento pai
        resultado.appendChild(cardCourse);
    })
}

getCourses()