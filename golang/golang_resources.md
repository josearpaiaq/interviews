Sobre recursos para arquitectura de backend en Go, te recomiendo estos:

Para Go en general:

- [tour.golang.org](https://go.dev/tour) — el tour oficial, cubre el lenguaje base bien
- [effective_go](https://go.dev/doc/effective_go) — cómo escribir Go idiomático (muy importante para entender patrones como el manejo de errores)

Para estructura de proyectos Go:

- [golang-standards/project-layout](https://github.com/golang-standards/project-layout) — el layout de referencia para proyectos Go, con explicaciones de cada carpeta
- [alexedwards.net/blog](https://www.alexedwards.net/blog) — el blog de Alex Edwards tiene artículos muy buenos sobre estructura de APIs REST en Go (su libro Let's Go Further es el más recomendado para APIs)

Para arquitectura backend general:

- Clean Architecture de Robert Martin — los principios aplican a cualquier lenguaje, y cuando empieces a escalar este proyecto vas a ver por qué separar handlers / services / repositories
- [roadmap backend](https://roadmap.sh/backend) — el roadmap de backend con recursos por tema

Para tu nivel ahora mismo lo más útil sería el blog de Alex Edwards — está orientado exactamente a construir APIs REST en Go y explica cada decisión arquitectónica.
